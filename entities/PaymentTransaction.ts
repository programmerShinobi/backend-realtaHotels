import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users";

@Index("payment_transaction_pkey", ["patrId"], { unique: true })
@Index("payment_transaction_patr_trx_number_key", ["patrTrxNumber"], {
  unique: true,
})
@Index("payment_transaction_patr_trx_number_ref_key", ["patrTrxNumberRef"], {
  unique: true,
})
@Entity("payment_transaction", { schema: "payment" })
export class PaymentTransaction {
  @PrimaryGeneratedColumn({ type: "integer", name: "patr_id" })
  patrId: number;

  @Column("character varying", {
    name: "patr_trx_number",
    nullable: true,
    unique: true,
    length: 55,
  })
  patrTrxNumber: string | null;

  @Column("numeric", { name: "patr_debet", nullable: true })
  patrDebet: string | null;

  @Column("numeric", { name: "patr_credit", nullable: true })
  patrCredit: string | null;

  @Column("character", { name: "patr_type", nullable: true, length: 3 })
  patrType: string | null;

  @Column("character varying", {
    name: "patr_note",
    nullable: true,
    length: 255,
  })
  patrNote: string | null;

  @Column("timestamp without time zone", {
    name: "patr_modified_date",
    nullable: true,
    default: () => "now()",
  })
  patrModifiedDate: Date | null;

  @Column("character varying", {
    name: "patr_order_number",
    nullable: true,
    length: 55,
  })
  patrOrderNumber: string | null;

  @Column("character varying", {
    name: "patr_trx_number_ref",
    nullable: true,
    unique: true,
    length: 55,
  })
  patrTrxNumberRef: string | null;

  @Column("integer", { name: "patr_source_id", nullable: true })
  patrSourceId: number | null;

  @Column("integer", { name: "patr_target_id", nullable: true })
  patrTargetId: number | null;

  @ManyToOne(() => Users, (users) => users.paymentTransactions, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "patr_user_id", referencedColumnName: "userId" }])
  patrUser: Users;
}
