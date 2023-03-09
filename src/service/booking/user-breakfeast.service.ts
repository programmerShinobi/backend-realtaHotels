import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserBreakfeast } from 'entities/UserBreakfeast';

@Injectable()
export class UserBreakfeastService {
    constructor ( @InjectRepository(UserBreakfeast)
    private userbreakfeastRepository: Repository<UserBreakfeast>
    ){}

    async findAllUserBreakfeast ():Promise<any>{
        return await this.userbreakfeastRepository.find()
    }

    async findOneUserBreakfeast(usbr:Date):Promise<any>{
        return await this.userbreakfeastRepository.findOne({
            where:{
                usbrModifiedDate:usbr
            }
        })
    }
    async createUserBreakfeast(data: UserBreakfeast):Promise<any>{
        return await this.userbreakfeastRepository.save(data)
    }

    async updateUserBreakfeast(usbr:Date, data: UserBreakfeast):Promise<any>{
        return await this.userbreakfeastRepository.update({usbrModifiedDate:usbr},data)
        .then(result => {
            return 'Data berhasil Di Update';
          }).catch(error => {
            return error;
          });
    }

    async deleteUserBreakfeast(usbr:Date):Promise<any>{
        return await this.userbreakfeastRepository.delete({
            usbrModifiedDate: usbr
        })
    }
}
