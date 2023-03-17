import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { RestoMenus } from 'entities/RestoMenus';
import { InjectRepository } from '@nestjs/typeorm';
import { async } from 'rxjs';

@Injectable()
export class RestoMenusService {
  constructor(
    @InjectRepository(RestoMenus)
    private restoMenusRepository: Repository<RestoMenus>,
  ) {}

  //Method Menampilkan Semua Data
  async findAllMenusResto(): Promise<any> {
    return await this.restoMenusRepository
      .find({
        order: { remeId: 1 }, // -1 DESC
      })
      .then((result: any) => {
        if (!result) {
          throw new NotFoundException('Data Not Found');
        }
        return {
          message: 'Data displayed successfully',
          results: result,
        };
      })
      .catch((err: any) => {
        return {
          message: err.message,
          error: err.name,
        };
      });
  }

  //Menampilkan satu data by ID
  async findOneMenusResto(reme_Id: number): Promise<any> {
    return await this.restoMenusRepository
      .findOne({
        where: {
          remeId: reme_Id,
        },
      })
      .then((result: any) => {
        if (!result) {
          throw new NotFoundException('Data not found');
        }
        return {
          message: 'Data displayed successfully',
          results: result,
        };
      })
      .catch((err: any) => {
        return {
          message: err.message,
          error: err.name,
        };
      });
  }

  // Create
  async createMenusResto(data: RestoMenus): Promise<any> {
    let now = new Date();
    // const newRestoMenus = new RestoMenus();
    await this.restoMenusRepository.save({
      remeName: data.remeName,
      remeDescription: data.remeDescription,
      remePrice: data.remePrice,
      remeStatus: data.remeStatus,
      remeModifiedDate: now,
    });
    await this.findAllMenusResto()
      .then(async (result: any) => {
        if (!result) {
          throw new BadRequestException('Data insert failed');
        }
        let results = await this.findAllMenusResto(); // menambahkan baris ini
        return {
          message: 'Data inserted successfully',
          results: results,
        };
      })
      .catch((err: any) => {
        return {
          message: err.message,
          error: err.name,
        };
      });
  }

  //update

  // async updateMenusResto(id: number, data: RestoMenus): Promise<any> {
  //   return await this.restoMenusRepository.update({remeId:id},data)
  // }

  async updateMenusResto(id: number, data: RestoMenus): Promise<any> {
    let now = new Date();
    return await this.restoMenusRepository
      .update(
        {
          remeId: id,
        },
        {
          remeName: data.remeName,
          remeDescription: data.remeDescription,
          remePrice: data.remePrice,
          remeStatus: data.remeStatus,
          remeModifiedDate: now,
        },
      )
      .then(async (result: any) => {
        if (!result.affected) {
          throw new BadRequestException('Data update failed');
        }

        let dataUpdated = await this.restoMenusRepository.findOneBy({
          remeId: id,
        });

        return {
          message: 'Data updated successfully',
          results: dataUpdated,
        };
      })
      .catch((err: any) => {
        return {
          message: err.message,
          error: err.name,
        };
      });
  }

  // Delete

  async deleteMenusResto(id: number): Promise<any> {
    return await this.restoMenusRepository
      .delete(id)
      .then((result: any) => {
        if (!result.affected) {
          throw new NotFoundException('Data not found');
        } else {
          return {
            message: `Data deleted with ID : ${id} successfully`,
          };
        }
      })
      .catch((err: any) => {
        return {
          message: err.message,
          error: err.name,
        };
      });
  }
}
