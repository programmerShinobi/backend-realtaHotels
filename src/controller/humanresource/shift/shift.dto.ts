import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class ShiftDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  shiftName: string;
  shiftStartTime: string;
  shiftEndTime: string;
}