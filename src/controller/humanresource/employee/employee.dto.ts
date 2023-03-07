import { IsNotEmpty } from 'class-validator';

export class EmployeeDto {
  @IsNotEmpty()
  empNationalId : string;
  @IsNotEmpty()
  empBirthDate : string;
  @IsNotEmpty()
  empMaritalStatus : string;
  @IsNotEmpty()
  empGender : string;
  @IsNotEmpty()
  empHireDate : string;
  @IsNotEmpty()
  empSalariedFlag : string;
  @IsNotEmpty()
  empVacationHours : number;
  @IsNotEmpty()
  empSickleaveHours : number;
  @IsNotEmpty()
  empCurrentFlag : number;
  @IsNotEmpty()
  empPhoto : string;
}


