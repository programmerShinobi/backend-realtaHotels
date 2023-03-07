import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryGroup } from 'entities/CategoryGroup';
import { diskStorage } from 'multer';
@Injectable()
export class CategoryGroupService {
    query(arg0: string) {
      throw new Error('Method not implemented.');
    }
    constructor(
        @InjectRepository(CategoryGroup)
        private CategoryGroupRepository: Repository<CategoryGroup>
    ) { }

    // untuk upload data CagroIcon
    async upload(file: Express.Multer.File): Promise<string> {
        const fileName = `${new Date().getTime()}_${file.originalname}`;
        const fileDestination = 'public/upload';
    
        const storage = diskStorage({
          destination: fileDestination,
          filename: (req, file, cb) => cb(null, fileName),
        });
    
        // const upload = multer({ storage }).any();
    
        return new Promise((resolve, reject) => {
        //   upload(file, null, (err: any) => {
        //     if (err) reject(err);
        //     else resolve(`${fileDestination}/${fileName}`);
        //   });
        });
      }
   
    // untuk get semua data 
    async getAll(): Promise<any> {
        const ShowData = await this.CategoryGroupRepository.find()
        return ShowData
    }
    // get data by Id
    async getById(cagroId: number): Promise<any> {
        const ShowDataId = await this.CategoryGroupRepository.findOne({
            where: {
                cagroId: cagroId
            }
        })
        return ShowDataId
    }
    // add data 
    async create(data: CategoryGroup): Promise<any> {
        const addData = await this.CategoryGroupRepository.save({
            cagroName: data.cagroName,
            cagroDescription: data.cagroDescription,
            cagroType: data.cagroType,
            cagroIcon: data.cagroIcon,
            cagroIconUrl: data.cagroIconUrl

        })
        console.log(addData)
        if (addData) {
            return { message: 'Data berhasil ditambahkan', addData: addData }
        }
        else {
            return { message: 'Data gagal ditambahkan' }
        }
    }
    // edit data 
    async edit(data: CategoryGroup, _cagroId: number) {
        const editData = await this.CategoryGroupRepository.update({
            cagroId: _cagroId
        },
            {
                cagroName: data.cagroName,
                cagroDescription: data.cagroDescription,
                cagroType: data.cagroType,
                cagroIcon: data.cagroIcon,
                cagroIconUrl: data.cagroIconUrl
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
    // delete data 
    async delete(cagroId: number) {
        const deleteData = await this.CategoryGroupRepository.delete({
            cagroId: cagroId
        })
        return deleteData
    }
}
function multer(_arg0: { storage: any; }) {
    throw new Error('Function not implemented.');
}

