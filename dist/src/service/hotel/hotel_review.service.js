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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelReviewService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const HotelReviews_1 = require("../../../entities/HotelReviews");
let HotelReviewService = class HotelReviewService {
    constructor(repositoryHotelReview) {
        this.repositoryHotelReview = repositoryHotelReview;
    }
    async findAllHotelReview() {
        return await this.repositoryHotelReview.find();
    }
    async findProsedurHore() {
        return await this.repositoryHotelReview.query('select * from hotel.user_review');
    }
    async createHotelReview(data) {
        let hore_Rating;
        (function (hore_Rating) {
            hore_Rating[hore_Rating["bad"] = 1] = "bad";
            hore_Rating[hore_Rating["less"] = 2] = "less";
            hore_Rating[hore_Rating["cool"] = 3] = "cool";
            hore_Rating[hore_Rating["good"] = 4] = "good";
            hore_Rating[hore_Rating["best"] = 5] = "best";
        })(hore_Rating || (hore_Rating = {}));
        let bad1 = hore_Rating.bad;
        let less1 = hore_Rating.less;
        let cool1 = hore_Rating.cool;
        let good1 = hore_Rating.good;
        let best1 = hore_Rating.best;
        if (data.horeRating == bad1 ||
            data.horeRating == less1 ||
            data.horeRating == cool1 ||
            data.horeRating == good1 ||
            data.horeRating == best1) {
            return await this.repositoryHotelReview.save(this.repositoryHotelReview.create(data));
        }
        else {
            console.log('error');
        }
    }
    async updateHotelReview(id, data) {
        return this.repositoryHotelReview
            .createQueryBuilder()
            .update()
            .set({
            horeUserReview: data.horeUserReview,
        })
            .where('horeId = :id', { id })
            .execute();
    }
    async findByUser(id) {
        return await this.repositoryHotelReview.findOneBy({ horeId: id });
    }
};
HotelReviewService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(HotelReviews_1.HotelReviews)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], HotelReviewService);
exports.HotelReviewService = HotelReviewService;
//# sourceMappingURL=hotel_review.service.js.map