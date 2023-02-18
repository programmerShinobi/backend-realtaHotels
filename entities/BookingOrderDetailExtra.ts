import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PriceItems } from "./PriceItems";
import { BookingOrderDetail } from "./BookingOrderDetail";

@Index("pk_boex_id", ["boexId"], { unique: true })
@Entity("booking_order_detail_extra", { schema: "booking" })
export class BookingOrderDetailExtra {
  @PrimaryGeneratedColumn({ type: "integer", name: "boex_id" })
  boexId: number;

  @Column("money", { name: "boex_price", nullable: true })
  boexPrice: string | null;

  @Column("smallint", { name: "boex_qty", nullable: true })
  boexQty: number | null;

  @Column("money", { name: "boex_subtotal", nullable: true })
  boexSubtotal: string | null;

  @Column("character varying", {
    name: "boex_measure_unit",
    nullable: true,
    length: 50,
  })
  boexMeasureUnit: string | null;

  @ManyToOne(
    () => PriceItems,
    (priceItems) => priceItems.bookingOrderDetailExtras,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "boex_prit_id", referencedColumnName: "pritId" }])
  boexPrit: PriceItems;

  @ManyToOne(
    () => BookingOrderDetail,
    (bookingOrderDetail) => bookingOrderDetail.bookingOrderDetailExtras,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "boex_borde_id", referencedColumnName: "bordeId" }])
  boexBorde: BookingOrderDetail;
}
