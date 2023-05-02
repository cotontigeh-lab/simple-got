import { IRI } from "@/types";

export const getLastUrlPart = (url:IRI) => {
  return url.split('/').at(-1) as string;
}
