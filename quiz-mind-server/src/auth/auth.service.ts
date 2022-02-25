import { AuthLoginDto } from './dto/login-auth.dto';
import { PasswordService } from './password.service';
import { PrismaService } from './../prisma/prisma.service';
import {
  ConflictException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly passwordService: PasswordService,
    private jwtService: JwtService,
  ) {}
  async signUp(createAuthDto: CreateAuthDto): Promise<CreateAuthDto> {
    const alreadyExists = await this.prisma.user.findUnique({
      where: {
        username: createAuthDto.username,
      },
    });
    if (alreadyExists) {
      throw new ConflictException('User Already Exists!');
    }
    let saveUser = null;
    try {
      const hashPassword = await this.passwordService.hashPassword(
        createAuthDto.password,
      );
      saveUser = await this.prisma.user.create({
        data: {
          email: createAuthDto.email,
          username: createAuthDto.username,
          name: createAuthDto.name,
          password: hashPassword,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException();
    }
    return saveUser;
  }

  async signin(authLoginDto: AuthLoginDto): Promise<{ accessToken: string }> {
    const user = await this.prisma.user.findUnique({
      where: {
        username: authLoginDto.username,
      },
    });

    if (!user) {
      throw new NotFoundException('User Not Found !');
    }

    const isValid = await this.passwordService.validatePassword(
      authLoginDto.password,
      user.password,
    );

    if (!isValid) {
      throw new ForbiddenException('Wrong Password!');
    }

    const payload = {
      userId: user.username,
    };

    const accessToken = this.jwtService.sign(payload);
    return {
      accessToken,
    };
  }
}
