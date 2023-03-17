import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from 'entities/Country';

@Injectable()
export class CountriesService {
    findAll() {
        throw new Error('Method not implemented.');
    }
    // private locationRepository: Repository<Location>
    find // private locationRepository: Repository<Location>
        () {
        throw new Error('Method not implemented.');
    }
    query(arg0: string) {
        throw new Error('Method not implemented.');
    }
    constructor(
        @InjectRepository(Country)
        private countryRepository: Repository<Country>,
        // private locationRepository: Repository<Location>
    ) { }
    async getAll(): Promise<any> {
        const ShowData = await this.countryRepository.query('select * from master.country order by country_id')
        return ShowData
    }
    // async getAllLocation(): Promise<any> {
    //     const LocationData = await this.locationRepository.query("select * from master.locationsfunctions()")
    //     return LocationData
    // }
    async getById(countryId: number): Promise<any> {
        const ShowDataId = await this.countryRepository.findOne({
            where: {
                countryId: countryId
            }
        })
        return ShowDataId
    }
    async create(data: Country): Promise<any> {
        const addData = await this.countryRepository.save({
            // countryId: data.countryId,
            countryName: data.countryName,
            countryRegion: data.countryRegion
        })
        console.log(addData)
        if (addData) {
            return { message: 'Data berhasil ditambahkan', addData }
        }
        else {
            return { message: 'Data gagal ditambahkan' }
        }
    }
    async edit(data: Country, countryId: any) {
        const editData = await this.countryRepository.update({
            countryId: countryId
        },
            {
                countryName: data.countryName,
                countryRegion: data.countryRegion
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
    //update
    // async updateCountry(countryId: any, data: any): Promise<any> {
    //     const country = new Country();
    //     country.countryName = data.country_name;
    //     country.countryRegion = data.country_region_id;

    //     const hasil = await this.countryRepository
    //         .update({ countryId: countryId }, country)
    //         .then(() => {
    //             return 'success' + hasil;
    //         })
    //         .catch((error) => {
    //             return error;
    //         });
    // }

    async delete(countryId: any) {
        const deleteData = await this.countryRepository.delete({
            countryId: countryId
        })
        return deleteData
    }
}




// <select
// placeholder="Select a region"
// value={selectedRegion || values.countryRegion}
// onChange={(value) => {
//     setSelectedRegion(value);
//     handleChange({ target: { name: "countryRegion", value } });
// }}
// name="countryRegion"
// disabled={values.countryId !== ""} // disable field jika sudah ada data modal form Country yang di-select

// >
// <option>-- Select Region ---</option>
// {mBenua.map((region: { regionCode: any; regionName: any; }) => (
//     <option value={region.regionCode}>{region.regionName}</option>
// ))}
// {console.log("dataselect region", mBenua)}

// </select>