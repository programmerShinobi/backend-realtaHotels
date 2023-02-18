import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Facilities } from "./Facilities";
import { Users } from "./Users";

@Index("facility_price_history_pk", ["faphId"], { unique: true })
@Entity("facility_price_history", { schema: "hotel" })
export class FacilityPriceHistory {
  @PrimaryGeneratedColumn({ type: "integer", name: "faph_id" })
  faphId: number;

  @Column("timestamp without time zone", {
    name: "faph_startdate",
    nullable: true,
  })
  faphStartdate: Date | null;

  @Column("timestamp without time zone", {
    name: "faph_enddate",
    nullable: true,
  })
  faphEnddate: Date | null;

  @Column("money", { name: "faph_low_price", nullable: true })
  faphLowPrice: string | null;

  @Column("money", { name: "faph_high_price", nullable: true })
  faphHighPrice: string | null;

  @Column("money", { name: "faph_discount", nullable: true })
  faphDiscount: string | null;

  @Column("money", { name: "faph_tax_rate", nullable: true })
  faphTaxRate: string | null;

  @Column("timestamp without time zone", {
    name: "faph_modified_date",
    nullable: true,
  })
  faphModifiedDate: Date | null;

  @ManyToOne(
    () => Facilities,
    (facilities) => facilities.facilityPriceHistories
  )
  @JoinColumn([{ name: "faph_faci_id", referencedColumnName: "faciId" }])
  faphFaci: Facilities;

  @ManyToOne(() => Users, (users) => users.facilityPriceHistories)
  @JoinColumn([{ name: "faph_user_id", referencedColumnName: "userId" }])
  faphUser: Users;
}
