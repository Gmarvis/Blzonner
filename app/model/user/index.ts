import { newPrefixedId } from "~/lib/nanoid_ids";
import type { Entity } from "~/model/entity";
import { ConstructorType } from "~/model/types";

export class User implements Entity {
  readonly id: string;
  
  firstName: string;
  lastName: string;
  email: string;
  positionDescription?: string;
  primaryContactEmail?: string;
  primaryContactPhone?: string;

  constructor(input: ConstructorType<User>) {
    this.id = input.id;
    this.firstName = input.firstName;
    this.lastName = input.lastName;
    this.email = input.email;
    this.positionDescription;
    this.primaryContactEmail;
    this.primaryContactPhone;
  }

  static create(input: ConstructorType<Omit<User, "id">>) {
    return new User({
      id: newPrefixedId("user"),
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
      positionDescription: input.positionDescription,
      primaryContactEmail: input.primaryContactEmail,
      primaryContactPhone: input.primaryContactPhone,
    });
  }
}
