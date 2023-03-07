import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PurchaseOrderHeader } from "./PurchaseOrderHeader";
import { Stocks } from "./Stocks";

@Index("pode_id_pk", ["podeId"], { unique: true })
@Entity("purchase_order_detail", { schema: "purchasing" })
export class PurchaseOrderDetail {
  @PrimaryGeneratedColumn({ type: "integer", name: "pode_id" })
  podeId: number;

  @Column("integer", { name: "pode_order_qty" })
  podeOrderQty: number;

  @Column("money", { name: "pode_price" })
  podePrice: string;

  @Column("money", { name: "pode_line_total" })
  podeLineTotal: string;

  @Column("integer", { name: "pode_received_qty", nullable: true })
  podeReceivedQty: number | null;

  @Column("integer", { name: "pode_rejected_qty", nullable: true })
  podeRejectedQty: number | null;

  @Column("integer", { name: "pode_stocked_qty", nullable: true })
  podeStockedQty: number | null;

  @Column("timestamp without time zone", {
    name: "pode_modified_date",
    nullable: true,
  })
  podeModifiedDate: Date | null;

  @ManyToOne(
    () => PurchaseOrderHeader,
    (purchaseOrderHeader) => purchaseOrderHeader.purchaseOrderDetails,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "pode_pohe_id", referencedColumnName: "poheId" }])
  podePohe: PurchaseOrderHeader;

  @ManyToOne(() => Stocks, (stocks) => stocks.purchaseOrderDetails, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "pode_stock_id", referencedColumnName: "stockId" }])
  podeStock: Stocks;
}
