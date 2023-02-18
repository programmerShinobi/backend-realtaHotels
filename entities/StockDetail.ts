import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Facilities } from "./Facilities";
import { PurchaseOrderHeader } from "./PurchaseOrderHeader";
import { Stocks } from "./Stocks";

@Index("stock_detail_stod_barcode_number_key", ["stodBarcodeNumber"], {
  unique: true,
})
@Index("stod_id_pk", ["stodId"], { unique: true })
@Entity("stock_detail", { schema: "purchasing" })
export class StockDetail {
  @PrimaryGeneratedColumn({ type: "integer", name: "stod_id" })
  stodId: number;

  @Column("character varying", {
    name: "stod_barcode_number",
    nullable: true,
    unique: true,
    length: 225,
  })
  stodBarcodeNumber: string | null;

  @Column("character varying", {
    name: "stod_status",
    nullable: true,
    length: 2,
  })
  stodStatus: string | null;

  @Column("character varying", {
    name: "stod_notes",
    nullable: true,
    length: 1024,
  })
  stodNotes: string | null;

  @ManyToOne(() => Facilities, (facilities) => facilities.stockDetails, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "stod_faci_id", referencedColumnName: "faciId" }])
  stodFaci: Facilities;

  @ManyToOne(
    () => PurchaseOrderHeader,
    (purchaseOrderHeader) => purchaseOrderHeader.stockDetails,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "stod_pohe_id", referencedColumnName: "poheId" }])
  stodPohe: PurchaseOrderHeader;

  @ManyToOne(() => Stocks, (stocks) => stocks.stockDetails, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "stod_stock_id", referencedColumnName: "stockId" }])
  stodStock: Stocks;
}
