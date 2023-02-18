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
exports.Hotels = void 0;
const typeorm_1 = require("typeorm");
const BookingOrders_1 = require("./BookingOrders");
const Facilities_1 = require("./Facilities");
const HotelReviews_1 = require("./HotelReviews");
const Address_1 = require("./Address");
let Hotels = class Hotels {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "hotel_id" }),
    __metadata("design:type", Number)
], Hotels.prototype, "hotelId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "hotel_name",
        nullable: true,
        length: 85,
    }),
    __metadata("design:type", String)
], Hotels.prototype, "hotelName", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "hotel_description",
        nullable: true,
        length: 500,
    }),
    __metadata("design:type", String)
], Hotels.prototype, "hotelDescription", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "hotel_rating_star", nullable: true }),
    __metadata("design:type", Number)
], Hotels.prototype, "hotelRatingStar", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "hotel_phonenumber",
        nullable: true,
        length: 25,
    }),
    __metadata("design:type", String)
], Hotels.prototype, "hotelPhonenumber", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "hotel_modified_date",
        nullable: true,
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], Hotels.prototype, "hotelModifiedDate", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => BookingOrders_1.BookingOrders, (bookingOrders) => bookingOrders.boorHotel),
    __metadata("design:type", Array)
], Hotels.prototype, "bookingOrders", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Facilities_1.Facilities, (facilities) => facilities.faciHotel),
    __metadata("design:type", Array)
], Hotels.prototype, "facilities", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => HotelReviews_1.HotelReviews, (hotelReviews) => hotelReviews.horeHotel),
    __metadata("design:type", Array)
], Hotels.prototype, "hotelReviews", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Address_1.Address, (address) => address.hotels),
    (0, typeorm_1.JoinColumn)([{ name: "hotel_addr_id", referencedColumnName: "addrId" }]),
    __metadata("design:type", Address_1.Address)
], Hotels.prototype, "hotelAddr", void 0);
Hotels = __decorate([
    (0, typeorm_1.Index)("hotel_id_pk", ["hotelId"], { unique: true }),
    (0, typeorm_1.Entity)("hotels", { schema: "hotel" })
], Hotels);
exports.Hotels = Hotels;
//# sourceMappingURL=Hotels.js.map