import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTeamMemberDto } from '../dto/create-team-member.dto';
import { UpdateTeamMemberDto } from '../dto/update-team-member.dto';
import { TeamMember, TeamMemberDocument } from '../schemas/team-member.schema';

@Injectable()
export class TeamMemberService {
  constructor(
    @InjectModel(TeamMember.name) private teamMemberModel: Model<TeamMemberDocument>,
  ) {}

  async create(createTeamMemberDto: CreateTeamMemberDto): Promise<TeamMember> {
    const createdTeamMember = new this.teamMemberModel(createTeamMemberDto);
    return await createdTeamMember.save();
  }

  async findAll(): Promise<TeamMember[]> {
    return await this.teamMemberModel.find().exec();
  }

  async findOne(id: string): Promise<TeamMember> {
    const teamMember = await this.teamMemberModel.findById(id).exec();
    if (!teamMember) {
      throw new NotFoundException(`Team member with id ${id} not found`);
    }
    return teamMember;
  }

  async update(id: string, updateTeamMemberDto: UpdateTeamMemberDto): Promise<TeamMember> {
    const updatedTeamMember = await this.teamMemberModel.findByIdAndUpdate(id, updateTeamMemberDto, { new: true }).exec();
    if (!updatedTeamMember) {
      throw new NotFoundException(`Team member with id ${id} not found`);
    }
    return updatedTeamMember;
  }

  async remove(id: string): Promise<void> {
    const result = await this.teamMemberModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Team member with id ${id} not found`);
    }
  }
}
