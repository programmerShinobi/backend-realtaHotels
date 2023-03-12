import {
  Controller,
  Get,
  Param,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Body, Post, Put } from '@nestjs/common/decorators';
import { AuthService } from 'src/service/users/auth/auth.service';
import { UserpasswordService } from 'src/service/users/userpassword/userpassword.service';
import {
  bodyLoginDto,
  bodyRegister1Dto,
  bodyRegister2Dto,
  bodyRegisterGuest1Dto,
  bodyRegisterGuest2Dto,
} from './auth.dto';

@UsePipes(new ValidationPipe())
@Controller('auth')
export class AuthController {
  constructor(
    private userpasswordService: UserpasswordService,
    private authService: AuthService,
  ) {}

  @Get('password/:id')
  findPassword(@Param() params) {
    return this.userpasswordService.findPassword(params.id);
  }

  @Get('email/:email')
  findEmail(@Param() params) {
    return this.authService.findEmail(params.email);
  }

  @Post('login')
  login(@Body() body: bodyLoginDto) {
    return this.authService.login(body);
  }

  @Post('register')
  register(
    @Body() body1: bodyRegister1Dto,
    @Body() body2,
    @Body() body3: bodyRegister2Dto,
  ) {
    return this.authService.register(body1, body2, body3);
  }

  @Post('registerGuest')
  registerGuest(
    @Body() body1: bodyRegisterGuest1Dto,
    @Body() body2,
    @Body() body3: bodyRegisterGuest2Dto,
  ) {
    return this.authService.registerGuest(body1, body2, body3);
  }

  @Put('changePassword/:id')
  changePassword(@Param() params, @Body() body) {
    return this.authService.changePassword(params.id, body);
  }

  @Put('forgotPassword')
  forgotPassword(@Body() body) {
    return this.authService.forgotPassword(body);
  }
}
