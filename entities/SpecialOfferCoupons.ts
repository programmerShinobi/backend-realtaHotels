import {
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { SpecialOffers } from "./SpecialOffers";
import { BookingOrderDetail } from "./BookingOrderDetail";

@Index("pk_soco_id", ["socoId"], { unique: true })
@Entity("special_offer_coupons", { schema: "booking" })
export class SpecialOfferCoupons {
  @PrimaryGeneratedColumn({ type: "integer", name: "soco_id" })
  socoId: number;

  @ManyToOne(
    () => SpecialOffers,
    (specialOffers) => specialOffers.specialOfferCoupons,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "soco_spof_id", referencedColumnName: "spofId" }])
  socoSpof: SpecialOffers;

  @ManyToOne(
    () => BookingOrderDetail,
    (bookingOrderDetail) => bookingOrderDetail.specialOfferCoupons,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "soco_borde_id", referencedColumnName: "bordeId" }])
  socoBorde: BookingOrderDetail;
}
