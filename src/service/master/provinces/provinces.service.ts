import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Provinces } from 'entities/Provinces';

@Injectable()
export class ProvincesService {
    constructor(
        @InjectRepository(Provinces)
        private ProvincesRepository: Repository<Provinces>
    ) { }
    async getAll(): Promise<any> {
        const ShowData = await this.ProvincesRepository.query('select * from master.provinces')
        return ShowData
    }
    async getById(provId: number): Promise<any> {
        const ShowDataId = await this.ProvincesRepository.findOne({
            where: {
                provId: provId
            }
        })
        return ShowDataId
    }
    async create(data: Provinces): Promise<any> {
        const addData = await this.ProvincesRepository.save({
            provName: data.provName,
            provCountry: data.provCountry,
            provId: data.provId
        })
        console.log(addData)
        if (addData) {
            return { message: 'Data berhasil ditambahkan', addData: addData }
        }
        else {
            return { message: 'Data gagal ditambahkan' }
        }
    }
    async edit(data: Provinces, id: any) {
        const editData = await this.ProvincesRepository.update({
            provId: id
        },
            {
                provCountry: data.provCountry,
                provName: data.provName,

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

    async delete(provId: any) {
        const deleteData = await this.ProvincesRepository.delete({
            provId: provId
        })
        return deleteData + 'berhasil di hapus'
    }
}
