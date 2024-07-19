"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const team_member_schema_1 = require("../schemas/team-member.schema");
let TeamMemberService = class TeamMemberService {
    constructor(teamMemberModel) {
        this.teamMemberModel = teamMemberModel;
    }
    async create(createTeamMemberDto) {
        const createdTeamMember = new this.teamMemberModel(createTeamMemberDto);
        return await createdTeamMember.save();
    }
    async findAll() {
        return await this.teamMemberModel.find().exec();
    }
    async findOne(id) {
        const teamMember = await this.teamMemberModel.findById(id).exec();
        if (!teamMember) {
            throw new common_1.NotFoundException(`Team member with id ${id} not found`);
        }
        return teamMember;
    }
    async update(id, updateTeamMemberDto) {
        const updatedTeamMember = await this.teamMemberModel.findByIdAndUpdate(id, updateTeamMemberDto, { new: true }).exec();
        if (!updatedTeamMember) {
            throw new common_1.NotFoundException(`Team member with id ${id} not found`);
        }
        return updatedTeamMember;
    }
    async remove(id) {
        const result = await this.teamMemberModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException(`Team member with id ${id} not found`);
        }
    }
};
TeamMemberService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(team_member_schema_1.TeamMember.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TeamMemberService);
exports.TeamMemberService = TeamMemberService;
//# sourceMappingURL=team-member.service.js.map