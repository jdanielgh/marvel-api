export interface MarvelModel {
  code: number;
  data: Data;
}

export interface Data {
  count:    number;
  limit:    number;
  offset:   number;
  total:    number;
  results:  CharacterModel[];
}

export interface CharacterModel {
  name:         string;
  comics:       Comic;
  thumbnail:    Thumbnail;
  description:  string;
}

export interface Comic {
  available:      number;
  collectionURI:  string;
  items:          Item[];
  returned:       number;
}

export interface Item {
  name:        string;
  resourceURI: string;
}

export interface Thumbnail {
  extension:  string;
  path:       string;
}
