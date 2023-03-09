import { Body, Get, Param, Controller, Post, Delete,Put } from '@nestjs/common';
import { UserBreakfeast } from 'entities/UserBreakfeast';
import { UserBreakfeastService } from 'src/service/booking/user-breakfeast.service';

@Controller('user-breakfeast')
export class UserBreakfeastController {
    constructor(private userbreakfeastService: UserBreakfeastService){}

    @Get()
    findall(): Promise<any> {
        return this.userbreakfeastService.findAllUserBreakfeast();
    }
    @Get(':id')
    findbyid(@Param('id') id: Date): Promise<any> {
        return this.userbreakfeastService.findOneUserBreakfeast(id);
    }
    @Post("create")
    create(@Body() body: any): Promise<any> {
        return this.userbreakfeastService.createUserBreakfeast(body);
    }
    @Put(":id")
    update(@Param() params,@Body() body: any): Promise<any> {
        return this.userbreakfeastService.updateUserBreakfeast(params.id,body);
    }
    @Delete(':id')
    remove(@Param() params): Promise<any> {
        return this.userbreakfeastService.deleteUserBreakfeast(params.id);
    }
}
