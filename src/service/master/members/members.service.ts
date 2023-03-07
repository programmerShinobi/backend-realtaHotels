import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Members } from 'entities/Members';

@Injectable()
export class MembersService {
    constructor(
        @InjectRepository(Members)
        private MembersRepository: Repository<Members>
    ) { }
    async getAll(): Promise<any> {
        const ShowData = await this.MembersRepository.find()
        return ShowData
    }
    async getById(membName: any): Promise<any> {
        const ShowDataId = await this.MembersRepository.findOne({
            where: {
                membName: membName
            }
        })
        return ShowDataId
    }
    async create(data: Members): Promise<any> {
        const addData = await this.MembersRepository.save({
            membName: data.membName,
            membDescription: data.membDescription
        })
        console.log(addData)
        if (addData) {
            return { message: 'Data berhasil ditambahkan', addData: addData }
        }
        else {
            return { message: 'Data gagal ditambahkan' }
        }
    }
    async edit(data: Members, _membName: any) {
        const editData = await this.MembersRepository.update({
            membName: _membName
        },
            {
                membName: data.membName,
                membDescription: data.membDescription
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

    async delete(membName: any) {
        const deleteData = await this.MembersRepository.delete({
            membName: membName
        })
        return deleteData
    }
}
