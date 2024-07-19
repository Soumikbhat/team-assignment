import { CreateTeamMemberDto } from '../dto/create-team-member.dto';
import { UpdateTeamMemberDto } from '../dto/update-team-member.dto';
import { TeamMemberService } from '../services/team-member.service';
import { TeamMember } from '../schemas/team-member.schema';
export declare class TeamMemberController {
    private readonly teamMemberService;
    constructor(teamMemberService: TeamMemberService);
    create(createTeamMemberDto: CreateTeamMemberDto): Promise<TeamMember>;
    findAll(): Promise<TeamMember[]>;
    findOne(id: string): Promise<TeamMember>;
    update(id: string, updateTeamMemberDto: UpdateTeamMemberDto): Promise<TeamMember>;
    remove(id: string): Promise<void>;
}
