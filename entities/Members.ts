import { Column, Entity, Index, OneToMany } from "typeorm";
import { UserMembers } from "./UserMembers";

@Index("memb_name", ["membName"], { unique: true })
@Entity("members", { schema: "master" })
export class Members {
  @Column("character varying", { primary: true, name: "memb_name", length: 15 })
  membName: string;

  @Column("character varying", {
    name: "memb_description",
    nullable: true,
    length: 100,
  })
  membDescription: string | null;

  @OneToMany(() => UserMembers, (userMembers) => userMembers.usmeMembName)
  userMembers: UserMembers[];
}
