import { AuthLoginDto } from './dto/login-auth.dto';
import { CreateAuthDto } from './dto/create-auth.dto';
import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  Get,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  signUp(
    @Body(ValidationPipe) createAuthDto: CreateAuthDto,
  ): Promise<CreateAuthDto> {
    return this.authService.signUp(createAuthDto);
  }

  @Post('/signin')
  signin(
    @Body(ValidationPipe) authLoginDto: AuthLoginDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signin(authLoginDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  test() {
    return 'Hello';
  }
}
