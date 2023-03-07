import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PriceItems } from 'entities/PriceItems';
@Injectable()
export class PriceItemsService {
    constructor(
        @InjectRepository(PriceItems)
        private PriceItemsRepository: Repository<PriceItems>
    ) { }
    async getAll(): Promise<any> {
        const ShowData = await this.PriceItemsRepository.find()
        return ShowData
    }
    async getById(pritId: number): Promise<any> {
        const ShowDataId = await this.PriceItemsRepository.findOne({
            where: {
                pritId: pritId
            }
        })
        return ShowDataId
    }
    async create(data: PriceItems): Promise<any> {
        
        let currentDate = new Date();
        const addData = await this.PriceItemsRepository.save({
            pritName: data.pritName,
            pritPrice: data.pritPrice,
            pritDescription: data.pritDescription,
            pritType: data.pritType,
            pritModifiedDate: currentDate
        })
        console.log(addData)
        if (addData) {
            return { message: 'Data berhasil ditambahkan', addData: addData }
        }
        else {
            return { message: 'Data gagal ditambahkan' }
        }
    }
    async edit(data: PriceItems, _pritId: any) {
        const editData = await this.PriceItemsRepository.update({
            pritId: _pritId
        },
            {
                pritName: data.pritName,
                pritPrice: data.pritPrice,
                pritDescription: data.pritDescription,
                pritType: data.pritType,
                pritModifiedDate: data.pritModifiedDate
            }
        )
        console.log(editData)
        if (editData.affected) {
            return { message: 'Data berhasil di edit' }
        }
        else {
            return { message: 'Data gagal di edit' }
        }
    }

    async delete(pritId: number) {
        const deleteData = await this.PriceItemsRepository.delete({
            pritId: pritId
        })
        return deleteData
    }
}
