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
exports.Department = void 0;
const typeorm_1 = require("typeorm");
const EmployeeDepartmentHistory_1 = require("./EmployeeDepartmentHistory");
let Department = class Department {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "dept_id" }),
    __metadata("design:type", Number)
], Department.prototype, "deptId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "dept_name",
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], Department.prototype, "deptName", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "dept_modified_date",
        nullable: true,
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], Department.prototype, "deptModifiedDate", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => EmployeeDepartmentHistory_1.EmployeeDepartmentHistory, (employeeDepartmentHistory) => employeeDepartmentHistory.edhiDept),
    __metadata("design:type", Array)
], Department.prototype, "employeeDepartmentHistories", void 0);
Department = __decorate([
    (0, typeorm_1.Index)("pk_dept_id", ["deptId"], { unique: true }),
    (0, typeorm_1.Entity)("department", { schema: "humanresource" })
], Department);
exports.Department = Department;
//# sourceMappingURL=Department.js.map