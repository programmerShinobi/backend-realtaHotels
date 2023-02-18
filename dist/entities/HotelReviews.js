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
exports.HotelReviews = void 0;
const typeorm_1 = require("typeorm");
const Hotels_1 = require("./Hotels");
const Users_1 = require("./Users");
let HotelReviews = class HotelReviews {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "hore_id" }),
    __metadata("design:type", Number)
], HotelReviews.prototype, "horeId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "hore_user_review",
        nullable: true,
        length: 125,
    }),
    __metadata("design:type", String)
], HotelReviews.prototype, "horeUserReview", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "hore_rating", nullable: true }),
    __metadata("design:type", String)
], HotelReviews.prototype, "horeRating", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "hore_created_on",
        nullable: true,
    }),
    __metadata("design:type", Date)
], HotelReviews.prototype, "horeCreatedOn", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Hotels_1.Hotels, (hotels) => hotels.hotelReviews),
    (0, typeorm_1.JoinColumn)([{ name: "hore_hotel_id", referencedColumnName: "hotelId" }]),
    __metadata("design:type", Hotels_1.Hotels)
], HotelReviews.prototype, "horeHotel", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Users_1.Users, (users) => users.hotelReviews),
    (0, typeorm_1.JoinColumn)([{ name: "hore_user_id", referencedColumnName: "userId" }]),
    __metadata("design:type", Users_1.Users)
], HotelReviews.prototype, "horeUser", void 0);
HotelReviews = __decorate([
    (0, typeorm_1.Index)("hore_id_pk", ["horeId"], { unique: true }),
    (0, typeorm_1.Entity)("hotel_reviews", { schema: "hotel" })
], HotelReviews);
exports.HotelReviews = HotelReviews;
//# sourceMappingURL=HotelReviews.js.map