import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { BookingOrderDetail } from "./BookingOrderDetail";

@Index("pk_borde_modified_id", ["usbrModifiedDate"], { unique: true })
@Entity("user_breakfeast", { schema: "booking" })
export class UserBreakfeast {
  @Column("timestamp without time zone", {
    primary: true,
    name: "usbr_modified_date",
    default: () => "now()",
  })
  usbrModifiedDate: Date;

  @Column("smallint", { name: "usbr_total_vacant", nullable: true })
  usbrTotalVacant: number | null;

  @ManyToOne(
    () => BookingOrderDetail,
    (bookingOrderDetail) => bookingOrderDetail.userBreakfeasts,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "usbr_borde_id", referencedColumnName: "bordeId" }])
  usbrBorde: BookingOrderDetail;
}
