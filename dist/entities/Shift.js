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
exports.Shift = void 0;
const typeorm_1 = require("typeorm");
const EmployeeDepartmentHistory_1 = require("./EmployeeDepartmentHistory");
let Shift = class Shift {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "shift_id" }),
    __metadata("design:type", Number)
], Shift.prototype, "shiftId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "shift_name",
        nullable: true,
        unique: true,
        length: 25,
    }),
    __metadata("design:type", String)
], Shift.prototype, "shiftName", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "shift_start_time",
        nullable: true,
        unique: true,
    }),
    __metadata("design:type", Date)
], Shift.prototype, "shiftStartTime", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "shift_end_time",
        nullable: true,
        unique: true,
    }),
    __metadata("design:type", Date)
], Shift.prototype, "shiftEndTime", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => EmployeeDepartmentHistory_1.EmployeeDepartmentHistory, (employeeDepartmentHistory) => employeeDepartmentHistory.edhiShift),
    __metadata("design:type", Array)
], Shift.prototype, "employeeDepartmentHistories", void 0);
Shift = __decorate([
    (0, typeorm_1.Index)("shift_shift_end_time_key", ["shiftEndTime"], { unique: true }),
    (0, typeorm_1.Index)("pk_shift_id", ["shiftId"], { unique: true }),
    (0, typeorm_1.Index)("shift_shift_name_key", ["shiftName"], { unique: true }),
    (0, typeorm_1.Index)("shift_shift_start_time_key", ["shiftStartTime"], { unique: true }),
    (0, typeorm_1.Entity)("shift", { schema: "humanresource" })
], Shift);
exports.Shift = Shift;
//# sourceMappingURL=Shift.js.map