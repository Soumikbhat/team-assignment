import { Model } from 'mongoose';
import { CreateTeamMemberDto } from '../dto/create-team-member.dto';
import { UpdateTeamMemberDto } from '../dto/update-team-member.dto';
import { TeamMember, TeamMemberDocument } from '../schemas/team-member.schema';
export declare class TeamMemberService {
    private teamMemberModel;
    constructor(teamMemberModel: Model<TeamMemberDocument>);
    create(createTeamMemberDto: CreateTeamMemberDto): Promise<TeamMember>;
    findAll(): Promise<TeamMember[]>;
    findOne(id: string): Promise<TeamMember>;
    update(id: string, updateTeamMemberDto: UpdateTeamMemberDto): Promise<TeamMember>;
    remove(id: string): Promise<void>;
}
