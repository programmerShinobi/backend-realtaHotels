import { Address } from "./Address";
import { Users } from "./Users";
export declare class UserProfiles {
    usproId: number;
    usproNationalId: string | null;
    usproBirth: string | null;
    usproPhoto: string | null;
    usproJobTitle: string | null;
    usproMaritalStatus: string | null;
    usproGender: string | null;
    usproAddr: Address;
    usproUser: Users;
}
