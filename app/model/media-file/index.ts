import { Entity } from "~/model/entity";
import { ConstructorType } from "../types";
import { newPrefixedId } from "~/lib/nanoid_ids";

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

  static create(input: ConstructorType<Omit<MediaFile, "id">>) {
    return new MediaFile({
      id: newPrefixedId("media"),
      userId: input.userId,
      title: input.title,
      fileUrl: input.fileUrl,
      fileType: input.fileUrl,
      description: input.description,
    });
  }
}
