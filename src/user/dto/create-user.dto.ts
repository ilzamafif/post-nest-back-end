import { IsEmail, IsOptional, IsString, MaxLength, MinLength } from "class-validator"

export class UserDto {
  @IsOptional()
  id?: number

  @IsString()
  @MaxLength(200)
  nama_user: string

  @IsEmail()
  email: string

  @IsString()
  @MinLength(6)
  @MaxLength(50)
  username: string

  @IsString()
  @MinLength(8)
  @MaxLength(32)
  password: string
}
