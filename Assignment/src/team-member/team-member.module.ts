import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamMemberService } from './services/team-member.service';
import { TeamMemberController } from './controllers/team-member.controller';
import { TeamMember, TeamMemberSchema } from './schemas/team-member.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TeamMember.name, schema: TeamMemberSchema }])
  ],
  controllers: [TeamMemberController],
  providers: [TeamMemberService],
})
export class TeamMemberModule {}
