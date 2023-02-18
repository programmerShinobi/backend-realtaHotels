import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Entities } from "./Entities";

@Index("payment_gateaway_paga_code_key", ["pagaCode"], { unique: true })
@Index("payment_gateaway_pkey", ["pagaEntityId"], { unique: true })
@Index("payment_gateaway_paga_name_key", ["pagaName"], { unique: true })
@Entity("payment_gateaway", { schema: "payment" })
export class PaymentGateaway {
  @PrimaryGeneratedColumn({ type: "integer", name: "paga_entity_id" })
  pagaEntityId: number;

  @Column("character varying", {
    name: "paga_code",
    nullable: true,
    unique: true,
    length: 10,
  })
  pagaCode: string | null;

  @Column("character varying", {
    name: "paga_name",
    nullable: true,
    unique: true,
    length: 55,
  })
  pagaName: string | null;

  @Column("timestamp without time zone", {
    name: "paga_modified_date",
    nullable: true,
    default: () => "now()",
  })
  pagaModifiedDate: Date | null;

  @OneToOne(() => Entities, (entities) => entities.paymentGateaway, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "paga_entity_id", referencedColumnName: "entityId" }])
  pagaEntity: Entities;
}
