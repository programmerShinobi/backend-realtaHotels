import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { OrderMenus } from "./OrderMenus";
import { RestoMenus } from "./RestoMenus";

@Index("pk_omde_id", ["omdeId"], { unique: true })
@Entity("order_menu_detail", { schema: "resto" })
export class OrderMenuDetail {
  @PrimaryGeneratedColumn({ type: "integer", name: "omde_id" })
  omdeId: number;

  @Column("money", { name: "orme_price", nullable: true })
  ormePrice: string | null;

  @Column("smallint", { name: "orme_qty", nullable: true })
  ormeQty: number | null;

  @Column("money", { name: "orme_subtotal", nullable: true })
  ormeSubtotal: string | null;

  @Column("money", { name: "orme_discount", nullable: true })
  ormeDiscount: string | null;

  @ManyToOne(() => OrderMenus, (orderMenus) => orderMenus.orderMenuDetails)
  @JoinColumn([{ name: "omde_orme_id", referencedColumnName: "ormeId" }])
  omdeOrme: OrderMenus;

  @ManyToOne(() => RestoMenus, (restoMenus) => restoMenus.orderMenuDetails, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "omde_reme_id", referencedColumnName: "remeId" }])
  omdeReme: RestoMenus;
}
