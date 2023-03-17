import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PurchaseOrderHeader } from "./PurchaseOrderHeader";
import { VendorProduct } from "./VendorProduct";

@Index("vendor_entity_id_pk", ["vendorEntityId"], { unique: true })
@Entity("vendor", { schema: "purchasing" })
export class Vendor {
  @PrimaryGeneratedColumn({ type: "integer", name: "vendor_entity_id" })
  vendorEntityId: number;

  @Column("character varying", {
    name: "vendor_name",
    nullable: true,
    length: 55,
  })
  vendorName: string | null;

  @Column("bit", { name: "vendor_active", nullable: true })
  vendorActive: string | null;

  @Column("bit", { name: "vendor_priority", nullable: true })
  vendorPriority: string | null;

  @Column("timestamp without time zone", {
    name: "vendor_register_date",
    nullable: true,
  })
  vendorRegisterDate: Date | null;

  @Column("character varying", {
    name: "vendor_weburl",
    nullable: true,
    length: 1024,
  })
  vendorWeburl: string | null;

  @Column("timestamp without time zone", {
    name: "vendor_modified_date",
    nullable: true,
  })
  vendorModifiedDate: Date | null;

  @OneToMany(
    () => PurchaseOrderHeader,
    (purchaseOrderHeader) => purchaseOrderHeader.poheVendor
  )
  purchaseOrderHeaders: PurchaseOrderHeader[];

  @OneToMany(() => VendorProduct, (vendorProduct) => vendorProduct.veproVendor)
  vendorProducts: VendorProduct[];
}
