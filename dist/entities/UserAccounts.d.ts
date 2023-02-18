import { Entities } from "./Entities";
import { Users } from "./Users";
export declare class UserAccounts {
    usacEntityId: number;
    usacUserId: number;
    usacAccountNumber: string | null;
    usacSaldo: string | null;
    usacType: string | null;
    usacExpmonth: number | null;
    usacExpyear: number | null;
    usacModifiedDate: Date | null;
    usacEntity: Entities;
    usacUser: Users;
}
