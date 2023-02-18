import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { UserRoles } from "./UserRoles";

@Index("pk_role_id", ["roleId"], { unique: true })
@Entity("roles", { schema: "users" })
export class Roles {
  @PrimaryGeneratedColumn({ type: "integer", name: "role_id" })
  roleId: number;

  @Column("character varying", {
    name: "role_name",
    nullable: true,
    length: 35,
  })
  roleName: string | null;

  @OneToMany(() => UserRoles, (userRoles) => userRoles.usroRole)
  userRoles: UserRoles[];
}
