import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Employee } from "./Employee";

@Index("employee_pay_history_pkey", ["ephiId"], { unique: true })
@Entity("employee_pay_history", { schema: "humanresource" })
export class EmployeePayHistory {
  @PrimaryGeneratedColumn({ type: "integer", name: "ephi_id" })
  ephiId: number;

  @Column("timestamp without time zone", {
    name: "ephi_rate_change_date",
    nullable: true,
    default: () => "now()",
  })
  ephiRateChangeDate: Date | null;

  @Column("money", { name: "ephi_rate_salary", nullable: true })
  ephiRateSalary: string | null;

  @Column("smallint", { name: "ephi_pay_frequence", nullable: true })
  ephiPayFrequence: number | null;

  @Column("timestamp without time zone", {
    name: "ephi_modified_date",
    nullable: true,
    default: () => "now()",
  })
  ephiModifiedDate: Date | null;

  @ManyToOne(() => Employee, (employee) => employee.employeePayHistories, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "ephi_emp_id", referencedColumnName: "empId" }])
  ephiEmp: Employee;
}
