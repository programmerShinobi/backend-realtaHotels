import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserbonuspointsService } from 'src/service/users/userbonuspoints/userbonuspoints.service';
import { bodyUserBonusPoints, bodyUserBonusPointsUpdate } from './userbonuspoints.dto';

@UsePipes(new ValidationPipe())
@Controller('userbonuspoints')
export class UserbonuspointsController {
    constructor(
        private userBonusPointsService: UserbonuspointsService
    ) { }
    
    @Get()
    findAllUserBonusPoints() {
        return this.userBonusPointsService.findAllUserBonusPoints();
    }

    @Get('join-all-userbonuspoints')
    findAllJoinUserBonusPoints() {
        return this.userBonusPointsService.findAllJoinUserBonusPoints();
    }

    @Get(':id')
    findOneUserBonusPoints(@Param() params) {
        return this.userBonusPointsService.findOneUserBonusPoints(params.id);
    }

    @Post()
    createUserBonusPoints(@Body() body:bodyUserBonusPoints) {
        return this.userBonusPointsService.createUserBonusPoints(body);
    }

    @Put(':id')
    updateUserBonusPoints(@Param() params, @Body() body: bodyUserBonusPointsUpdate) {
        return this.userBonusPointsService.updateUserBonusPoints(params.id, body);
    }

    @Delete(':id')
    deleteUserMembers(@Param() params) {
        return this.userBonusPointsService.deleteUserBonusPoints(params.id);
    }
}
