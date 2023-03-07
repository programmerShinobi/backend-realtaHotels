import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PurchaseOrderDetail } from "./PurchaseOrderDetail";
import { StockDetail } from "./StockDetail";
import { StockPhoto } from "./StockPhoto";
import { VendorProduct } from "./VendorProduct";

@Index("stock_id_pk", ["stockId"], { unique: true })
@Entity("stocks", { schema: "purchasing" })
export class Stocks {
  @PrimaryGeneratedColumn({ type: "integer", name: "stock_id" })
  stockId: number;

  @Column("character varying", { name: "stock_name", length: 255 })
  stockName: string;

  @Column("character varying", {
    name: "stock_description",
    nullable: true,
    length: 255,
  })
  stockDescription: string | null;

  @Column("integer", { name: "stock_quantity" })
  stockQuantity: number;

  @Column("integer", { name: "stock_reorder_point", nullable: true })
  stockReorderPoint: number | null;

  @Column("integer", { name: "stock_used", nullable: true })
  stockUsed: number | null;

  @Column("integer", { name: "stock_scrap", nullable: true })
  stockScrap: number | null;

  @Column("character varying", {
    name: "stock_size",
    nullable: true,
    length: 25,
  })
  stockSize: string | null;

  @Column("character varying", {
    name: "stock_color",
    nullable: true,
    length: 15,
  })
  stockColor: string | null;

  @Column("timestamp without time zone", {
    name: "stock_modified_date",
    nullable: true,
  })
  stockModifiedDate: Date | null;

  @OneToMany(
    () => PurchaseOrderDetail,
    (purchaseOrderDetail) => purchaseOrderDetail.podeStock
  )
  purchaseOrderDetails: PurchaseOrderDetail[];

  @OneToMany(() => StockDetail, (stockDetail) => stockDetail.stodStock)
  stockDetails: StockDetail[];

  @OneToMany(() => StockPhoto, (stockPhoto) => stockPhoto.sphoStock)
  stockPhotos: StockPhoto[];

  @OneToMany(() => VendorProduct, (vendorProduct) => vendorProduct.veproStock)
  vendorProducts: VendorProduct[];
}
