import {
  Entity,
  Index,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Bank } from "./Bank";
import { PaymentGateaway } from "./PaymentGateaway";
import { UserAccounts } from "./UserAccounts";

@Index("entities_pkey", ["entityId"], { unique: true })
@Entity("entities", { schema: "payment" })
export class Entities {
  @PrimaryGeneratedColumn({ type: "integer", name: "entity_id" })
  entityId: number;

  @OneToOne(() => Bank, (bank) => bank.bankEntity)
  bank: Bank;

  @OneToOne(
    () => PaymentGateaway,
    (paymentGateaway) => paymentGateaway.pagaEntity
  )
  paymentGateaway: PaymentGateaway;

  @OneToMany(() => UserAccounts, (userAccounts) => userAccounts.usacEntity)
  userAccounts: UserAccounts[];
}
