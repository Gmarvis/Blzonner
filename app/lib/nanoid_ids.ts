import { customAlphabet } from "nanoid/non-secure";
const nanoid = customAlphabet("1234567890abcdefghijklmnopqrvuwxyz", 14);

const prefixes = {
  user: "usr",
};

export function newPrefixedId(prefix: keyof typeof prefixes): string {
  return `${prefixes[prefix]}_` + nanoid();
}
