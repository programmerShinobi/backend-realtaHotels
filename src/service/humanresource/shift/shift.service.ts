import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Shift } from 'entities/Shift';
import { ShiftDto } from 'src/controller/humanresource/shift/shift.dto';

@Injectable()
export class ShiftService {
  constructor(
    @InjectRepository(Shift)
    private ShiftRepository: Repository<Shift>,
  ) {}

  // Method untuk menampilkan semua data Shift
  async findAllShift(): Promise<any> {
    return await this.ShiftRepository.find();
  }

  // Method untuk menampilkan semua data Shift by PK
  async findOneShift(shiftId: any): Promise<any> {
    return await this.ShiftRepository.findOne({
      where: { shiftId: shiftId },
    });
  }

  //   method untuk menambahkan data Shift ke database
  async createShift(data: ShiftDto) {
    return await this.ShiftRepository.insert({
      shiftName: data.shiftName,
      shiftStartTime: data.shiftStartTime,
      shiftEndTime: data.shiftEndTime,
    });
  }

  //   method untuk mengubah data Shift dari database
  async updateShift(shiftId: number, data: ShiftDto) {
    return await this.ShiftRepository.update(
      {
        shiftId: shiftId,
      },
      {
        shiftName: data.shiftName,
        shiftStartTime: data.shiftStartTime,
        shiftEndTime: data.shiftEndTime,
      },
    );
  }

  //   method untuk menghapus data Shift
  async deleteShift(shiftId: number) {
    return await this.ShiftRepository.delete({
      shiftId: shiftId,
    });
  }
}
