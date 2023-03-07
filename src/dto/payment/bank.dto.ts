import { IsNotEmpty, IsOptional } from 'class-validator';

export class BankDto {
  @IsNotEmpty()
  bankCode: string;

  @IsNotEmpty()
  bankName: string;

  @IsOptional()
  bankModifiedDate: string;
}
