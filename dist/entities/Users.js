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
exports.Users = void 0;
const typeorm_1 = require("typeorm");
const BookingOrders_1 = require("./BookingOrders");
const FacilityPriceHistory_1 = require("./FacilityPriceHistory");
const HotelReviews_1 = require("./HotelReviews");
const OrderMenus_1 = require("./OrderMenus");
const PaymentTransaction_1 = require("./PaymentTransaction");
const UserAccounts_1 = require("./UserAccounts");
const UserBonusPoints_1 = require("./UserBonusPoints");
const UserMembers_1 = require("./UserMembers");
const UserPassword_1 = require("./UserPassword");
const UserProfiles_1 = require("./UserProfiles");
const UserRoles_1 = require("./UserRoles");
const WorkOrders_1 = require("./WorkOrders");
let Users = class Users {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "user_id" }),
    __metadata("design:type", Number)
], Users.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "user_full_name",
        nullable: true,
        length: 55,
    }),
    __metadata("design:type", String)
], Users.prototype, "userFullName", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "user_type",
        nullable: true,
        length: 15,
    }),
    __metadata("design:type", String)
], Users.prototype, "userType", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "user_company_name",
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], Users.prototype, "userCompanyName", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "user_email",
        nullable: true,
        unique: true,
        length: 256,
    }),
    __metadata("design:type", String)
], Users.prototype, "userEmail", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "user_phone_number",
        nullable: true,
        unique: true,
        length: 25,
    }),
    __metadata("design:type", String)
], Users.prototype, "userPhoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "user_isverified", nullable: true }),
    __metadata("design:type", Number)
], Users.prototype, "userIsverified", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "user_modified_date",
        nullable: true,
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], Users.prototype, "userModifiedDate", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => BookingOrders_1.BookingOrders, (bookingOrders) => bookingOrders.boorUser),
    __metadata("design:type", Array)
], Users.prototype, "bookingOrders", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => FacilityPriceHistory_1.FacilityPriceHistory, (facilityPriceHistory) => facilityPriceHistory.faphUser),
    __metadata("design:type", Array)
], Users.prototype, "facilityPriceHistories", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => HotelReviews_1.HotelReviews, (hotelReviews) => hotelReviews.horeUser),
    __metadata("design:type", Array)
], Users.prototype, "hotelReviews", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => OrderMenus_1.OrderMenus, (orderMenus) => orderMenus.ormeUser),
    __metadata("design:type", Array)
], Users.prototype, "orderMenus", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PaymentTransaction_1.PaymentTransaction, (paymentTransaction) => paymentTransaction.patrUser),
    __metadata("design:type", Array)
], Users.prototype, "paymentTransactions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => UserAccounts_1.UserAccounts, (userAccounts) => userAccounts.usacUser),
    __metadata("design:type", Array)
], Users.prototype, "userAccounts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => UserBonusPoints_1.UserBonusPoints, (userBonusPoints) => userBonusPoints.ubpoUser),
    __metadata("design:type", Array)
], Users.prototype, "userBonusPoints", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => UserMembers_1.UserMembers, (userMembers) => userMembers.usmeUser),
    __metadata("design:type", UserMembers_1.UserMembers)
], Users.prototype, "userMembers", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => UserPassword_1.UserPassword, (userPassword) => userPassword.uspaUser),
    __metadata("design:type", UserPassword_1.UserPassword)
], Users.prototype, "userPassword", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => UserProfiles_1.UserProfiles, (userProfiles) => userProfiles.usproUser),
    __metadata("design:type", Array)
], Users.prototype, "userProfiles", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => UserRoles_1.UserRoles, (userRoles) => userRoles.usroUser),
    __metadata("design:type", UserRoles_1.UserRoles)
], Users.prototype, "userRoles", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => WorkOrders_1.WorkOrders, (workOrders) => workOrders.woroUser),
    __metadata("design:type", Array)
], Users.prototype, "workOrders", void 0);
Users = __decorate([
    (0, typeorm_1.Index)("u_user_email", ["userEmail"], { unique: true }),
    (0, typeorm_1.Index)("pk_user_id", ["userId"], { unique: true }),
    (0, typeorm_1.Index)("u_user_phone_number", ["userPhoneNumber"], { unique: true }),
    (0, typeorm_1.Entity)("users", { schema: "users" })
], Users);
exports.Users = Users;
//# sourceMappingURL=Users.js.map