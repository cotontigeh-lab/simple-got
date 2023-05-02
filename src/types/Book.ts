import { IRI } from "./Globals"

export type Book = {
    "url": string,
    "name": string,
    "isbn": string,
    "authors": string[],
    "numberOfPages": 694,
    "publisher": string,
    "country": string,
    "mediaType": string,
    "released": Date,
    "characters": IRI[],
    "povCharacters": IRI[]
}