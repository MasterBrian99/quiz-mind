import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserProfileDto {
  @IsString()
  @IsNotEmpty()
  first_name: string;
  @IsString()
  @IsNotEmpty()
  last_name: string;
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsString()
  @IsNotEmpty()
  birthday: Date;
}
