import { AuthResponseDto } from './dto/auth-response.dto';
import { AuthLoginDto } from './dto/login-auth.dto';
import { CreateAuthDto } from './dto/create-auth.dto';
import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  Get,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  signUp(
    @Body(ValidationPipe) createAuthDto: CreateAuthDto,
  ): Promise<AuthResponseDto> {
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
  test(@Req() request): string {
    // console.log(request.user.username);

    return 'Hello';
  }
}
