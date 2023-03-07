import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Stocks } from "./Stocks";
import { Vendor } from "./Vendor";

@Index("vepro_id_pk", ["veproId"], { unique: true })
@Entity("vendor_product", { schema: "purchasing" })
export class VendorProduct {
  @PrimaryGeneratedColumn({ type: "integer", name: "vepro_id" })
  veproId: number;

  @Column("integer", { name: "vepro_qty_stocked", nullable: true })
  veproQtyStocked: number | null;

  @Column("integer", { name: "vepro_qty_remaining", nullable: true })
  veproQtyRemaining: number | null;

  @Column("money", { name: "vepro_price", nullable: true })
  veproPrice: string | null;

  @ManyToOne(() => Stocks, (stocks) => stocks.vendorProducts, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "vepro_stock_id", referencedColumnName: "stockId" }])
  veproStock: Stocks;

  @ManyToOne(() => Vendor, (vendor) => vendor.vendorProducts, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([
    { name: "vepro_vendor_id", referencedColumnName: "vendorEntityId" },
  ])
  veproVendor: Vendor;
}
