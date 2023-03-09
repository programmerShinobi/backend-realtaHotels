import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { HotelReviews } from 'entities/HotelReviews';

@Injectable()
export class HotelReviewService {
  constructor(
    @InjectRepository(HotelReviews)
    private repositoryHotelReview: Repository<HotelReviews>,
  ) {}

  // find all htels
  async findAllHotelReview(): Promise<any> {
    return await this.repositoryHotelReview.find();
  }

  // proceddure hotel review
  async findProsedurHore() {
    return await this.repositoryHotelReview.query(
      'select * from hotel.user_review',
    );
  }
  // insert in table hotel
  //   type bit dak bisa di isi selain angka 0 1
  async createHotelReview(data: HotelReviews): Promise<HotelReviews> {
    enum hore_Rating {
      bad = 1,
      less = 2,
      cool = 3,
      good = 4,
      best = 5,
    }
    let bad1 = hore_Rating.bad;
    let less1 = hore_Rating.less;
    let cool1 = hore_Rating.cool;
    let good1 = hore_Rating.good;
    let best1 = hore_Rating.best;

    if (
      data.horeRating == bad1 ||
      data.horeRating == less1 ||
      data.horeRating == cool1 ||
      data.horeRating == good1 ||
      data.horeRating == best1
    ) {
      return await this.repositoryHotelReview.save(
        this.repositoryHotelReview.create(data),
      );
    } else {
      console.log('error');
    }
  }

  // update
  async updateHotelReview(id: string, data: HotelReviews): Promise<any> {
    return this.repositoryHotelReview
      .createQueryBuilder()
      .update()
      .set({
        horeUserReview: data.horeUserReview,
      })
      .where('horeId = :id', { id })
      .execute();
  }

  //view by userid
  async findByUser(id: any): Promise<any> {
    return await this.repositoryHotelReview.findOneBy({ horeId: id });
  }
}
