import { OrderMenuDetail } from "./OrderMenuDetail";
import { RestoMenuPhotos } from "./RestoMenuPhotos";
import { Facilities } from "./Facilities";
export declare class RestoMenus {
    remeId: number;
    remeName: string | null;
    remeDescription: string | null;
    remePrice: string | null;
    remeStatus: string | null;
    remeModifiedDate: Date | null;
    orderMenuDetails: OrderMenuDetail[];
    restoMenuPhotos: RestoMenuPhotos[];
    remeFaci: Facilities;
}
