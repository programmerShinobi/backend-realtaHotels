import { Bank } from "./Bank";
import { PaymentGateaway } from "./PaymentGateaway";
import { UserAccounts } from "./UserAccounts";
export declare class Entities {
    entityId: number;
    bank: Bank;
    paymentGateaway: PaymentGateaway;
    userAccounts: UserAccounts[];
}
