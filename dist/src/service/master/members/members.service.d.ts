import { Repository } from 'typeorm';
import { Members } from 'entities/Members';
export declare class MembersService {
    private MembersRepository;
    constructor(MembersRepository: Repository<Members>);
    getAll(): Promise<any>;
    getById(membName: any): Promise<any>;
    create(data: Members): Promise<any>;
    edit(data: Members, _membName: any): Promise<{
        message: string;
    }>;
    delete(membName: any): Promise<import("typeorm").DeleteResult>;
}
