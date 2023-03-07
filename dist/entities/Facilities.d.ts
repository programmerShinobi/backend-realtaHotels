import { BookingOrderDetail } from "./BookingOrderDetail";
import { CategoryGroup } from "./CategoryGroup";
import { Hotels } from "./Hotels";
import { FacilityPhotos } from "./FacilityPhotos";
import { FacilityPriceHistory } from "./FacilityPriceHistory";
import { RestoMenus } from "./RestoMenus";
import { WorkOrderDetail } from "./WorkOrderDetail";
export declare class Facilities {
    faciId: number;
    faciName: string | null;
    faciDescription: string | null;
    faciMaxNumber: number | null;
    faciMeasureUnit: string | null;
    faciRoomNumber: string | null;
    faciStartdate: Date | null;
    faciEndate: Date | null;
    faciLowPrice: string | null;
    faciHightPrice: string | null;
    faciRatePrice: string | null;
    faciDiscount: string | null;
    faciTaxRate: string | null;
    faciModifiedDate: Date | null;
    bookingOrderDetails: BookingOrderDetail[];
    faciCagro: CategoryGroup;
    faciHotel: Hotels;
    facilityPhotos: FacilityPhotos[];
    facilityPriceHistories: FacilityPriceHistory[];
    restoMenus: RestoMenus[];
    workOrderDetails: WorkOrderDetail[];
}
