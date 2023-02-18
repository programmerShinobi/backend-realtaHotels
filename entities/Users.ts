import {
  Column,
  Entity,
  Index,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BookingOrders } from "./BookingOrders";
import { FacilityPriceHistory } from "./FacilityPriceHistory";
import { HotelReviews } from "./HotelReviews";
import { OrderMenus } from "./OrderMenus";
import { PaymentTransaction } from "./PaymentTransaction";
import { UserAccounts } from "./UserAccounts";
import { UserBonusPoints } from "./UserBonusPoints";
import { UserMembers } from "./UserMembers";
import { UserPassword } from "./UserPassword";
import { UserProfiles } from "./UserProfiles";
import { UserRoles } from "./UserRoles";
import { WorkOrders } from "./WorkOrders";

@Index("u_user_email", ["userEmail"], { unique: true })
@Index("pk_user_id", ["userId"], { unique: true })
@Index("u_user_phone_number", ["userPhoneNumber"], { unique: true })
@Entity("users", { schema: "users" })
export class Users {
  @PrimaryGeneratedColumn({ type: "integer", name: "user_id" })
  userId: number;

  @Column("character varying", {
    name: "user_full_name",
    nullable: true,
    length: 55,
  })
  userFullName: string | null;

  @Column("character varying", {
    name: "user_type",
    nullable: true,
    length: 15,
  })
  userType: string | null;

  @Column("character varying", {
    name: "user_company_name",
    nullable: true,
    length: 255,
  })
  userCompanyName: string | null;

  @Column("character varying", {
    name: "user_email",
    nullable: true,
    unique: true,
    length: 256,
  })
  userEmail: string | null;

  @Column("character varying", {
    name: "user_phone_number",
    nullable: true,
    unique: true,
    length: 25,
  })
  userPhoneNumber: string | null;

  @Column("integer", { name: "user_isverified", nullable: true })
  userIsverified: number | null;

  @Column("timestamp without time zone", {
    name: "user_modified_date",
    nullable: true,
    default: () => "now()",
  })
  userModifiedDate: Date | null;

  @OneToMany(() => BookingOrders, (bookingOrders) => bookingOrders.boorUser)
  bookingOrders: BookingOrders[];

  @OneToMany(
    () => FacilityPriceHistory,
    (facilityPriceHistory) => facilityPriceHistory.faphUser
  )
  facilityPriceHistories: FacilityPriceHistory[];

  @OneToMany(() => HotelReviews, (hotelReviews) => hotelReviews.horeUser)
  hotelReviews: HotelReviews[];

  @OneToMany(() => OrderMenus, (orderMenus) => orderMenus.ormeUser)
  orderMenus: OrderMenus[];

  @OneToMany(
    () => PaymentTransaction,
    (paymentTransaction) => paymentTransaction.patrUser
  )
  paymentTransactions: PaymentTransaction[];

  @OneToMany(() => UserAccounts, (userAccounts) => userAccounts.usacUser)
  userAccounts: UserAccounts[];

  @OneToMany(
    () => UserBonusPoints,
    (userBonusPoints) => userBonusPoints.ubpoUser
  )
  userBonusPoints: UserBonusPoints[];

  @OneToOne(() => UserMembers, (userMembers) => userMembers.usmeUser)
  userMembers: UserMembers;

  @OneToOne(() => UserPassword, (userPassword) => userPassword.uspaUser)
  userPassword: UserPassword;

  @OneToMany(() => UserProfiles, (userProfiles) => userProfiles.usproUser)
  userProfiles: UserProfiles[];

  @OneToOne(() => UserRoles, (userRoles) => userRoles.usroUser)
  userRoles: UserRoles;

  @OneToMany(() => WorkOrders, (workOrders) => workOrders.woroUser)
  workOrders: WorkOrders[];
}
