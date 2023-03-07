import { ShiftDto } from './shift.dto';
import { ShiftService } from 'src/service/humanresource/shift/shift.service';
export declare class ShiftController {
    private readonly shiftService;
    constructor(shiftService: ShiftService);
    findAllShift(): Promise<any>;
    findOneShift(param: any): Promise<any>;
    createShift(body: ShiftDto): Promise<any>;
    updateShift(id: number, body: ShiftDto): Promise<any>;
    deleteShift(id: number): Promise<void>;
}
