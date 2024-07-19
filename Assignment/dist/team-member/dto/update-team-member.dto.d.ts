import { CreateTeamMemberDto } from './create-team-member.dto';
declare const UpdateTeamMemberDto_base: import("@nestjs/common").Type<Partial<CreateTeamMemberDto>>;
export declare class UpdateTeamMemberDto extends UpdateTeamMemberDto_base {
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    email?: string;
    role?: string;
}
export {};
