import { IsEmpty, IsNotEmpty } from "class-validator";

export class bodyUserBonusPoints{
    @IsNotEmpty()
    ubpoTotalPoints: number;
    ubpoBonusType: string;
    ubpoCreateOn: Date
    ubpoUser: any;
    
    @IsEmpty()
    ubpoId: number;
}

export class bodyUserBonusPointsUpdate{
    @IsNotEmpty()
    ubpoTotalPoints: number;
    ubpoBonusType: string;
    ubpoUser: any;
    ubpoId: number;
    
    @IsEmpty()
    ubpoCreateOn: Date
}