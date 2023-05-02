import { IRI } from "./Globals"

export type Character = {
  "url": IRI,
  "name": string,
  "gender": "Male" | "Female",
  "culture": string,
  "born": string,
  "died": string,
  "titles": string[],
  "aliases": string[],
  "father": string,
  "mother": string,
  "spouse": string,
  "allegiances": string[],
  "books": IRI[],
  "tvSeries": string[],
  "playedBy": string[]
}