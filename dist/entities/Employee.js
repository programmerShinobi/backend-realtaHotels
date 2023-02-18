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
var Employee_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const typeorm_1 = require("typeorm");
const JobRole_1 = require("./JobRole");
const EmployeeDepartmentHistory_1 = require("./EmployeeDepartmentHistory");
const EmployeePayHistory_1 = require("./EmployeePayHistory");
const PurchaseOrderHeader_1 = require("./PurchaseOrderHeader");
const WorkOrderDetail_1 = require("./WorkOrderDetail");
let Employee = Employee_1 = class Employee {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "emp_id" }),
    __metadata("design:type", Number)
], Employee.prototype, "empId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "emp_national_id",
        nullable: true,
        unique: true,
        length: 25,
    }),
    __metadata("design:type", String)
], Employee.prototype, "empNationalId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "emp_birth_date",
        nullable: true,
    }),
    __metadata("design:type", Date)
], Employee.prototype, "empBirthDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character", {
        name: "emp_marital_status",
        nullable: true,
        length: 1,
    }),
    __metadata("design:type", String)
], Employee.prototype, "empMaritalStatus", void 0);
__decorate([
    (0, typeorm_1.Column)("character", { name: "emp_gender", nullable: true, length: 1 }),
    __metadata("design:type", String)
], Employee.prototype, "empGender", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "emp_hire_date",
        nullable: true,
    }),
    __metadata("design:type", Date)
], Employee.prototype, "empHireDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character", { name: "emp_salaried_flag", nullable: true, length: 1 }),
    __metadata("design:type", String)
], Employee.prototype, "empSalariedFlag", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "emp_vacation_hours", nullable: true }),
    __metadata("design:type", Number)
], Employee.prototype, "empVacationHours", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "emp_sickleave_hours", nullable: true }),
    __metadata("design:type", Number)
], Employee.prototype, "empSickleaveHours", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "emp_current_flag", nullable: true }),
    __metadata("design:type", Number)
], Employee.prototype, "empCurrentFlag", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "emp_photo",
        nullable: true,
        length: 225,
    }),
    __metadata("design:type", String)
], Employee.prototype, "empPhoto", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "emp_modified_date",
        nullable: true,
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], Employee.prototype, "empModifiedDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Employee_1, (employee) => employee.employees, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "emp_emp_id", referencedColumnName: "empId" }]),
    __metadata("design:type", Employee)
], Employee.prototype, "empEmp", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Employee_1, (employee) => employee.empEmp),
    __metadata("design:type", Array)
], Employee.prototype, "employees", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => JobRole_1.JobRole, (jobRole) => jobRole.employees, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "emp_joro_id", referencedColumnName: "joroId" }]),
    __metadata("design:type", JobRole_1.JobRole)
], Employee.prototype, "empJoro", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => EmployeeDepartmentHistory_1.EmployeeDepartmentHistory, (employeeDepartmentHistory) => employeeDepartmentHistory.edhiEmp),
    __metadata("design:type", Array)
], Employee.prototype, "employeeDepartmentHistories", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => EmployeePayHistory_1.EmployeePayHistory, (employeePayHistory) => employeePayHistory.ephiEmp),
    __metadata("design:type", Array)
], Employee.prototype, "employeePayHistories", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PurchaseOrderHeader_1.PurchaseOrderHeader, (purchaseOrderHeader) => purchaseOrderHeader.poheEmp),
    __metadata("design:type", Array)
], Employee.prototype, "purchaseOrderHeaders", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => WorkOrderDetail_1.WorkOrderDetail, (workOrderDetail) => workOrderDetail.wodeEmp),
    __metadata("design:type", Array)
], Employee.prototype, "workOrderDetails", void 0);
Employee = Employee_1 = __decorate([
    (0, typeorm_1.Index)("pk_emp_id", ["empId"], { unique: true }),
    (0, typeorm_1.Index)("employee_emp_national_id_key", ["empNationalId"], { unique: true }),
    (0, typeorm_1.Entity)("employee", { schema: "humanresource" })
], Employee);
exports.Employee = Employee;
//# sourceMappingURL=Employee.js.map