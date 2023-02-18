import { Regions } from "./Regions";
import { Provinces } from "./Provinces";
export declare class Country {
    countryId: number;
    countryName: string | null;
    countryRegion: Regions;
    provinces: Provinces[];
}
