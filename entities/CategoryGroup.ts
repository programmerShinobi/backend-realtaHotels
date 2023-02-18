import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Facilities } from "./Facilities";
import { PolicyCategoryGroup } from "./PolicyCategoryGroup";

@Index("cagro_id_pk", ["cagroId"], { unique: true })
@Index("category_group_cagro_name_key", ["cagroName"], { unique: true })
@Entity("category_group", { schema: "master" })
export class CategoryGroup {
  @PrimaryGeneratedColumn({ type: "integer", name: "cagro_id" })
  cagroId: number;

  @Column("character varying", {
    name: "cagro_name",
    nullable: true,
    unique: true,
    length: 25,
  })
  cagroName: string | null;

  @Column("character varying", {
    name: "cagro_description",
    nullable: true,
    length: 255,
  })
  cagroDescription: string | null;

  @Column("character varying", {
    name: "cagro_type",
    nullable: true,
    length: 25,
  })
  cagroType: string | null;

  @Column("character varying", {
    name: "cagro_icon",
    nullable: true,
    length: 255,
  })
  cagroIcon: string | null;

  @Column("character varying", {
    name: "cagro_icon_url",
    nullable: true,
    length: 255,
  })
  cagroIconUrl: string | null;

  @OneToMany(() => Facilities, (facilities) => facilities.faciCagro)
  facilities: Facilities[];

  @OneToMany(
    () => PolicyCategoryGroup,
    (policyCategoryGroup) => policyCategoryGroup.pocaCagro
  )
  policyCategoryGroups: PolicyCategoryGroup[];
}
