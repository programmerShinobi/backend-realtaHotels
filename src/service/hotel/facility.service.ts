import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Facilities } from 'entities/Facilities';
import { FacilityPriceHistory } from 'entities/FacilityPriceHistory';
interface dataFaci {
  faci_name: any;
  faci_description: any;
  faci_max_number: any;
  faci_measure_unit: any;
  faci_room_number: any;
  faci_startdate: any;
  faci_endate: any;
  faci_low_price: any;
  faci_hight_price: any;
  faci_rate_price: any;
  faci_discount: any;
  faci_tax_rate: any;
  faci_modified_date: any;
  faci_cagro_id: any;
  faci_hotel_id: any;
}

@Injectable()
export class FacilityService {
  constructor(
    @InjectRepository(Facilities)
    private repositoryFac: Repository<Facilities>,
    @InjectRepository(FacilityPriceHistory)
    private repositoryFaph: Repository<FacilityPriceHistory>,
  ) {}

  // find all htels
  async findAllFacility(): Promise<any> {
    return await this.repositoryFac.query('select * from hotel.facilities');
  }
  // prosedur get all faci hotel with photo
  async findallFaciHotel() {
    return await this.repositoryFac.query('select * from hotel.faci_allhotel');
  }

  async insertFacilityAndPriceHistory(data: Facilities) {
    await this.repositoryFac.query(
      `CALL hotel.insert_facility_and_price_history(
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15
      )`,
      [
        data.faciName,
        data.faciDescription,
        data.faciMaxNumber,
        data.faciMeasureUnit,
        data.faciRoomNumber,
        data.faciStartdate,
        data.faciEndate,
        data.faciLowPrice,
        data.faciHightPrice,
        data.faciRatePrice,
        data.faciDiscount,
        data.faciTaxRate,
        data.faciModifiedDate,
        data.faciHotel,
        data.faciCagro,
      ],
    );
    const res = await this.repositoryFac.query(
      'select * from hotel.facilities',
    );
    return { result: res };
  }

  // update
  async updateFacility(id: any, data: dataFaci): Promise<any> {
    await this.repositoryFac
      .createQueryBuilder()
      .update()
      .set({
        faciName: data.faci_name,
        faciDescription: data.faci_description,
        faciMaxNumber: data.faci_max_number,
        faciMeasureUnit: data.faci_measure_unit,
        faciRoomNumber: data.faci_room_number,
        faciStartdate: data.faci_startdate,
        faciEndate: data.faci_endate,
        faciHightPrice: data.faci_hight_price,
        faciLowPrice: data.faci_low_price,
        faciRatePrice: data.faci_rate_price,
        faciDiscount: data.faci_discount,
        faciTaxRate: data.faci_tax_rate,
        faciModifiedDate: data.faci_modified_date,
        faciCagro: data.faci_cagro_id,
        faciHotel: data.faci_hotel_id,
      })
      .where('faciId = :id', { id })
      .execute();
    await this.repositoryFaph
      .createQueryBuilder()
      .update()
      .set({
        faphStartdate: data.faci_startdate,
        faphEnddate: data.faci_endate,
        faphHighPrice: data.faci_hight_price,
        faphLowPrice: data.faci_low_price,
        faphDiscount: data.faci_discount,
        faphTaxRate: data.faci_tax_rate,
        faphModifiedDate: data.faci_modified_date,
      })
      .where('faphFaci = :id', { id })
      .execute();
    return 'data berhasil di rubah';
  }

  //view by userid
  async findByNoRoom(faciRoomNumber: any): Promise<any> {
    return await this.repositoryFac.findOneBy({
      faciRoomNumber: faciRoomNumber,
    });
  }

  // nilai max dari faci room
  async findMaxRoomId() {
    return await this.repositoryFac.query(
      'select faci_cagro_id, max(faci_room_number) as max_roomid from hotel.facilities group by faci_cagro_id',
    );
  }

  async deleteFaci(id: any): Promise<any> {
    await this.repositoryFac.delete({ faciId: id });
    await this.repositoryFaph.delete({ faphFaci: id });
    return 'berhasil hapus data';
  }
}
