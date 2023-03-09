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
import { FacilityPriceHistoryService } from 'src/service/hotel/facility_price_history.service';
import { FacilityPriceHistory } from 'entities/FacilityPriceHistory';

@Controller('facility-price-history')
export class FacilityPriceHistoryController {
  constructor(private readonly faphService: FacilityPriceHistoryService) {}
  @Get('view')
  findAllHotelReview() {
    return this.faphService.findAllFacilitiPriceHistory();
  }

  @Post('insert')
  async createHotel(@Body() data: FacilityPriceHistory) {
    const faph = await this.faphService.createFacilitiPriceHisty(data);
    if (!faph) {
      return 'failed insert to hotels';
    } else {
      return 'success insert to hotel';
    }
  }

  @Put(':id')
  async updateHotel(@Param('id') id: string, @Body() body: any) {
    const newData: any = await this.faphService.updateFaph(id, body);
    if (!newData) {
      return 'dont updated';
    } else {
      return 'updated';
    }
  }

  @Get('viewByUser')
  findByname(@Param() Params) {
    return this.faphService.findByUser(Params);
  }
}
