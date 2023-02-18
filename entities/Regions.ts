import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Country } from "./Country";

@Index("region_code_pk", ["regionCode"], { unique: true })
@Index("regions_region_name_key", ["regionName"], { unique: true })
@Entity("regions", { schema: "master" })
export class Regions {
  @PrimaryGeneratedColumn({ type: "integer", name: "region_code" })
  regionCode: number;

  @Column("character varying", {
    name: "region_name",
    nullable: true,
    unique: true,
    length: 35,
  })
  regionName: string | null;

  @OneToMany(() => Country, (country) => country.countryRegion)
  countries: Country[];
}
