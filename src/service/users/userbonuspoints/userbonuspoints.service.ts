import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserBonusPoints } from 'entities/UserBonusPoints';
import { Repository } from 'typeorm';

@Injectable()
export class UserbonuspointsService {
    constructor(
        @InjectRepository(UserBonusPoints)
        private userBonusRepository: Repository<UserBonusPoints>
    ) { }
    
    async findAllUserBonusPoints(): Promise<any> {
        return await this.userBonusRepository.find({
            order: { ubpoId: -1 }
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

    async findAllJoinUserBonusPoints(): Promise<any>{
        return await this.userBonusRepository.find({
            order: { ubpoId: -1 },
            relations: { ubpoUser: true }
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

    async findOneUserBonusPoints(id: number): Promise<any> {
        return await this.userBonusRepository.findOne({
            where: { ubpoId: id },
            relations: {ubpoUser:true}
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

    async createUserBonusPoints(data: UserBonusPoints) {
        const now = new Date();
        return await this.userBonusRepository.save({
            ubpoUser:data.ubpoUser,
            ubpoTotalPoints: data.ubpoTotalPoints,
            ubpoBonusType: data.ubpoBonusType,
            ubpoCreatedOn: now
        }).then((result: any) => {
            if (!result) {
                throw new NotFoundException('Data not found');
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

    async updateUserBonusPoints(id: number, data: UserBonusPoints) {
        return await this.userBonusRepository.update(id,{
            ubpoId: data.ubpoId,
            ubpoUser: data.ubpoUser,
            ubpoTotalPoints: data.ubpoTotalPoints,
            ubpoBonusType: data.ubpoBonusType,
        }).then((result: any) => {
            if (!result) {
                throw new BadRequestException('Data insert failed');
            }
            return this.userBonusRepository.find({
                relations:  ['ubpoUser'],
                where: { ubpoId: id }
            }).then((resultUpdated: any) => {
                if (!resultUpdated) {
                    throw new NotFoundException('Data not found updated')
                }
                return {
                message: 'Data updated successfully',
                results: resultUpdated
            }
            }).catch((err: any) => {
                return {
                    message: err.message,
                    error: err.name
                }
            });
        }).catch((err: any) => {
            return {
                message: err.message,
                error: err.name
            }
        });
    }

    async deleteUserBonusPoints(id: any): Promise<any>{
        return await this.userBonusRepository.delete(id)
            .then((result: any) => {
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
            });
    }
}
