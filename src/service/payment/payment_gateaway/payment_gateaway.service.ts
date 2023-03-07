import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentGateaway } from 'entities/PaymentGateaway';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentGateawayService {
  constructor(
    @InjectRepository(PaymentGateaway)
    private PaymentGateawayRepository: Repository<PaymentGateaway>,
  ) {}

  async find(id?: number) {
    if (id) {
      return await this.PaymentGateawayRepository.findOneByOrFail({
        pagaEntityId: id,
      })
        .then((result) => {
          return result;
        })
        .catch((err) => {
          return err;
        });
    } else {
      return await this.PaymentGateawayRepository.find()
        .then((result) => {
          return result;
        })
        .catch((err) => {
          return err;
        });
    }
  }
}
