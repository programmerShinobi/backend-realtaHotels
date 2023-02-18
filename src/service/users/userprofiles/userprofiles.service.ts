import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserProfiles } from 'entities/UserProfiles';
import { Repository } from 'typeorm';

@Injectable()
export class UserprofilesService {
    constructor(
        @InjectRepository(UserProfiles)
        private userProfilesRepository: Repository<UserProfiles>
    ) { }
    
    async findAllUserProfiles(): Promise<any>{
        return await this.userProfilesRepository.find({
            order: { usproId: -1 }
        }).then((result: any) => {
            if (!result) {
                return new NotFoundException('Data not found');
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

    async updateUserPhotoProfiles(id:number, data:UserProfiles): Promise<any>{
        return await this.userProfilesRepository.update(id, {
            usproPhoto : data.usproPhoto
        }).then(async (result: any) => {
            if (!result.affected) {
                throw new BadRequestException('Data update failed');
            }

            let dataUpdated = await this.userProfilesRepository.findOneBy({ usproId: id });
            return {
                message: 'Data updated successfully',
                results: dataUpdated
            }
        }).catch((err: any) => {
            return {
                message: err.message,
                error: err.name
            };
        });
    }
}
