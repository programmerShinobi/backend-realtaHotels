import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Policy } from 'entities/Policy';
@Injectable()
export class PolicyService {
    constructor(
        @InjectRepository(Policy)
        private PolicyRepository: Repository<Policy>
    ) { }
    async getAll(): Promise<any> {
        const ShowData = await this.PolicyRepository.find(
            {
                order: {
                    poliId: "ASC"
                  }
            }
        )
        return ShowData
    }
    async getById(poliId: number): Promise<any> {
        const ShowDataId = await this.PolicyRepository.findOne({
            where: {
                poliId: poliId
            }
        })
        return ShowDataId
    }
    async create(data: Policy): Promise<any> {
        const addData = await this.PolicyRepository.save({
            poliName: data.poliName,
            poliDescription: data.poliDescription
        })
        console.log(addData)
        if (addData) {
            return { message: 'Data berhasil ditambahkan', addData: addData }
        }
        else {
            return { message: 'Data gagal ditambahkan' }
        }
    }
    async edit(data: Policy, _poliId: number) {
        const editData = await this.PolicyRepository.update({
            poliId: _poliId
        },
            {
                poliName: data.poliName,
                poliDescription: data.poliDescription
            }
        )
        console.log(editData)
        if (editData.affected) {
            return { message: 'Data berhasil di edit',editData }
        }
        else {
            return { message: 'Data gagal di edit' }
        }
    }

    async delete(poliId: number) {
        const deleteData = await this.PolicyRepository.delete({
            poliId: poliId
        })

        if(deleteData){
            return {message:"Data berhasil di hapus",deleteData}
        }
        return {message:"Data gagal di hapus",deleteData}
    }
}
