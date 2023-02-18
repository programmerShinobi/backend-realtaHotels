import {
  Column,
  Entity,
  Index,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PolicyCategoryGroup } from "./PolicyCategoryGroup";

@Index("poli_id_pk", ["poliId"], { unique: true })
@Entity("policy", { schema: "master" })
export class Policy {
  @PrimaryGeneratedColumn({ type: "integer", name: "poli_id" })
  poliId: number;

  @Column("character varying", {
    name: "poli_name",
    nullable: true,
    length: 55,
  })
  poliName: string | null;

  @Column("character varying", {
    name: "poli_description",
    nullable: true,
    length: 255,
  })
  poliDescription: string | null;

  @OneToOne(
    () => PolicyCategoryGroup,
    (policyCategoryGroup) => policyCategoryGroup.pocaPoli
  )
  policyCategoryGroup: PolicyCategoryGroup;
}
