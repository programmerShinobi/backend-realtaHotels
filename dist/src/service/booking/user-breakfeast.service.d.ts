import { Repository } from 'typeorm';
import { UserBreakfeast } from 'entities/UserBreakfeast';
export declare class UserBreakfeastService {
    private userbreakfeastRepository;
    constructor(userbreakfeastRepository: Repository<UserBreakfeast>);
    findAllUserBreakfeast(): Promise<any>;
    findOneUserBreakfeast(usbr: Date): Promise<any>;
    createUserBreakfeast(data: UserBreakfeast): Promise<any>;
    updateUserBreakfeast(usbr: Date, data: UserBreakfeast): Promise<any>;
    deleteUserBreakfeast(usbr: Date): Promise<any>;
}
