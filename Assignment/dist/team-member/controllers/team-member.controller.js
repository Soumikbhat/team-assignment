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
exports.TeamMemberController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_team_member_dto_1 = require("../dto/create-team-member.dto");
const update_team_member_dto_1 = require("../dto/update-team-member.dto");
const team_member_service_1 = require("../services/team-member.service");
let TeamMemberController = class TeamMemberController {
    constructor(teamMemberService) {
        this.teamMemberService = teamMemberService;
    }
    async create(createTeamMemberDto) {
        return await this.teamMemberService.create(createTeamMemberDto);
    }
    async findAll() {
        return await this.teamMemberService.findAll();
    }
    async findOne(id) {
        return await this.teamMemberService.findOne(id);
    }
    async update(id, updateTeamMemberDto) {
        return await this.teamMemberService.update(id, updateTeamMemberDto);
    }
    async remove(id) {
        return await this.teamMemberService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_team_member_dto_1.CreateTeamMemberDto]),
    __metadata("design:returntype", Promise)
], TeamMemberController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TeamMemberController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TeamMemberController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_team_member_dto_1.UpdateTeamMemberDto]),
    __metadata("design:returntype", Promise)
], TeamMemberController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TeamMemberController.prototype, "remove", null);
TeamMemberController = __decorate([
    (0, swagger_1.ApiTags)('team-members'),
    (0, common_1.Controller)('team-members'),
    __metadata("design:paramtypes", [team_member_service_1.TeamMemberService])
], TeamMemberController);
exports.TeamMemberController = TeamMemberController;
//# sourceMappingURL=team-member.controller.js.map