import { Users } from "./Users";
export declare class PaymentTransaction {
    patrId: number;
    patrTrxNumber: string | null;
    patrDebet: string | null;
    patrCredit: string | null;
    patrType: string | null;
    patrNote: string | null;
    patrModifiedDate: Date | null;
    patrOrderNumber: string | null;
    patrTrxNumberRef: string | null;
    patrSourceId: string | null;
    patrTargetId: string | null;
    patrUser: Users;
}
