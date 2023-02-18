import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PurchaseOrderHeader } from "./PurchaseOrderHeader";

@Index("vendor_id_pk", ["vendorId"], { unique: true })
@Entity("vendor", { schema: "purchasing" })
export class Vendor {
  @PrimaryGeneratedColumn({ type: "integer", name: "vendor_id" })
  vendorId: number;

  @Column("character varying", {
    name: "vendor_name",
    nullable: true,
    length: 55,
  })
  vendorName: string | null;

  @Column("integer", { name: "vendor_active", nullable: true })
  vendorActive: number | null;

  @Column("integer", { name: "vendor_priority", nullable: true })
  vendorPriority: number | null;

  @Column("timestamp without time zone", {
    name: "vendor_register_date",
    nullable: true,
  })
  vendorRegisterDate: Date | null;

  @Column("character varying", {
    name: "vendor_weburi",
    nullable: true,
    length: 1024,
  })
  vendorWeburi: string | null;

  @Column("timestamp without time zone", {
    name: "vendor_modified_date",
    nullable: true,
    default: () => "now()",
  })
  vendorModifiedDate: Date | null;

  @OneToMany(
    () => PurchaseOrderHeader,
    (purchaseOrderHeader) => purchaseOrderHeader.poheVendor
  )
  purchaseOrderHeaders: PurchaseOrderHeader[];
}
