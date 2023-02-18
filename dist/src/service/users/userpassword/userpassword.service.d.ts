import { UserPassword } from 'entities/UserPassword';
import { Repository } from 'typeorm';
export declare class UserpasswordService {
    private userPasswordRepository;
    constructor(userPasswordRepository: Repository<UserPassword>);
    findAllUserPassword(): Promise<any>;
    findAllJoinUserPassword(): Promise<any>;
    findOneUserPassword(id: number): Promise<any>;
    createUserPassword(data: UserPassword): Promise<any>;
    updateUserPassword(id: number, data: UserPassword): Promise<any>;
    deleteUserPassword(id: number): Promise<any>;
    findPassword(id: number): Promise<any>;
}
