import { Repository } from 'typeorm';
import { Shift } from 'entities/Shift';
import { ShiftDto } from 'src/controller/humanresource/shift/shift.dto';
export declare class ShiftService {
    private ShiftRepository;
    constructor(ShiftRepository: Repository<Shift>);
    findAllShift(): Promise<any>;
    findOneShift(shiftId: any): Promise<any>;
    createShift(data: ShiftDto): Promise<import("typeorm").InsertResult>;
    updateShift(shiftId: number, data: ShiftDto): Promise<import("typeorm").UpdateResult>;
    deleteShift(shiftId: number): Promise<import("typeorm").DeleteResult>;
}
