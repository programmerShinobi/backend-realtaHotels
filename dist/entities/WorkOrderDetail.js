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
exports.WorkOrderDetail = void 0;
const typeorm_1 = require("typeorm");
const Employee_1 = require("./Employee");
const Facilities_1 = require("./Facilities");
const ServiceTask_1 = require("./ServiceTask");
const WorkOrders_1 = require("./WorkOrders");
let WorkOrderDetail = class WorkOrderDetail {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "wode_id" }),
    __metadata("design:type", Number)
], WorkOrderDetail.prototype, "wodeId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "wode_task_name",
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], WorkOrderDetail.prototype, "wodeTaskName", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "wode_status",
        nullable: true,
        length: 15,
    }),
    __metadata("design:type", String)
], WorkOrderDetail.prototype, "wodeStatus", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "wode_start_date",
        nullable: true,
    }),
    __metadata("design:type", Date)
], WorkOrderDetail.prototype, "wodeStartDate", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "wode_end_date",
        nullable: true,
    }),
    __metadata("design:type", Date)
], WorkOrderDetail.prototype, "wodeEndDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "wode_notes",
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], WorkOrderDetail.prototype, "wodeNotes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Employee_1.Employee, (employee) => employee.workOrderDetails, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "wode_emp_id", referencedColumnName: "empId" }]),
    __metadata("design:type", Employee_1.Employee)
], WorkOrderDetail.prototype, "wodeEmp", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Facilities_1.Facilities, (facilities) => facilities.workOrderDetails, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "wode_faci_id", referencedColumnName: "faciId" }]),
    __metadata("design:type", Facilities_1.Facilities)
], WorkOrderDetail.prototype, "wodeFaci", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ServiceTask_1.ServiceTask, (serviceTask) => serviceTask.workOrderDetails, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "wode_seta_id", referencedColumnName: "setaId" }]),
    __metadata("design:type", ServiceTask_1.ServiceTask)
], WorkOrderDetail.prototype, "wodeSeta", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => WorkOrders_1.WorkOrders, (workOrders) => workOrders.workOrderDetails, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "wode_woro_id", referencedColumnName: "woroId" }]),
    __metadata("design:type", WorkOrders_1.WorkOrders)
], WorkOrderDetail.prototype, "wodeWoro", void 0);
WorkOrderDetail = __decorate([
    (0, typeorm_1.Index)("work_order_detail_pkey", ["wodeId"], { unique: true }),
    (0, typeorm_1.Entity)("work_order_detail", { schema: "humanresource" })
], WorkOrderDetail);
exports.WorkOrderDetail = WorkOrderDetail;
//# sourceMappingURL=WorkOrderDetail.js.map