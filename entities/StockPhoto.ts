import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Stocks } from "./Stocks";

@Index("spho_id_pk", ["sphoId"], { unique: true })
@Entity("stock_photo", { schema: "purchasing" })
export class StockPhoto {
  @PrimaryGeneratedColumn({ type: "integer", name: "spho_id" })
  sphoId: number;

  @Column("character varying", {
    name: "spho_thumbnail_filename",
    nullable: true,
    length: 50,
  })
  sphoThumbnailFilename: string | null;

  @Column("character varying", {
    name: "spho_photo_filename",
    nullable: true,
    length: 50,
  })
  sphoPhotoFilename: string | null;

  @Column("integer", { name: "spho_primary", nullable: true })
  sphoPrimary: number | null;

  @Column("character varying", {
    name: "spho_url",
    nullable: true,
    length: 255,
  })
  sphoUrl: string | null;

  @ManyToOne(() => Stocks, (stocks) => stocks.stockPhotos, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "spho_stock_id", referencedColumnName: "stockId" }])
  sphoStock: Stocks;
}
