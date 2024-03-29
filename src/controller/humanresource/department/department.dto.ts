import { IsNotEmpty } from 'class-validator';

export class DepartmentDto {
  @IsNotEmpty()
  deptName: string;
  @IsNotEmpty()
  page: number;
}


