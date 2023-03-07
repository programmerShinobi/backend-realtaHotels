import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PolicyCategoryGroup } from 'entities/PolicyCategoryGroup';
@Injectable()
export class PolicyCategoryGroupService {
    constructor(
        @InjectRepository(PolicyCategoryGroup)
        private PolicyCategoryGroupRepository: Repository<PolicyCategoryGroup>
    ) { }
    async getAll(): Promise<any> {
        const ShowData = await this.PolicyCategoryGroupRepository.find()
        return ShowData
    }
    async getById(pocaPoliId: number): Promise<any> {
        const ShowDataId = await this.PolicyCategoryGroupRepository.findOne({
            where: {
                pocaPoliId: pocaPoliId
            }
        })
        return ShowDataId
    }
    async create(data: PolicyCategoryGroup): Promise<any> {
        const addData = await this.PolicyCategoryGroupRepository.save(data)
        console.log(addData)
        if (addData) {
            return { message: 'Data berhasil ditambahkan', addData: addData }
        }
        else {
            return { message: 'Data gagal ditambahkan' }
        }
    }
    async edit(data: PolicyCategoryGroup, _pocaPoliId: number) {
        const editData = await this.PolicyCategoryGroupRepository.update(
            {
                pocaPoliId: _pocaPoliId,
            },
            {
                // pocaPoliId: data.pocaPoliId,
                pocaCagro: data.pocaCagro
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

    async delete(pocaPoliId: number) {
        const deleteData = await this.PolicyCategoryGroupRepository.delete({
            pocaPoliId: pocaPoliId
        })
        return deleteData
    }
}
