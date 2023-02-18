import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Employee } from "./Employee";
import { Facilities } from "./Facilities";
import { ServiceTask } from "./ServiceTask";
import { WorkOrders } from "./WorkOrders";

@Index("work_order_detail_pkey", ["wodeId"], { unique: true })
@Entity("work_order_detail", { schema: "humanresource" })
export class WorkOrderDetail {
  @PrimaryGeneratedColumn({ type: "integer", name: "wode_id" })
  wodeId: number;

  @Column("character varying", {
    name: "wode_task_name",
    nullable: true,
    length: 255,
  })
  wodeTaskName: string | null;

  @Column("character varying", {
    name: "wode_status",
    nullable: true,
    length: 15,
  })
  wodeStatus: string | null;

  @Column("timestamp without time zone", {
    name: "wode_start_date",
    nullable: true,
  })
  wodeStartDate: Date | null;

  @Column("timestamp without time zone", {
    name: "wode_end_date",
    nullable: true,
  })
  wodeEndDate: Date | null;

  @Column("character varying", {
    name: "wode_notes",
    nullable: true,
    length: 255,
  })
  wodeNotes: string | null;

  @ManyToOne(() => Employee, (employee) => employee.workOrderDetails, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "wode_emp_id", referencedColumnName: "empId" }])
  wodeEmp: Employee;

  @ManyToOne(() => Facilities, (facilities) => facilities.workOrderDetails, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "wode_faci_id", referencedColumnName: "faciId" }])
  wodeFaci: Facilities;

  @ManyToOne(() => ServiceTask, (serviceTask) => serviceTask.workOrderDetails, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "wode_seta_id", referencedColumnName: "setaId" }])
  wodeSeta: ServiceTask;

  @ManyToOne(() => WorkOrders, (workOrders) => workOrders.workOrderDetails, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "wode_woro_id", referencedColumnName: "woroId" }])
  wodeWoro: WorkOrders;
}
