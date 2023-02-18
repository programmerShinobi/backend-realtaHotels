import { Controller, Get, UsePipes, ValidationPipe } from '@nestjs/common';
import { Body, Delete, Param, Post, Put } from '@nestjs/common/decorators';
import { UserrolesService } from 'src/service/users/userroles/userroles.service';
import { bodyUserRolesDto } from './userroles.dto';
import { UseGuards } from '@nestjs/common/decorators';
import { AuthService } from 'src/service/users/auth/auth.service';

@UseGuards(AuthService)
@UsePipes(new ValidationPipe())
@Controller('userroles')
export class UserrolesController {
    constructor(
        private userRolesService : UserrolesService
    ) {}

    @Get()
    findAllRuleRoles() {
        return this.userRolesService.findAllUserRoles()
    }

    @Get('join-all-userroles')
    findAllJoinUserRoles() {
        return this.userRolesService.findAllJoinUserRoles();
    }

    @Get(':id')
    findOneUserRoles(@Param() params) {
        return this.userRolesService.findOneUserRoles(params.id);
    }

    @Post()
    createUserRoles(@Body() body: bodyUserRolesDto) {
        return this.userRolesService.createUserRoles(body);        
    }

    @Put(':id')
    updateUserRoles(@Param() params, @Body() body: bodyUserRolesDto) {
        return this.userRolesService.updateUserRoles(params.id, body)
    }

    @Delete(':id')
    deleteUserRoles(@Param() params) {
        return this.userRolesService.deleteUserRoles(params.id)
    }
}
