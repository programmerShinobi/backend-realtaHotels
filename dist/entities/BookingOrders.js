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
exports.BookingOrders = void 0;
const typeorm_1 = require("typeorm");
const BookingOrderDetail_1 = require("./BookingOrderDetail");
const Hotels_1 = require("./Hotels");
const Users_1 = require("./Users");
let BookingOrders = class BookingOrders {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "boor_id" }),
    __metadata("design:type", Number)
], BookingOrders.prototype, "boorId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "boor_order_number",
        nullable: true,
        unique: true,
        length: 20,
    }),
    __metadata("design:type", String)
], BookingOrders.prototype, "boorOrderNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "boor_order_date",
        nullable: true,
    }),
    __metadata("design:type", Date)
], BookingOrders.prototype, "boorOrderDate", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "boor_arrival_date",
        nullable: true,
    }),
    __metadata("design:type", Date)
], BookingOrders.prototype, "boorArrivalDate", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "boor_total_room", nullable: true }),
    __metadata("design:type", Number)
], BookingOrders.prototype, "boorTotalRoom", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "boor_total_guest", nullable: true }),
    __metadata("design:type", Number)
], BookingOrders.prototype, "boorTotalGuest", void 0);
__decorate([
    (0, typeorm_1.Column)("money", { name: "boor_discount", nullable: true }),
    __metadata("design:type", String)
], BookingOrders.prototype, "boorDiscount", void 0);
__decorate([
    (0, typeorm_1.Column)("money", { name: "boor_total_tax", nullable: true }),
    __metadata("design:type", String)
], BookingOrders.prototype, "boorTotalTax", void 0);
__decorate([
    (0, typeorm_1.Column)("money", { name: "boor_total_amount", nullable: true }),
    __metadata("design:type", String)
], BookingOrders.prototype, "boorTotalAmount", void 0);
__decorate([
    (0, typeorm_1.Column)("money", { name: "boor_down_payment", nullable: true }),
    __metadata("design:type", String)
], BookingOrders.prototype, "boorDownPayment", void 0);
__decorate([
    (0, typeorm_1.Column)("character", { name: "boor_pay_type", nullable: true, length: 2 }),
    __metadata("design:type", String)
], BookingOrders.prototype, "boorPayType", void 0);
__decorate([
    (0, typeorm_1.Column)("character", { name: "boor_is_paid", nullable: true, length: 2 }),
    __metadata("design:type", String)
], BookingOrders.prototype, "boorIsPaid", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "boor_type",
        nullable: true,
        length: 15,
    }),
    __metadata("design:type", String)
], BookingOrders.prototype, "boorType", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "boor_cardnumber",
        nullable: true,
        length: 25,
    }),
    __metadata("design:type", String)
], BookingOrders.prototype, "boorCardnumber", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "boor_member_type",
        nullable: true,
        length: 15,
    }),
    __metadata("design:type", String)
], BookingOrders.prototype, "boorMemberType", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "boor_status",
        nullable: true,
        length: 15,
    }),
    __metadata("design:type", String)
], BookingOrders.prototype, "boorStatus", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => BookingOrderDetail_1.BookingOrderDetail, (bookingOrderDetail) => bookingOrderDetail.borderBoor),
    __metadata("design:type", Array)
], BookingOrders.prototype, "bookingOrderDetails", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Hotels_1.Hotels, (hotels) => hotels.bookingOrders, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "boor_hotel_id", referencedColumnName: "hotelId" }]),
    __metadata("design:type", Hotels_1.Hotels)
], BookingOrders.prototype, "boorHotel", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Users_1.Users, (users) => users.bookingOrders, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "boor_user_id", referencedColumnName: "userId" }]),
    __metadata("design:type", Users_1.Users)
], BookingOrders.prototype, "boorUser", void 0);
BookingOrders = __decorate([
    (0, typeorm_1.Index)("pk_boor_id", ["boorId"], { unique: true }),
    (0, typeorm_1.Index)("booking_orders_boor_order_number_key", ["boorOrderNumber"], {
        unique: true,
    }),
    (0, typeorm_1.Entity)("booking_orders", { schema: "booking" })
], BookingOrders);
exports.BookingOrders = BookingOrders;
//# sourceMappingURL=BookingOrders.js.map