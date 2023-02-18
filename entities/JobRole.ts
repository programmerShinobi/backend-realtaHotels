import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Employee } from "./Employee";

@Index("pk_joro_id", ["joroId"], { unique: true })
@Index("job_role_joro_name_key", ["joroName"], { unique: true })
@Entity("job_role", { schema: "humanresource" })
export class JobRole {
  @PrimaryGeneratedColumn({ type: "integer", name: "joro_id" })
  joroId: number;

  @Column("character varying", {
    name: "joro_name",
    nullable: true,
    unique: true,
    length: 55,
  })
  joroName: string | null;

  @Column("timestamp without time zone", {
    name: "joro_modified_date",
    nullable: true,
    default: () => "now()",
  })
  joroModifiedDate: Date | null;

  @OneToMany(() => Employee, (employee) => employee.empJoro)
  employees: Employee[];
}
