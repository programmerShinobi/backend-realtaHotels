import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PurchaseOrderDetail } from "./PurchaseOrderDetail";
import { Vendor } from "./Vendor";
import { StockDetail } from "./StockDetail";

@Index("pohe_id_pk", ["poheId"], { unique: true })
@Index("purchase_order_header_pohe_number_key", ["poheNumber"], {
  unique: true,
})
@Entity("purchase_order_header", { schema: "purchasing" })
export class PurchaseOrderHeader {
  @PrimaryGeneratedColumn({ type: "integer", name: "pohe_id" })
  poheId: number;

  @Column("character varying", {
    name: "pohe_number",
    unique: true,
    length: 20,
  })
  poheNumber: string;

  @Column("integer", { name: "pohe_status" })
  poheStatus: number;

  @Column("date", { name: "pohe_order_date" })
  poheOrderDate: string;

  @Column("money", { name: "pohe_subtotal", nullable: true })
  poheSubtotal: string | null;

  @Column("money", { name: "pohe_tax", nullable: true })
  poheTax: string | null;

  @Column("money", { name: "pohe_total_amount", nullable: true })
  poheTotalAmount: string | null;

  @Column("money", { name: "pohe_refund", nullable: true })
  poheRefund: string | null;

  @Column("timestamp without time zone", {
    name: "pohe_arrival_date",
    nullable: true,
  })
  poheArrivalDate: Date | null;

  @Column("character varying", {
    name: "pohe_pay_type",
    nullable: true,
    length: 2,
  })
  pohePayType: string | null;

  @Column("character varying", {
    name: "pohe_emp_id",
    nullable: true,
    length: 20,
  })
  poheEmpId: string | null;

  @OneToMany(
    () => PurchaseOrderDetail,
    (purchaseOrderDetail) => purchaseOrderDetail.podePohe
  )
  purchaseOrderDetails: PurchaseOrderDetail[];

  @ManyToOne(() => Vendor, (vendor) => vendor.purchaseOrderHeaders, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([
    { name: "pohe_vendor_id", referencedColumnName: "vendorEntityId" },
  ])
  poheVendor: Vendor;

  @OneToMany(() => StockDetail, (stockDetail) => stockDetail.stodPohe)
  stockDetails: StockDetail[];
}
