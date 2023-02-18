import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { SpecialOfferCoupons } from "./SpecialOfferCoupons";

@Index("pk_spof_id", ["spofId"], { unique: true })
@Entity("special_offers", { schema: "booking" })
export class SpecialOffers {
  @PrimaryGeneratedColumn({ type: "integer", name: "spof_id" })
  spofId: number;

  @Column("character varying", {
    name: "spof_name",
    nullable: true,
    length: 55,
  })
  spofName: string | null;

  @Column("character varying", {
    name: "spof_description",
    nullable: true,
    length: 255,
  })
  spofDescription: string | null;

  @Column("character varying", {
    name: "spof_type",
    nullable: true,
    length: 50,
  })
  spofType: string | null;

  @Column("money", { name: "spof_discount", nullable: true })
  spofDiscount: string | null;

  @Column("timestamp without time zone", {
    name: "spof_start_date",
    nullable: true,
  })
  spofStartDate: Date | null;

  @Column("timestamp without time zone", {
    name: "spof_end_date",
    nullable: true,
  })
  spofEndDate: Date | null;

  @Column("integer", { name: "spof_min_qty", nullable: true })
  spofMinQty: number | null;

  @Column("integer", { name: "spof_max_qty", nullable: true })
  spofMaxQty: number | null;

  @Column("timestamp without time zone", {
    name: "spof_modified_date",
    nullable: true,
    default: () => "now()",
  })
  spofModifiedDate: Date | null;

  @OneToMany(
    () => SpecialOfferCoupons,
    (specialOfferCoupons) => specialOfferCoupons.socoSpof
  )
  specialOfferCoupons: SpecialOfferCoupons[];
}
