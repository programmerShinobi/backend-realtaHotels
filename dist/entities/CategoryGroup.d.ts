import { Facilities } from "./Facilities";
import { PolicyCategoryGroup } from "./PolicyCategoryGroup";
export declare class CategoryGroup {
    cagroId: number;
    cagroName: string | null;
    cagroDescription: string | null;
    cagroType: string | null;
    cagroIcon: string | null;
    cagroIconUrl: string | null;
    facilities: Facilities[];
    policyCategoryGroups: PolicyCategoryGroup[];
}
