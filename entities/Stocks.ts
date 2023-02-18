import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { StockDetail } from "./StockDetail";
import { StockPhoto } from "./StockPhoto";

@Index("stock_id_pk", ["stockId"], { unique: true })
@Entity("stocks", { schema: "purchasing" })
export class Stocks {
  @PrimaryGeneratedColumn({ type: "integer", name: "stock_id" })
  stockId: number;

  @Column("character varying", {
    name: "stock_name",
    nullable: true,
    length: 255,
  })
  stockName: string | null;

  @Column("character varying", {
    name: "stock_description",
    nullable: true,
    length: 255,
  })
  stockDescription: string | null;

  @Column("smallint", { name: "stock_quantity", nullable: true })
  stockQuantity: number | null;

  @Column("smallint", { name: "stock_reorder_point", nullable: true })
  stockReorderPoint: number | null;

  @Column("smallint", { name: "stock_used", nullable: true })
  stockUsed: number | null;

  @Column("smallint", { name: "stock_scrap", nullable: true })
  stockScrap: number | null;

  @Column("money", { name: "stock_price", nullable: true })
  stockPrice: string | null;

  @Column("money", { name: "stock_standar_cost", nullable: true })
  stockStandarCost: string | null;

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
    default: () => "now()",
  })
  stockModifiedDate: Date | null;

  @OneToMany(() => StockDetail, (stockDetail) => stockDetail.stodStock)
  stockDetails: StockDetail[];

  @OneToMany(() => StockPhoto, (stockPhoto) => stockPhoto.sphoStock)
  stockPhotos: StockPhoto[];
}
