import { UserBonusPoints } from 'entities/UserBonusPoints';
import { Repository } from 'typeorm';
export declare class UserbonuspointsService {
    private userBonusRepository;
    constructor(userBonusRepository: Repository<UserBonusPoints>);
    findAllUserBonusPoints(): Promise<any>;
    findAllJoinUserBonusPoints(): Promise<any>;
    findOneUserBonusPoints(id: number): Promise<any>;
    createUserBonusPoints(data: UserBonusPoints): Promise<{
        message: string;
        results: any;
    } | {
        message: any;
        error: any;
    }>;
}
