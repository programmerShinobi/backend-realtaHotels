import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { BookingOrderDetail } from "./BookingOrderDetail";

@Index("pk_borde_id", ["usbrBordeId"], { unique: true })
@Entity("user_breakfeast", { schema: "booking" })
export class UserBreakfeast {
  @Column("integer", { primary: true, name: "usbr_borde_id" })
  usbrBordeId: number;

  @Column("timestamp without time zone", {
    name: "usbr_modified_date",
    nullable: true,
    default: () => "now()",
  })
  usbrModifiedDate: Date | null;

  @Column("smallint", { name: "usbr_total_vacant", nullable: true })
  usbrTotalVacant: number | null;

  @OneToOne(
    () => BookingOrderDetail,
    (bookingOrderDetail) => bookingOrderDetail.userBreakfeast,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "usbr_borde_id", referencedColumnName: "bordeId" }])
  usbrBorde: BookingOrderDetail;
}
