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
exports.EmployeePayHistory = void 0;
const typeorm_1 = require("typeorm");
const Employee_1 = require("./Employee");
let EmployeePayHistory = class EmployeePayHistory {
};
__decorate([
    (0, typeorm_1.Column)("date", { primary: true, name: "ephi_rate_change_date" }),
    __metadata("design:type", String)
], EmployeePayHistory.prototype, "ephiRateChangeDate", void 0);
__decorate([
    (0, typeorm_1.Column)("money", { name: "ephi_rate_salary", nullable: true }),
    __metadata("design:type", String)
], EmployeePayHistory.prototype, "ephiRateSalary", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "ephi_pay_frequence", nullable: true }),
    __metadata("design:type", Number)
], EmployeePayHistory.prototype, "ephiPayFrequence", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "ephi_modified_date",
        nullable: true,
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], EmployeePayHistory.prototype, "ephiModifiedDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Employee_1.Employee, (employee) => employee.employeePayHistories, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "ephi_emp_id", referencedColumnName: "empId" }]),
    __metadata("design:type", Employee_1.Employee)
], EmployeePayHistory.prototype, "ephiEmp", void 0);
EmployeePayHistory = __decorate([
    (0, typeorm_1.Index)("pk_ephi_rate_change_date", ["ephiRateChangeDate"], { unique: true }),
    (0, typeorm_1.Entity)("employee_pay_history", { schema: "humanresource" })
], EmployeePayHistory);
exports.EmployeePayHistory = EmployeePayHistory;
//# sourceMappingURL=EmployeePayHistory.js.map