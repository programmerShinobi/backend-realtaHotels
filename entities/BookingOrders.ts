import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BookingOrderDetail } from "./BookingOrderDetail";
import { Hotels } from "./Hotels";
import { Users } from "./Users";

@Index("pk_boor_id", ["boorId"], { unique: true })
@Index("booking_orders_boor_order_number_key", ["boorOrderNumber"], {
  unique: true,
})
@Entity("booking_orders", { schema: "booking" })
export class BookingOrders {
  @PrimaryGeneratedColumn({ type: "integer", name: "boor_id" })
  boorId: number;

  @Column("character varying", {
    name: "boor_order_number",
    nullable: true,
    unique: true,
    length: 20,
  })
  boorOrderNumber: string | null;

  @Column("timestamp without time zone", {
    name: "boor_order_date",
    nullable: true,
  })
  boorOrderDate: Date | null;

  @Column("timestamp without time zone", {
    name: "boor_arrival_date",
    nullable: true,
  })
  boorArrivalDate: Date | null;

  @Column("smallint", { name: "boor_total_room", nullable: true })
  boorTotalRoom: number | null;

  @Column("smallint", { name: "boor_total_guest", nullable: true })
  boorTotalGuest: number | null;

  @Column("money", { name: "boor_discount", nullable: true })
  boorDiscount: string | null;

  @Column("money", { name: "boor_total_tax", nullable: true })
  boorTotalTax: string | null;

  @Column("money", { name: "boor_total_amount", nullable: true })
  boorTotalAmount: string | null;

  @Column("money", { name: "boor_down_payment", nullable: true })
  boorDownPayment: string | null;

  @Column("character", { name: "boor_pay_type", nullable: true, length: 2 })
  boorPayType: string | null;

  @Column("character", { name: "boor_is_paid", nullable: true, length: 2 })
  boorIsPaid: string | null;

  @Column("character varying", {
    name: "boor_type",
    nullable: true,
    length: 15,
  })
  boorType: string | null;

  @Column("character varying", {
    name: "boor_cardnumber",
    nullable: true,
    length: 25,
  })
  boorCardnumber: string | null;

  @Column("character varying", {
    name: "boor_member_type",
    nullable: true,
    length: 15,
  })
  boorMemberType: string | null;

  @Column("character varying", {
    name: "boor_status",
    nullable: true,
    length: 15,
  })
  boorStatus: string | null;

  @OneToMany(
    () => BookingOrderDetail,
    (bookingOrderDetail) => bookingOrderDetail.borderBoor
  )
  bookingOrderDetails: BookingOrderDetail[];

  @ManyToOne(() => Hotels, (hotels) => hotels.bookingOrders, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "boor_hotel_id", referencedColumnName: "hotelId" }])
  boorHotel: Hotels;

  @ManyToOne(() => Users, (users) => users.bookingOrders, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "boor_user_id", referencedColumnName: "userId" }])
  boorUser: Users;
}
