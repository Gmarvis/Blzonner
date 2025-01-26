import { Entity } from "~/model/entity";
import { ConstructorType } from "../types";

export enum FileType {
  VIDEO = "video",
  AUDIO = "audio",
}

export class MediaFile implements Entity {
  readonly id: string;

  readonly userId: string;
  title: string;
  fileUrl: FileType;
  fileType: string;
  description?: string;

  constructor(input: ConstructorType<MediaFile>) {
    this.id = input.id;
    this.userId = input.userId;
    this.title = input.title;
    this.fileUrl = input.fileUrl;
    this.fileType = input.fileType;
    this.description = input.description;
  }
}

