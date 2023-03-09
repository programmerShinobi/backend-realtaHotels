import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { FacilityService } from 'src/service/hotel/facility.service';
interface dataFaci {
  faci_name: any;
  faci_description: any;
  faci_max_number: any;
  faci_measure_unit: any;
  faci_room_number: any;
  faci_startdate: any;
  faci_endate: any;
  faci_low_price: any;
  faci_hight_price: any;
  faci_rate_price: any;
  faci_discount: any;
  faci_tax_rate: any;
  faci_cagro_id: any;
}

@Controller('facility')
export class FacilityController {
  constructor(private readonly faciService: FacilityService) {}

  @Get('view')
  findAllFacility() {
    return this.faciService.findAllFacility();
  }

  @Get('faciall')
  findallFaciHotel() {
    return this.faciService.findallFaciHotel();
  }

  @Get('maxroomid')
  findMaxRoomId() {
    return this.faciService.findMaxRoomId();
  }

  // @Post('insert')
  // async createFacilityl(@Body() data: Facilities) {
  //   const faci = await this.faciService.createFacility(data);
  //   if (!faci) {
  //     return 'failed insert to facis';
  //   } else {
  //     return 'success insert to faci';
  //   }
  // }
  @Post('insert')
  async insertFacilityAndPriceHistory(@Body() body: any) {
    const result = await this.faciService.insertFacilityAndPriceHistory(body);
    if (!result) {
      return 'failed';
    } else {
      return {
        message: 'berhasil insert',
        result: result.result,
      };
    }
  }
  @Put(':id')
  async updateFacility(@Param('id') id: any, @Body() body: any) {
    return await this.faciService.updateFacility(id, body);
  }

  @Get('viewByNoRoom')
  findByname(@Param() Params) {
    return this.faciService.findByNoRoom(Params);
  }

  @Delete('delete/:id')
  async deleteFaci(@Param('id') id: any) {
    return this.faciService.deleteFaci(id);
  }
}
