import { Body, Get, Param, Controller, Post, Delete,Put } from '@nestjs/common';
import { SpecialOffersService } from 'src/service/booking/special_offers.service';

@Controller('specialoffers')
export class SpecialOffersController {
    constructor( private specialOfferservice : SpecialOffersService ) { }

    @Get()
    findall(): Promise<any> {
        return this.specialOfferservice.findAllSpecialOffers();
    }

    @Get('guest')
    findGuestSO() : Promise<any> {
        return this.specialOfferservice.findGuestSpecialOffers()
    }
    @Get(':id')
    findbyid(@Param('id') id: number): Promise<any> {
        return this.specialOfferservice.findOneSpecialOffers(id);
    }
    @Post()
    create(@Body() body:any): Promise<any> {
        return this.specialOfferservice.createSpecialOffers(body);
    }
    @Put(":id")
    update(@Param() params,@Body() body:any): Promise<any> {
        return this.specialOfferservice.updateSpecialOffers(params.id,body);
    }
    @Delete(':id')
    remove(@Param() params): Promise<any> {
        return this.specialOfferservice.deleteSpecialOffers(params.id);
    }
}
