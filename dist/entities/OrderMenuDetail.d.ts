import { OrderMenus } from "./OrderMenus";
import { RestoMenus } from "./RestoMenus";
export declare class OrderMenuDetail {
    omdeId: number;
    ormePrice: string | null;
    ormeQty: number | null;
    ormeSubtotal: string | null;
    ormeDiscount: string | null;
    omdeOrme: OrderMenus;
    omdeReme: RestoMenus;
}
