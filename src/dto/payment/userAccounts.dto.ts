import { IsNotEmpty, IsString, IsOptional, MaxLength } from 'class-validator';

export class UserAccountsDto {
  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  paymentType: string;

  @IsNotEmpty()
  securedKey: string;

  @IsNotEmpty()
  paymentName: string;

  @IsOptional()
  cardHolderName: string;

  @IsOptional()
  accountNumber: string;

  @IsOptional()
  expMonth: number;

  @IsOptional()
  expYear: number;

  @IsOptional()
  balance: number;
}
