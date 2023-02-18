import { IsEmpty, IsNotEmpty } from "class-validator";

export class bodyUserBonusPoints{
    @IsNotEmpty()
    ubpoTotalPoints: number;
    ubpoBonusType: string;
    ubpoCreateOn: Date
    
    @IsEmpty()
    ubpoUser: any;
    ubpoId: number;
}