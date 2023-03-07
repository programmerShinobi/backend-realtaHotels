import { MembersService } from 'src/service/master/members/members.service';
export declare class MembersController {
    private readonly MembersRepository;
    constructor(MembersRepository: MembersService);
    getAll(): Promise<any>;
    getById(Param: any): Promise<any>;
    create(Body: any): Promise<any>;
    edit(id: any, Body: any): Promise<any>;
    delete(Param: number): Promise<import("typeorm").DeleteResult>;
}
