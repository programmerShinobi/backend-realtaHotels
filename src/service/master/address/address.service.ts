import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from 'entities/Address';
import { json } from 'stream/consumers';
@Injectable()
export class AddressService {
    query(arg0: string) {
        throw new Error('Method not implemented.');
    }
    constructor(
        @InjectRepository(Address)
        private AddressRepository: Repository<Address>
    ) { }

    async getAll(): Promise<any> {
        const ShowData = await this.AddressRepository.query('select * from master.address order by addr_id')
        return ShowData
    }
    async getById(addrId: number): Promise<any> {
        const ShowDataId = await this.AddressRepository.findOne({
            where: {
                addrId: addrId
                
            }
        })
        return ShowDataId
    }
    async create(data: Address): Promise<any> {
        const addData = await this.AddressRepository.save(
            {
                // addrId :data.addrId,
                addrLine1: data.addrLine1,
                addrLine2: data.addrLine2,
                addrPostalCode: data.addrPostalCode,
                addrProv: data.addrProv,
                addrSpatialLocation: data.addrSpatialLocation,
            }
        )
        console.log(addData)
        if (addData) {
            return { message: 'Data berhasil ditambahkan', addData: addData }
        }
        else {
            return { message: 'Data gagal ditambahkan' }
        }
    }
    async edit(data: Address, addrId: any) {
        const editData = await this.AddressRepository.update({
            addrId: addrId
        },
            {
                addrLine1: data.addrLine1,
                addrLine2: data.addrLine2,
                addrPostalCode: data.addrPostalCode,
                addrProv: data.addrProv,
                addrSpatialLocation: data.addrSpatialLocation
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

    async delete(addrId: number) {
        const deleteData = await this.AddressRepository.delete({
            addrId: addrId
        })
        return deleteData
    }
}
