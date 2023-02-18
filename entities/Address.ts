import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Provinces } from "./Provinces";
import { Hotels } from "./Hotels";
import { UserProfiles } from "./UserProfiles";

@Index("addr_id", ["addrId"], { unique: true })
@Entity("address", { schema: "master" })
export class Address {
  @PrimaryGeneratedColumn({ type: "integer", name: "addr_id" })
  addrId: number;

  @Column("character varying", {
    name: "addr_line1",
    nullable: true,
    length: 225,
  })
  addrLine1: string | null;

  @Column("character varying", {
    name: "addr_line2",
    nullable: true,
    length: 225,
  })
  addrLine2: string | null;

  @Column("character varying", {
    name: "addr_postal_code",
    nullable: true,
    length: 5,
  })
  addrPostalCode: string | null;

  @Column("json", { name: "addr_spatial_location", nullable: true })
  addrSpatialLocation: object | null;

  @ManyToOne(() => Provinces, (provinces) => provinces.addresses)
  @JoinColumn([{ name: "addr_prov_id", referencedColumnName: "provId" }])
  addrProv: Provinces;

  @OneToMany(() => Hotels, (hotels) => hotels.hotelAddr)
  hotels: Hotels[];

  @OneToMany(() => UserProfiles, (userProfiles) => userProfiles.usproAddr)
  userProfiles: UserProfiles[];
}
