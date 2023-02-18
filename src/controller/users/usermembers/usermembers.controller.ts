import { Controller, ValidationPipe } from '@nestjs/common';
import { Body, Delete, Get, Param, Post, Put, UsePipes } from '@nestjs/common/decorators';
import { UsermembersService } from 'src/service/users/usermembers/usermembers.service';
import { bodyUserMembersDto } from './usermembers.dto';

@UsePipes(new ValidationPipe())
@Controller('usermembers')
export class UsermembersController {
    constructor(
        private userMembersService: UsermembersService
    ) { }
    
    @Get()
    findAllUserMembers() {
        return this.userMembersService.findAllUserMembers();
    }

    @Get('join-all-usermembers')
    findAllJoinUserMembers() {
        return this.userMembersService.findAllJoinUserMembers();
    }

    @Get(':id')
    findOneUserMembers(@Param() params) {
        return this.userMembersService.findOneUserMembers(params.id);
    }

    @Post()
    createUserMembers(@Body() body: bodyUserMembersDto) {
        return this.userMembersService.createUserMembers(body);
    }

    @Put(':id')
    updateUserMembers(@Param() params, @Body() body:bodyUserMembersDto) {
        return this.userMembersService.updateUserMembers(params.id, body);
    }

    @Delete(':id')
    deleteUserMembers(@Param() params) {
        return this.userMembersService.deleteUserMembers(params.id);
    }
}
