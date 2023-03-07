import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { BankService } from 'src/service/payment/bank/bank.service';
import { BankDto } from 'src/dto/payment/bank.dto';

@Controller('bank')
export class BankController {
    constructor(private bankService: BankService) { }

    // Find All Bank
    @Get()
    async findAllBank() {
        return await this.bankService.find();
    }

    // Find Bank by ID
    // @Get(':id')
    // async findBankById(@Param('id') id: number) {
    //   return await this.bankService.find(id);
    // }

    @Get('filter?')
    async findByFilter(@Query() filter: any) {
        return await this.bankService.find(filter)
    }

    // Update Bank
    @Put(':id')
    async updateBank(@Param('id') id: number, @Body() body: BankDto) {
        return await this.bankService.update(id, body);
    }

    @Post()
    async insertBank(@Body() body: BankDto) {
        return await this.bankService.insert(body);
    }

    @Delete(':id')
    async deleteBank(@Param('id') id: number) {
        return await this.bankService.delete(id);
    }
}
