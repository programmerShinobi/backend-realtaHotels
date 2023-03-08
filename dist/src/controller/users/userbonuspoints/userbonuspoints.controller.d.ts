import { UserbonuspointsService } from 'src/service/users/userbonuspoints/userbonuspoints.service';
import { bodyUserBonusPoints, bodyUserBonusPointsUpdate } from './userbonuspoints.dto';
export declare class UserbonuspointsController {
    private userBonusPointsService;
    constructor(userBonusPointsService: UserbonuspointsService);
    findAllUserBonusPoints(): Promise<any>;
    findAllJoinUserBonusPoints(): Promise<any>;
    findOneUserBonusPoints(params: any): Promise<any>;
    createUserBonusPoints(body: bodyUserBonusPoints): Promise<{
        message: string;
        results: any;
    } | {
        message: any;
        error: any;
    }>;
    updateUserBonusPoints(params: any, body: bodyUserBonusPointsUpdate): Promise<{
        message: string;
        results: any;
    } | {
        message: any;
        error: any;
    } | {
        message: any;
        error: any;
    }>;
    deleteUserMembers(params: any): Promise<any>;
}
