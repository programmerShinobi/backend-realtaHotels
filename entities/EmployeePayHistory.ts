import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Employee } from "./Employee";

@Index("employee_pay_history_pkey", ["ephiRateChangeDate"], { unique: true })
@Entity("employee_pay_history", { schema: "humanresource" })
export class EmployeePayHistory {
  @Column("timestamp without time zone", {
    primary: true,
    name: "ephi_rate_change_date",
    default: () => "now()",
  })
  ephiRateChangeDate: Date;

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
