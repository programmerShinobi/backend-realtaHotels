import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BookingOrders } from "./BookingOrders";
import { Facilities } from "./Facilities";
import { HotelReviews } from "./HotelReviews";
import { Address } from "./Address";

@Index("hotel_id_pk", ["hotelId"], { unique: true })
@Entity("hotels", { schema: "hotel" })
export class Hotels {
  @PrimaryGeneratedColumn({ type: "integer", name: "hotel_id" })
  hotelId: number;

  @Column("character varying", {
    name: "hotel_name",
    nullable: true,
    length: 85,
  })
  hotelName: string | null;

  @Column("character varying", {
    name: "hotel_description",
    nullable: true,
    length: 500,
  })
  hotelDescription: string | null;

  @Column("smallint", { name: "hotel_rating_star", nullable: true })
  hotelRatingStar: number | null;

  @Column("character varying", {
    name: "hotel_phonenumber",
    nullable: true,
    length: 25,
  })
  hotelPhonenumber: string | null;

  @Column("timestamp without time zone", {
    name: "hotel_modified_date",
    nullable: true,
    default: () => "now()",
  })
  hotelModifiedDate: Date | null;

  @OneToMany(() => BookingOrders, (bookingOrders) => bookingOrders.boorHotel)
  bookingOrders: BookingOrders[];

  @OneToMany(() => Facilities, (facilities) => facilities.faciHotel)
  facilities: Facilities[];

  @OneToMany(() => HotelReviews, (hotelReviews) => hotelReviews.horeHotel)
  hotelReviews: HotelReviews[];

  @ManyToOne(() => Address, (address) => address.hotels)
  @JoinColumn([{ name: "hotel_addr_id", referencedColumnName: "addrId" }])
  hotelAddr: Address;
}
