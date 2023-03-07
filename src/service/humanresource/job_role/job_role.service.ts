import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JobRole } from 'entities/JobRole';
import { JobRoleDto } from 'src/controller/humanresource/job_role/job_role.dto';
import { Repository } from 'typeorm';


@Injectable()
export class JobRoleService {
  constructor(
    @InjectRepository(JobRole)
    private jobRoleRepository: Repository<JobRole>,
  ) {}

  // Method untuk menampilkan semua data JobRole
  async findAllJobRole(): Promise<any> {
    return await this.jobRoleRepository.find();
  }

  // Method untuk menampilkan semua data JobRole by PK
  async findOneJobRole(joroId: any): Promise<any> {
    return await this.jobRoleRepository.findOne({
      where: { joroId: joroId },
    });
  }

  //   method untuk menambahkan data JobRole ke database

  async createJobRole(data: any) {
    return await this.jobRoleRepository.insert({
      joroName: data.joroName,
      joroModifiedDate: new Date(),
    });
  }

  //   method untuk mengubah data JobRole dari database
  async updateJobRole(joroId: number, data: JobRoleDto) {
    return await this.jobRoleRepository.update(
      {
        joroId: joroId,
      },
      {
        joroName: data.joroName,
        joroModifiedDate: new Date(),
      },
    );
  }

  //   method untuk menghapus data JobRole
  async deleteJobRole(joroId: any) {
    return await this.jobRoleRepository.delete({
      joroId: joroId,
    });
  }
}
