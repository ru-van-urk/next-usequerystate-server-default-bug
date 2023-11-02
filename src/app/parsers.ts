import {
  parseAsArrayOf,
  parseAsInteger,
  parseAsStringEnum,
} from "next-usequerystate";

export const numberArrayParser = parseAsArrayOf(parseAsInteger, "~");

const myEnum = [
  "server",
  "client",
  "default-server",
  "default-client",
] as const;

export const enumArrayParser = parseAsArrayOf(
  parseAsStringEnum(Array.from(myEnum)),
  "~"
);
