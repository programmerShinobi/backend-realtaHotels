import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users";

@Index("user_bonus_points_pkey", ["ubpoId"], { unique: true })
@Entity("user_bonus_points", { schema: "users" })
export class UserBonusPoints {
  @PrimaryGeneratedColumn({ type: "integer", name: "ubpo_id" })
  ubpoId: number;

  @Column("integer", { name: "ubpo_total_points", nullable: true })
  ubpoTotalPoints: number | null;

  @Column("character", { name: "ubpo_bonus_type", nullable: true, length: 1 })
  ubpoBonusType: string | null;

  @Column("timestamp without time zone", {
    name: "ubpo_create_on",
    nullable: true,
  })
  ubpoCreateOn: Date | null;

  @ManyToOne(() => Users, (users) => users.userBonusPoints, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "ubpo_user_id", referencedColumnName: "userId" }])
  ubpoUser: Users;
}
