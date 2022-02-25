import { IsString, MinLength, MaxLength, IsEmail } from 'class-validator';

export class CreateAuthDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MaxLength(255)
  name: string;

  @IsString()
  @MaxLength(255)
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  // @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
  //   message: 'password too weak',
  // })
  password: string;
}
