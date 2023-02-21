import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Members } from "./Members";
import { Users } from "./Users";

@Index("user_members_pkey", ["usmeId"], { unique: true })
@Entity("user_members", { schema: "users" })
export class UserMembers {
  @PrimaryGeneratedColumn({ type: "integer", name: "usme_id" })
  usmeId: number;

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

  @ManyToOne(() => Users, (users) => users.userMembers, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "usme_user_id", referencedColumnName: "userId" }])
  usmeUser: Users;
}
