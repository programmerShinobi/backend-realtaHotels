import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PurchaseOrderHeader } from "./PurchaseOrderHeader";

@Index("pode_id_pk", ["podeId"], { unique: true })
@Entity("purchase_order_detail", { schema: "purchasing" })
export class PurchaseOrderDetail {
  @PrimaryGeneratedColumn({ type: "integer", name: "pode_id" })
  podeId: number;

  @Column("smallint", { name: "pode_order_qty", nullable: true })
  podeOrderQty: number | null;

  @Column("money", { name: "pode_price", nullable: true })
  podePrice: string | null;

  @Column("money", { name: "pode_line_total", nullable: true })
  podeLineTotal: string | null;

  @Column("numeric", { name: "pode_received_qty", nullable: true })
  podeReceivedQty: string | null;

  @Column("numeric", { name: "pode_rejected_qty", nullable: true })
  podeRejectedQty: string | null;

  @Column("numeric", { name: "pode_stocked_qty", nullable: true })
  podeStockedQty: string | null;

  @Column("timestamp without time zone", {
    name: "pode_modified_date",
    nullable: true,
    default: () => "now()",
  })
  podeModifiedDate: Date | null;

  @ManyToOne(
    () => PurchaseOrderHeader,
    (purchaseOrderHeader) => purchaseOrderHeader.purchaseOrderDetails,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "pode_pohe_id", referencedColumnName: "poheId" }])
  podePohe: PurchaseOrderHeader;
}
