import { Injectable} from '@nestjs/common';
import { Regions } from 'entities/Regions';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class RegionService {
    query() {
        throw new Error('Method not implemented.');
    }
    constructor(
        @InjectRepository(Regions)
        private regionRepository: Repository<Regions>,
    ) { }

    //get semua data region
    async getAll(): Promise<any> {
        const ShowData = await this.regionRepository.find({
            order: {
                regionCode: "ASC"
              }
        })
        // console.log(ShowData);
        return ShowData 
    }

    //get data region by ID
    async getById(regionCode: any): Promise<any> {
        const ShowDataId = await this.regionRepository.findOne({ 
            where:{
                regionCode: regionCode
            } 
        })
        // console.log(ShowDataId)
        return ShowDataId
    }

    //create data region
    async create(data: Regions): Promise<any> {
        const addData = await this.regionRepository.save(
            {
                regionName: data.regionName,
                // regionCode: data.regionCode
            }
        )
        console.log(addData)
        if (addData) {
            return { message: 'Data berhasil ditambahkan', addData: addData };
        } else {
            return { message: 'Data gagal ditambahkan' };
        }
    }

    // edit data region
    async edit(data: Regions, regionCode: any){
        const editData = await this.regionRepository.update(
            {
                regionCode: regionCode,
            },
            {
                regionName : data.regionName
            }
        )
        console.log(editData)
        if (editData.affected) {
            return { message: 'Data berhasil di edit' };
        } else {
            return { message: 'Data gagal di edit' };
        }
        
    }

    async delete(regionCode:number){
        const deleteData = await this.regionRepository.delete({
            regionCode:regionCode
        })
        console.log('data berhasil dihapus ')
        return deleteData

    }

}
