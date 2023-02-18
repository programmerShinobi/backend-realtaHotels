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
exports.ServiceTask = void 0;
const typeorm_1 = require("typeorm");
const WorkOrderDetail_1 = require("./WorkOrderDetail");
let ServiceTask = class ServiceTask {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "seta_id" }),
    __metadata("design:type", Number)
], ServiceTask.prototype, "setaId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "seta_name",
        nullable: true,
        unique: true,
        length: 85,
    }),
    __metadata("design:type", String)
], ServiceTask.prototype, "setaName", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "seta_seq", nullable: true }),
    __metadata("design:type", Number)
], ServiceTask.prototype, "setaSeq", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => WorkOrderDetail_1.WorkOrderDetail, (workOrderDetail) => workOrderDetail.wodeSeta),
    __metadata("design:type", Array)
], ServiceTask.prototype, "workOrderDetails", void 0);
ServiceTask = __decorate([
    (0, typeorm_1.Index)("seta_id_pk", ["setaId"], { unique: true }),
    (0, typeorm_1.Index)("service_task_seta_name_key", ["setaName"], { unique: true }),
    (0, typeorm_1.Entity)("service_task", { schema: "master" })
], ServiceTask);
exports.ServiceTask = ServiceTask;
//# sourceMappingURL=ServiceTask.js.map