import { CreateUserProfileDto } from './dto/create-userprofile.dto';
import { GetUserProfileDto } from './dto/get-userprofile.dto';
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserProfileDto } from './dto/update-userprofile.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  async currentUserInfo(username: string): Promise<GetUserProfileDto> {
    console.log(Date());

    const response = new GetUserProfileDto();
    const profile = await this.prisma.userProfile.findFirst({
      where: {
        user: {
          username: username,
        },
      },
    });

    if (!profile) {
      throw new NotFoundException('User Profile Not Found');
    }
    response.first_name = profile.first_name;
    response.birthday = profile.birthday;
    response.email = profile.email;
    response.last_name = profile.last_name;
    response.profile_url = profile.profile_url;
    return response;
  }

  async createProfile(
    username: string,
    createUserProfileDto: CreateUserProfileDto,
  ): Promise<GetUserProfileDto> {
    const response = new GetUserProfileDto();

    const isExits = await this.prisma.userProfile.count({
      where: {
        user: {
          username: username,
        },
      },
    });
    if (isExits != 0) {
      throw new BadRequestException('User Profile Already Exists');
    }
    const create = await this.prisma.userProfile.create({
      data: {
        first_name: createUserProfileDto.first_name,
        last_name: createUserProfileDto.last_name,
        birthday: createUserProfileDto.birthday,
        email: createUserProfileDto.email,
        profile_url: '',
        user: {
          connect: {
            username: username,
          },
        },
      },
    });
    response.first_name = create.first_name;
    response.birthday = create.birthday;
    response.email = create.email;
    response.last_name = create.last_name;
    response.profile_url = create.profile_url;
    return response;
  }
  async updateUserProfile(
    username: string,
    updateUserProfileDto: UpdateUserProfileDto,
  ): Promise<GetUserProfileDto> {
    const response = new GetUserProfileDto();

    const profile = await this.prisma.userProfile.findFirst({
      where: {
        user: {
          username: username,
        },
      },
    });

    if (!profile) {
      throw new NotFoundException('User Profile Not Found');
    }
    const user = await this.prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    if (!user) {
      throw new NotFoundException('User Not Found');
    }
    try {
      const updateProfile = await this.prisma.userProfile.update({
        where: {
          user_id: user.id,
        },
        data: {
          email: updateUserProfileDto.email,
          birthday: updateUserProfileDto.birthday,
          first_name: updateUserProfileDto.first_name,
          last_name: updateUserProfileDto.last_name,
          profile_url: '',
        },
      });

      response.first_name = updateProfile.first_name;
      response.birthday = updateProfile.birthday;
      response.email = updateProfile.email;
      response.last_name = updateProfile.last_name;
      response.profile_url = updateProfile.profile_url;
    } catch (error) {
      throw new InternalServerErrorException('Something went wrong !');
    }
    return response;
  }
}
