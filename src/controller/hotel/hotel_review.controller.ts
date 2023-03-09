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
import { HotelReviewService } from 'src/service/hotel/hotel_review.service';
import { HotelReviews } from 'entities/HotelReviews';
@Controller('hore')
export class HotelReviewController {
  constructor(private readonly hotelReviewService: HotelReviewService) {}
  @Get('view')
  findAllHotelReview() {
    return this.hotelReviewService.findAllHotelReview();
  }

  @Post('insert')
  async createHotel(@Body() data: HotelReviews) {
    const hotel = await this.hotelReviewService.createHotelReview(data);
    if (!hotel) {
      return 'failed insert to hotels';
    } else {
      return 'success insert to hotel';
    }
  }

  @Put(':id')
  async updateHotel(@Param('id') id: string, @Body() body: any) {
    const newData: any = await this.hotelReviewService.updateHotelReview(
      id,
      body,
    );
    if (!newData) {
      return 'dont updated';
    } else {
      return 'updated';
    }
  }

  @Get('viewByUser/:id')
  findByname(@Param() Params) {
    return this.hotelReviewService.findByUser(Params.id);
  }

  @Get('alluser')
  getProcedureHore() {
    return this.hotelReviewService.findProsedurHore();
  }
}
