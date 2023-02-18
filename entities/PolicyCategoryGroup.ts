import {
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CategoryGroup } from "./CategoryGroup";
import { Policy } from "./Policy";

@Index("policy_category_group_pkey", ["pocaPoliId"], { unique: true })
@Entity("policy_category_group", { schema: "master" })
export class PolicyCategoryGroup {
  @PrimaryGeneratedColumn({ type: "integer", name: "poca_poli_id" })
  pocaPoliId: number;

  @ManyToOne(
    () => CategoryGroup,
    (categoryGroup) => categoryGroup.policyCategoryGroups
  )
  @JoinColumn([{ name: "poca_cagro_id", referencedColumnName: "cagroId" }])
  pocaCagro: CategoryGroup;

  @OneToOne(() => Policy, (policy) => policy.policyCategoryGroup)
  @JoinColumn([{ name: "poca_poli_id", referencedColumnName: "poliId" }])
  pocaPoli: Policy;
}
