import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateTeamMemberDto {
  @ApiProperty()
    @IsNotEmpty()
    @IsString()
    firstName!: string;

  @ApiProperty()
    @IsNotEmpty()
    @IsString()
    lastName!: string;

  @ApiProperty()
    @IsNotEmpty()
    @IsString()
    phoneNumber!: string;

  @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email!: string;

  @ApiProperty()
    @IsNotEmpty()
    @IsEnum(['admin', 'user', 'tester'])
    role!: string;
}
