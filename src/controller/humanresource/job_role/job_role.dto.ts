import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class JobRoleDto {
  @IsNotEmpty()
  joroName: string;
}


