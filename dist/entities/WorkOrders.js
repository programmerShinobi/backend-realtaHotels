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
exports.WorkOrders = void 0;
const typeorm_1 = require("typeorm");
const WorkOrderDetail_1 = require("./WorkOrderDetail");
const Users_1 = require("./Users");
let WorkOrders = class WorkOrders {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "woro_id" }),
    __metadata("design:type", Number)
], WorkOrders.prototype, "woroId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "woro_start_date",
        nullable: true,
    }),
    __metadata("design:type", Date)
], WorkOrders.prototype, "woroStartDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "woro_status",
        nullable: true,
        length: 15,
    }),
    __metadata("design:type", String)
], WorkOrders.prototype, "woroStatus", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => WorkOrderDetail_1.WorkOrderDetail, (workOrderDetail) => workOrderDetail.wodeWoro),
    __metadata("design:type", Array)
], WorkOrders.prototype, "workOrderDetails", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Users_1.Users, (users) => users.workOrders, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "woro_user_id", referencedColumnName: "userId" }]),
    __metadata("design:type", Users_1.Users)
], WorkOrders.prototype, "woroUser", void 0);
WorkOrders = __decorate([
    (0, typeorm_1.Index)("work_orders_pkey", ["woroId"], { unique: true }),
    (0, typeorm_1.Entity)("work_orders", { schema: "humanresource" })
], WorkOrders);
exports.WorkOrders = WorkOrders;
//# sourceMappingURL=WorkOrders.js.map