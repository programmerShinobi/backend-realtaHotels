import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRoles } from 'entities/UserRoles';
import { BadRequestException } from '@nestjs/common/exceptions/bad-request.exception';

@Injectable()
export class UserrolesService {
    constructor(
        @InjectRepository(UserRoles)
        private userRolesRepository: Repository<UserRoles>
    ) { }
    
    async findAllUserRoles(): Promise<any> {
        return await this.userRolesRepository.find({
            order: { usroUserId: -1 }
        }).then((result: any) => {
            if (!result) {
                throw new NotFoundException('Data not fuound')
            }
            return {
                messsage: 'Data displayed successfully',
                results: result
            }
        }).catch((err: any) => {
            return {
                message: err.message,
                error: err.name
            }
        });
    }

    async findAllJoinUserRoles(): Promise<any> {
        return this.userRolesRepository.find({
            order: { usroUserId: -1 },
            relations: ['usroRole', 'usroUser']
        }).then((result: any) => {
            if (!result) {
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
        });
    }

    async findOneUserRoles(id: number): Promise<any>{
        return this.userRolesRepository.findOne({
            where: { usroUserId: id },
            relations: ['usroRole', 'usroUser']
        }).then((result: any) => {
            if (!result) {
                throw new NotFoundException('Data not found');
            }
            return {
                message: 'Data displayed successfully',
                results: result
            }
        })
    }

    async createUserRoles(data: UserRoles): Promise<any> {
        return this.userRolesRepository.save({
            usroUserId: data.usroUserId,
            usroRole: data.usroRole,
        }).then((result: any) => {
            if (!result) {
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

    async updateUserRoles(id: number, data: UserRoles): Promise<any>{
        return this.userRolesRepository.update(id, {
            usroUserId: data.usroUserId,
            usroRole: data.usroRole
        }).then(async (result: any) => {
            if (!result.affected) {
                throw new BadRequestException('Data update failed');
            }
            let updateData = await this.userRolesRepository.findOne({
                where: { usroUserId: id },
                relations: ['usroRole', 'usroUser']
            });
            return {
                message: 'Data updated successfully',
                results: updateData
            }
        }).catch((err: any) => {
            return {
                message: err.message,
                error: err.name
            }
        });
    }

    async deleteUserRoles(id: number): Promise<any> {
        return await this.userRolesRepository.delete(id)
            .then((result: any) => {
                if (!result.affected) {
                    throw new BadRequestException('Data delete failed');
                }
                return {
                    message: `Data deleted with ID : ${id} successfully`
                }
            }).catch((err: any) => {
                return {
                    message: err.message,
                    error: err.name
                }
            });
    }

}
