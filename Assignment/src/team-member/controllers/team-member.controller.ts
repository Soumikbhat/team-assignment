import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateTeamMemberDto } from '../dto/create-team-member.dto';
import { UpdateTeamMemberDto } from '../dto/update-team-member.dto';
import { TeamMemberService } from '../services/team-member.service';
import { TeamMember } from '../schemas/team-member.schema';

@ApiTags('team-members')
@Controller('team-members')
export class TeamMemberController {
  constructor(private readonly teamMemberService: TeamMemberService) {}

  @Post()
  async create(@Body() createTeamMemberDto: CreateTeamMemberDto): Promise<TeamMember> {
    return await this.teamMemberService.create(createTeamMemberDto);
  }

  @Get()
  async findAll(): Promise<TeamMember[]> {
    return await this.teamMemberService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<TeamMember> {
    return await this.teamMemberService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTeamMemberDto: UpdateTeamMemberDto,
  ): Promise<TeamMember> {
    return await this.teamMemberService.update(id, updateTeamMemberDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.teamMemberService.remove(id);
  }
}
