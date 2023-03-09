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

    @Get('filter?')
    async findByFilter(@Query() filter: any) {
        return await this.bankService.find(filter)
    }

    // Update Bank
    @Put(':code')
    async updateBank(@Param('code') code: string, @Body() body: BankDto) {
        return await this.bankService.update(code, body);
    }

    @Post()
    async insertBank(@Body() body: BankDto) {
        return await this.bankService.insert(body);
    }

    @Delete(':code')
    async deleteBank(@Param('code') code: string) {
        return await this.bankService.delete(code);
    }
}
