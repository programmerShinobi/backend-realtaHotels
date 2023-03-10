import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceTask } from 'entities/ServiceTask';
@Injectable()
export class ServiceTaskService {
    constructor(
        @InjectRepository(ServiceTask)
        private ServiceTaskRepository: Repository<ServiceTask>
    ) { }
    async getAll(): Promise<any> {
        const ShowData = await this.ServiceTaskRepository.find(
            {
                order: {
                    setaId: "ASC"
                  }
            }
        )
        return ShowData
    }
    async getById(setaId: number): Promise<any> {
        const ShowDataId = await this.ServiceTaskRepository.findOne({
            where: {
                setaId: setaId
            }
        })
        return ShowDataId
    }
    async create(data: ServiceTask): Promise<any> {
        const addData = await this.ServiceTaskRepository.save({
            setaName: data.setaName,
            setaSeq: data.setaSeq
        })
        console.log(addData)
        if (addData) {
            return { message: 'Data berhasil ditambahkan', addData: addData }
        }
        else {
            return { message: 'Data gagal ditambahkan' }
        }
    }
    async edit(data: ServiceTask, setaId: any) {
        const editData = await this.ServiceTaskRepository.update(
            {
                setaId: setaId
            },
            {
                setaName: data.setaName,
                setaSeq: data.setaSeq
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

    async delete(setaId: number) {
        const deleteData = await this.ServiceTaskRepository.delete({
            setaId: setaId
        })
        return deleteData
    }
}
