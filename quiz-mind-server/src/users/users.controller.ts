import { UpdateUserProfileDto } from './dto/update-userprofile.dto';
import { CreateUserProfileDto } from './dto/create-userprofile.dto';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { GetUserProfileDto } from './dto/get-userprofile.dto';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('profile')
  async currentUserInfo(@Req() request: any): Promise<GetUserProfileDto> {
    return this.usersService.currentUserInfo(request.user.username);
  }

  @Post('create')
  async createProfile(
    @Req() request: any,
    @Body(ValidationPipe) createUserProfileDto: CreateUserProfileDto,
  ): Promise<GetUserProfileDto> {
    const username = request.user.username;
    return this.usersService.createProfile(username, createUserProfileDto);
  }

  @Post('update')
  async updateUserProfile(
    @Req() request: any,
    @Body()
    updateUserProfileDto: UpdateUserProfileDto,
  ): Promise<GetUserProfileDto> {
    const username = request.user.username;
    return this.usersService.updateUserProfile(username, updateUserProfileDto);
  }
}
