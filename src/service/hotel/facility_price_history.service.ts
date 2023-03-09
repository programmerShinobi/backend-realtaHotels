import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FacilityPriceHistory } from 'entities/FacilityPriceHistory';

@Injectable()
export class FacilityPriceHistoryService {
  constructor(
    @InjectRepository(FacilityPriceHistory)
    private fph: Repository<FacilityPriceHistory>,
  ) {}

  // find all htels
  async findAllFacilitiPriceHistory(): Promise<any> {
    return await this.fph.query('select * from hotel.facility_price_history');
  }
  // insert in table hotel
  async createFacilitiPriceHisty(
    data: FacilityPriceHistory,
  ): Promise<FacilityPriceHistory> {
    return await this.fph.save(this.fph.create(data));
  }

  // update
  async updateFaph(id: string, data: FacilityPriceHistory): Promise<any> {
    return this.fph
      .createQueryBuilder()
      .update()
      .set({
        faphLowPrice: data.faphLowPrice,
      })
      .where('faphId = :id', { id })
      .execute();
  }

  //view by userid
  async findByUser(faphId: any): Promise<any> {
    return await this.fph.findOneBy({ faphId: faphId });
  }
}
