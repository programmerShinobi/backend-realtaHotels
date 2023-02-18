import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { WorkOrderDetail } from "./WorkOrderDetail";
import { Users } from "./Users";

@Index("work_orders_pkey", ["woroId"], { unique: true })
@Entity("work_orders", { schema: "humanresource" })
export class WorkOrders {
  @PrimaryGeneratedColumn({ type: "integer", name: "woro_id" })
  woroId: number;

  @Column("timestamp without time zone", {
    name: "woro_start_date",
    nullable: true,
  })
  woroStartDate: Date | null;

  @Column("character varying", {
    name: "woro_status",
    nullable: true,
    length: 15,
  })
  woroStatus: string | null;

  @OneToMany(
    () => WorkOrderDetail,
    (workOrderDetail) => workOrderDetail.wodeWoro
  )
  workOrderDetails: WorkOrderDetail[];

  @ManyToOne(() => Users, (users) => users.workOrders, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "woro_user_id", referencedColumnName: "userId" }])
  woroUser: Users;
}
