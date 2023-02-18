import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BookingOrderDetailExtra } from "./BookingOrderDetailExtra";

@Index("prit_id_pk", ["pritId"], { unique: true })
@Index("price_items_prit_name_key", ["pritName"], { unique: true })
@Entity("price_items", { schema: "master" })
export class PriceItems {
  @PrimaryGeneratedColumn({ type: "integer", name: "prit_id" })
  pritId: number;

  @Column("character varying", {
    name: "prit_name",
    nullable: true,
    unique: true,
    length: 55,
  })
  pritName: string | null;

  @Column("money", { name: "prit_price", nullable: true })
  pritPrice: string | null;

  @Column("character varying", {
    name: "prit_description",
    nullable: true,
    length: 255,
  })
  pritDescription: string | null;

  @Column("character varying", {
    name: "prit_type",
    nullable: true,
    length: 25,
  })
  pritType: string | null;

  @Column("timestamp without time zone", {
    name: "prit_modified_date",
    nullable: true,
    default: () => "now()",
  })
  pritModifiedDate: Date | null;

  @OneToMany(
    () => BookingOrderDetailExtra,
    (bookingOrderDetailExtra) => bookingOrderDetailExtra.boexPrit
  )
  bookingOrderDetailExtras: BookingOrderDetailExtra[];
}
