import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from "typeorm";
import { Members } from "./Members";
import { Users } from "./Users";

@Index("user_members_pkey", ["usmeUserId"], { unique: true })
@Entity("user_members", { schema: "users" })
export class UserMembers {
  @Column("integer", { primary: true, name: "usme_user_id" })
  usmeUserId: number;

  @Column("timestamp without time zone", {
    name: "usme_promote_date",
    nullable: true,
  })
  usmePromoteDate: Date | null;

  @Column("integer", { name: "usme_points", nullable: true })
  usmePoints: number | null;

  @Column("character varying", {
    name: "usme_type",
    nullable: true,
    length: 15,
  })
  usmeType: string | null;

  @ManyToOne(() => Members, (members) => members.userMembers, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "usme_memb_name", referencedColumnName: "membName" }])
  usmeMembName: Members;

  @OneToOne(() => Users, (users) => users.userMembers, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "usme_user_id", referencedColumnName: "userId" }])
  usmeUser: Users;
}
