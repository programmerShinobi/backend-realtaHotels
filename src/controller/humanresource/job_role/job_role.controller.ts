import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
import { JobRoleDto } from './job_role.dto';
import { JobRoleService } from 'src/service/humanresource/job_role/job_role.service';

@Controller('jobrole')
export class JobroleController {
  constructor(private readonly jobRoleService: JobRoleService) {}

  @Get()
  @HttpCode(200)
  findAllJobRole(): Promise<any> {
    return this.jobRoleService.findAllJobRole();
  }

  @Get(':id')
  @HttpCode(200)
  async findOneJobRole(@Param() param: any): Promise<any> {
    const result = await this.jobRoleService.findOneJobRole(param.id);

    if (result) {
      return result;
    } else {
      throw new HttpException('Job Role not found', HttpStatus.NOT_FOUND);
    }
  }

  @Post('insert')
  @HttpCode(201)
  async createJobRole(@Body() body: JobRoleDto): Promise<any> {
    const result = await this.jobRoleService.createJobRole(body);

    if (result) {
      return { message: 'Job Role created successfully' };
    } else {
      throw new HttpException(
        'Job Role created failed',
        HttpStatus.EXPECTATION_FAILED,
      );
    }
  }

  @Put('update/:id')
  @HttpCode(200)
  async updateJobRole(
    @Param('id') id: number,
    @Body() body: JobRoleDto,
  ): Promise<any> {
    const getOneData = await this.jobRoleService.findOneJobRole(id);

    if (getOneData) {
      const result = await this.jobRoleService.updateJobRole(id, body);

      if (result) {
        throw new HttpException(
          'Job Role updated successfully',
          HttpStatus.ACCEPTED,
        );
      } else {
        throw new HttpException(
          'Job Role updated failed',
          HttpStatus.EXPECTATION_FAILED,
        );
      }
    } else {
      throw new HttpException('Job Role not found', HttpStatus.NOT_FOUND);
    }
  }

  @Delete('delete/:id')
  @HttpCode(200)
  async deleteJobRole(@Param('id') id: number) {
    const getOneData = await this.jobRoleService.findOneJobRole(id);

    if (getOneData) {
      const result = this.jobRoleService.deleteJobRole(id);

      if (result) {
        throw new HttpException(
          'Job Role deleted successfully',
          HttpStatus.ACCEPTED,
        );
      } else {
        throw new HttpException(
          'Job Role deleted failed',
          HttpStatus.EXPECTATION_FAILED,
        );
      }
    } else {
      throw new HttpException('Job Role not found', HttpStatus.NOT_FOUND);
    }
  }
}
