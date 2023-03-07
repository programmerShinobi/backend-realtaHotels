import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ShiftDto } from './shift.dto';
import { ShiftService } from 'src/service/humanresource/shift/shift.service';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

@Controller('shift')
export class ShiftController {
  constructor(private readonly shiftService: ShiftService) {}

  @Get()
  @HttpCode(200)
  findAllShift(): Promise<any> {
    return this.shiftService.findAllShift();
  }

  @Get(':id')
  @HttpCode(200)
  async findOneShift(@Param() param: any): Promise<any> {
    const result = await this.shiftService.findOneShift(param.id);

    if (result) {
      return result;
    } else {
      throw new HttpException('Shift not found', HttpStatus.NOT_FOUND);
    }
  }

  @Post('insert')
  @HttpCode(201)
  async createShift(@Body() body: ShiftDto): Promise<any> {
    const result = await this.shiftService.createShift(body);

    if (result) {
      return { message: 'Shift created successfully' };
    } else {
      throw new HttpException(
        'Shift created failed',
        HttpStatus.EXPECTATION_FAILED,
      );
    }
  }

  @Put('update/:id')
  @HttpCode(200)
  async updateShift(
    @Param('id') id: number,
    @Body() body: ShiftDto,
  ): Promise<any> {
    const getOneData = await this.shiftService.findOneShift(id);

    if (getOneData) {
      const result = await this.shiftService.updateShift(id, body);

      if (result) {
        throw new HttpException(
          'Shift updated successfully',
          HttpStatus.ACCEPTED,
        );
      } else {
        throw new HttpException(
          'Shift updated failed',
          HttpStatus.EXPECTATION_FAILED,
        );
      }
    } else {
      throw new HttpException('Shift not found', HttpStatus.NOT_FOUND);
    }
  }

  @Delete('delete/:id')
  @HttpCode(200)
  async deleteShift(@Param('id') id: number) {
    const getOneData = await this.shiftService.findOneShift(id);

    if (getOneData) {
      const result = this.shiftService.deleteShift(id);

      if (result) {
        throw new HttpException(
          'Shift deleted successfully',
          HttpStatus.ACCEPTED,
        );
      } else {
        throw new HttpException(
          'Shift deleted failed',
          HttpStatus.EXPECTATION_FAILED,
        );
      }
    } else {
      throw new HttpException('Shift not found', HttpStatus.NOT_FOUND);
    }
  }
}
