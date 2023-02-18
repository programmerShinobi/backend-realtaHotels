import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Facilities } from "./Facilities";

@Index("facility_photos_pk", ["faphoId"], { unique: true })
@Entity("facility_photos", { schema: "hotel" })
export class FacilityPhotos {
  @PrimaryGeneratedColumn({ type: "integer", name: "fapho_id" })
  faphoId: number;

  @Column("character varying", {
    name: "fapho_thumbnail_filename",
    nullable: true,
    length: 50,
  })
  faphoThumbnailFilename: string | null;

  @Column("character varying", {
    name: "fapho_photo_filename",
    nullable: true,
    length: 50,
  })
  faphoPhotoFilename: string | null;

  @Column("bit", { name: "fapho_primary", nullable: true })
  faphoPrimary: string | null;

  @Column("character varying", {
    name: "fapho_url",
    nullable: true,
    length: 255,
  })
  faphoUrl: string | null;

  @Column("timestamp without time zone", {
    name: "fapho_modifield_date",
    nullable: true,
  })
  faphoModifieldDate: Date | null;

  @ManyToOne(() => Facilities, (facilities) => facilities.facilityPhotos)
  @JoinColumn([{ name: "fapho_faci_id", referencedColumnName: "faciId" }])
  faphoFaci: Facilities;
}
