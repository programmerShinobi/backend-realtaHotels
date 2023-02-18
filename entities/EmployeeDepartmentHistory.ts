import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Department } from "./Department";
import { Employee } from "./Employee";
import { Shift } from "./Shift";

@Index("pk_edhi_id", ["edhiId"], { unique: true })
@Entity("employee_department_history", { schema: "humanresource" })
export class EmployeeDepartmentHistory {
  @PrimaryGeneratedColumn({ type: "integer", name: "edhi_id" })
  edhiId: number;

  @Column("timestamp without time zone", {
    name: "edhi_start_date",
    nullable: true,
  })
  edhiStartDate: Date | null;

  @Column("timestamp without time zone", {
    name: "edhi_end_date",
    nullable: true,
  })
  edhiEndDate: Date | null;

  @Column("timestamp without time zone", {
    name: "edhi_modified_date",
    nullable: true,
    default: () => "now()",
  })
  edhiModifiedDate: Date | null;

  @ManyToOne(
    () => Department,
    (department) => department.employeeDepartmentHistories,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "edhi_dept_id", referencedColumnName: "deptId" }])
  edhiDept: Department;

  @ManyToOne(
    () => Employee,
    (employee) => employee.employeeDepartmentHistories,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "edhi_emp_id", referencedColumnName: "empId" }])
  edhiEmp: Employee;

  @ManyToOne(() => Shift, (shift) => shift.employeeDepartmentHistories, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "edhi_shift_id", referencedColumnName: "shiftId" }])
  edhiShift: Shift;
}
