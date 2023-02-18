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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobRole = void 0;
const typeorm_1 = require("typeorm");
const Employee_1 = require("./Employee");
let JobRole = class JobRole {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "joro_id" }),
    __metadata("design:type", Number)
], JobRole.prototype, "joroId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "joro_name",
        nullable: true,
        unique: true,
        length: 55,
    }),
    __metadata("design:type", String)
], JobRole.prototype, "joroName", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "joro_modified_date",
        nullable: true,
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], JobRole.prototype, "joroModifiedDate", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Employee_1.Employee, (employee) => employee.empJoro),
    __metadata("design:type", Array)
], JobRole.prototype, "employees", void 0);
JobRole = __decorate([
    (0, typeorm_1.Index)("pk_joro_id", ["joroId"], { unique: true }),
    (0, typeorm_1.Index)("job_role_joro_name_key", ["joroName"], { unique: true }),
    (0, typeorm_1.Entity)("job_role", { schema: "humanresource" })
], JobRole);
exports.JobRole = JobRole;
//# sourceMappingURL=JobRole.js.map