import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Users } from "./Users";

@Index("user_password_pkey", ["uspaUserId"], { unique: true })
@Entity("user_password", { schema: "users" })
export class UserPassword {
  @Column("integer", { primary: true, name: "uspa_user_id" })
  uspaUserId: number;

  @Column("character varying", {
    name: "uspa_passwordhash",
    nullable: true,
    length: 128,
  })
  uspaPasswordhash: string | null;

  @Column("character varying", {
    name: "uspa_passwordsalt",
    nullable: true,
    length: 10,
  })
  uspaPasswordsalt: string | null;

  @OneToOne(() => Users, (users) => users.userPassword, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "uspa_user_id", referencedColumnName: "userId" }])
  uspaUser: Users;
}
