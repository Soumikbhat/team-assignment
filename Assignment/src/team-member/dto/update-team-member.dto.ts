import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTeamMemberDto } from './create-team-member.dto';

export class UpdateTeamMemberDto extends PartialType(CreateTeamMemberDto) {
  @ApiProperty()
  firstName?: string;

  @ApiProperty()
  lastName?: string;

  @ApiProperty()
  phoneNumber?: string;

  @ApiProperty()
  email?: string;

  @ApiProperty()
  role?: string;
}
