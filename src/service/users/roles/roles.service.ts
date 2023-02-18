import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Roles } from 'entities/Roles';

@Injectable()
export class RolesService {
    constructor(
        @InjectRepository(Roles)
        private rolesRepository: Repository<Roles>
    ) { }

    async findAllRoles(): Promise<any>{
        return await this.rolesRepository.find({
            order: { roleId: -1 }   // -1 => DESC || 1 => ASC   
        }).then((result: any) => {
            if (!result || result == '') {
                throw new NotFoundException('Data not found');
            }
            return {
                message: "Data displayed successfull",
                results: result
            }
        }).catch((err: any) => {
            return {
                message: err.message,
                error: err.name
            }
        });
    }

    async findAllJoinRoles(): Promise<any>{
        return await this.rolesRepository.find({
            order: { roleId: -1 },
            relations: {userRoles:true}
        }).then((result: any) => {
            if (!result || result == '') {
                throw new NotFoundException('Data not found');
            }
            return {
                message: 'Data displayed successfully',
                results: result
            }
        }).catch((err: any) => {
            return {
                message: err.message,
                error: err.name
            }
        })
    }

    async findOneRoles(id: number): Promise<any> {
        return await this.rolesRepository.findOne({
            where: {roleId : id}
        }).then((result: any) => {
            if (!result || result == '') {
                throw new NotFoundException('Data not found');
            }
            return {
                message: 'Data displayed successfully',
                results: result
            }
        }).catch((err: any) => {
            return {
                message: err.message,
                error: err.name
            }
        })
    }

    async createRoles(data: Roles): Promise<any>{
        return await this.rolesRepository.save({
            roleName: data.roleName
        }).then((result: any) => {
            if (!result || result == '') {
                throw new BadRequestException('Data insert failed');
            }
            return {
                message: 'Data inserted successfully',
                results: result
            }
        }).catch((err: any) => {
            return {
                message: err.message,
                error: err.name
            }
        });
    }

    async updateRoles(id:number,data: Roles): Promise<any>{
        return await this.rolesRepository.update(id, {
            roleName: data.roleName
        }).then(async(result:any) => {
            if (!result.affected) {
                throw new BadRequestException('Data update failed');
            }

            let dataUpdated = await this.rolesRepository.findOneBy({roleId:id})
            return {
                message: 'Data updated successfully',
                results: dataUpdated
            }
        }).catch((err) => {
            return {
                message: err.message,
                error: err.name
            }
        });
    }

    async deleteRoles(id: number): Promise<any>{
        return await this.rolesRepository.delete(id)
        .then((result:any) => {
            if (!result.affected) {
                throw new NotFoundException('Data not found');
            }
            return {
                message: `Data deleted with ID : ${id} successfully`
            }
        }).catch((err: any) => {
            return {
                message: err.message,
                error: err.name
            }
        })
    }   
}
