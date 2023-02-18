import { Body, Controller, Get, Param, Post, Put, Delete, UsePipes} from '@nestjs/common';
import { UsersService } from 'src/service/users/users/users.service'; 
import { ValidationPipe } from '@nestjs/common';
import { bodyUpdateUsersDto, bodyUsersDto } from './users.dto'; // Data Transfer Object

@UsePipes(new ValidationPipe())
@Controller('users')
export class UsersController {
    constructor(
        private usersService: UsersService
    ) { }

    @Get()
    findAllUsers() {
        return this.usersService.findAllUsers();
    }

    @Get('findAllJoinUsers')
    findAllJoinUsers() {
        return this.usersService.findAllJoinUsers();
    }

    @Get(':id')
    findOneUser(@Param() params) {
        return this.usersService.findOneUser(params.id)
    }

    @Get('/findOneJoinAllUser/:id')
    findOneJoinAllUser(@Param() params) {
        return this.usersService.findOneJoinAllUser(params.id)
    }

    @Post()
    // createUsers(@Body() body: bodyUsersDto) {
    createUsers(@Body() body) {
        return this.usersService.createUsers(body);
    }

    @Post('createUserWithPassword')
    createUserWithPassword(@Body() body1, @Body() body2) {
        return this.usersService.createUserWithPassword(body1, body2);
    }

    @Put('updateUserWithPassword/:id')
    updateUserWithPassword(@Param() params,@Body() body1, @Body() body2) {
        return this.usersService.updateUserWithPassword(params.id,body1, body2);
    }

    @Post('createAllJoinToUsers')
    createAllJoinToUsers(
        @Body() body1,
        @Body() body2,
        @Body() body3,
        @Body() body4,
        @Body() body5,
        @Body() body6,
    ) {
        return this.usersService.createAllJoinToUsers(
            body1,
            body2,
            body3,
            body4,
            body5,
            body6,
        );
    }

    @Put(':id')
    updateUsers(@Param() params, @Body() body: bodyUpdateUsersDto): Promise<any> {
        return this.usersService.updateUsers(params.id, body)
    }

    @Put('updateAllJoinToUsers/:id')
    updateAllJoinToUsers(
        @Param() params,
        @Body() body1,
        @Body() body2,
        @Body() body3,
        @Body() body4,
        @Body() body5,
        @Body() body6,
    ) {
        return this.usersService.updateAllJoinToUsers(
            params.id,
            body1,
            body2,
            body3,
            body4,
            body5,
            body6,
        );
    }

    @Delete('deleteAllJoinToUsers/:id')
    deleteUsers(@Param() params) {
        return this.usersService.deleteUsers(params.id);
    }

    @Delete(':id')
    deleteAllJoinToUsers(
        @Param() params,
        
    ) {
        return this.usersService.deleteAllJoinToUsers(params.id);
    }

}
