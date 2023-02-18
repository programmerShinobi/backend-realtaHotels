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
exports.EmployeeDepartmentHistory = void 0;
const typeorm_1 = require("typeorm");
const Department_1 = require("./Department");
const Employee_1 = require("./Employee");
const Shift_1 = require("./Shift");
let EmployeeDepartmentHistory = class EmployeeDepartmentHistory {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "edhi_id" }),
    __metadata("design:type", Number)
], EmployeeDepartmentHistory.prototype, "edhiId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "edhi_start_date",
        nullable: true,
    }),
    __metadata("design:type", Date)
], EmployeeDepartmentHistory.prototype, "edhiStartDate", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "edhi_end_date",
        nullable: true,
    }),
    __metadata("design:type", Date)
], EmployeeDepartmentHistory.prototype, "edhiEndDate", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "edhi_modified_date",
        nullable: true,
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], EmployeeDepartmentHistory.prototype, "edhiModifiedDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Department_1.Department, (department) => department.employeeDepartmentHistories, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "edhi_dept_id", referencedColumnName: "deptId" }]),
    __metadata("design:type", Department_1.Department)
], EmployeeDepartmentHistory.prototype, "edhiDept", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Employee_1.Employee, (employee) => employee.employeeDepartmentHistories, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "edhi_emp_id", referencedColumnName: "empId" }]),
    __metadata("design:type", Employee_1.Employee)
], EmployeeDepartmentHistory.prototype, "edhiEmp", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Shift_1.Shift, (shift) => shift.employeeDepartmentHistories, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "edhi_shift_id", referencedColumnName: "shiftId" }]),
    __metadata("design:type", Shift_1.Shift)
], EmployeeDepartmentHistory.prototype, "edhiShift", void 0);
EmployeeDepartmentHistory = __decorate([
    (0, typeorm_1.Index)("pk_edhi_id", ["edhiId"], { unique: true }),
    (0, typeorm_1.Entity)("employee_department_history", { schema: "humanresource" })
], EmployeeDepartmentHistory);
exports.EmployeeDepartmentHistory = EmployeeDepartmentHistory;
//# sourceMappingURL=EmployeeDepartmentHistory.js.map