import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SpecialOffers } from 'entities/SpecialOffers';


@Injectable()
export class SpecialOffersService {  
    constructor(
        @InjectRepository(SpecialOffers)
        private specialOffersRepository: Repository<SpecialOffers>,
      ) {}
    

async findAllSpecialOffers(): Promise<any> {
    return await this.specialOffersRepository.find();
}

async findGuestSpecialOffers(): Promise<any> {
    const today = new Date();
    const specialOffers = await this.specialOffersRepository
      .createQueryBuilder('so')
      .leftJoin(
        '(SELECT soco.soco_spof_id, COUNT(soco.soco_spof_id) AS socoCount FROM booking.special_offer_coupons soco GROUP BY soco.soco_spof_id)',
        'soco',
        'so.spofId = soco.soco_spof_id',
      )
      .where('(so.spofMaxQty > soco.socoCount OR soco.socoCount IS NULL)')
      .andWhere('DATE(so.spofEndDate) >= DATE(:today)', { today })
      .andWhere('DATE(so.spofStartDate) <= DATE(:today)', { today })
      .getMany();
    return specialOffers;
  }

async findOneSpecialOffers(spofId: number): Promise<any> {
    return await this.specialOffersRepository.findOne({
        where: {
            spofId: spofId,
        },
    })
}
async createSpecialOffers(data: SpecialOffers): Promise<any> {
    return await this.specialOffersRepository.save(data)
    .then(() => {
        return 'Data berhasil Di Buat';
      }).catch(error => {
        return error;
      });

}

async updateSpecialOffers(spof_id: number, data:SpecialOffers):Promise<any>{
    return await this.specialOffersRepository.update(
        {spofId :spof_id},data).then(() => {
            return 'Data berhasil Di Update';
          }).catch(error => {
            return error;
          });

    
}

async deleteSpecialOffers(spofId: number): Promise<any> {
    return await this.specialOffersRepository.delete({
        spofId: spofId,
    }).then(() => {
        return 'Berhasil dihapus';
      }).catch(error => {
        return error;
      });
}

}
