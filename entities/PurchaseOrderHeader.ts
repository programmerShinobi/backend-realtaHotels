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
import { Employee } from "./Employee";
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
    nullable: true,
    unique: true,
    length: 20,
  })
  poheNumber: string | null;

  @Column("smallint", { name: "pohe_status", nullable: true })
  poheStatus: number | null;

  @Column("timestamp without time zone", {
    name: "pohe_order_date",
    nullable: true,
  })
  poheOrderDate: Date | null;

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
    name: "pohe_pay_tipe",
    nullable: true,
    length: 2,
  })
  pohePayTipe: string | null;

  @OneToMany(
    () => PurchaseOrderDetail,
    (purchaseOrderDetail) => purchaseOrderDetail.podePohe
  )
  purchaseOrderDetails: PurchaseOrderDetail[];

  @ManyToOne(() => Employee, (employee) => employee.purchaseOrderHeaders)
  @JoinColumn([{ name: "pohe_emp_id", referencedColumnName: "empId" }])
  poheEmp: Employee;

  @ManyToOne(() => Vendor, (vendor) => vendor.purchaseOrderHeaders)
  @JoinColumn([{ name: "pohe_vendor_id", referencedColumnName: "vendorId" }])
  poheVendor: Vendor;

  @OneToMany(() => StockDetail, (stockDetail) => stockDetail.stodPohe)
  stockDetails: StockDetail[];
}
