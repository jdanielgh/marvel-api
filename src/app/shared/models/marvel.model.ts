export interface MarvelModel<T> {
  code: number;
  data: Data<T>;
}

export interface Data<T> {
  count:    number;
  limit:    number;
  offset:   number;
  total:    number;
  results:  T[];
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

export interface ComicModel {
  id:         number;
  title:      string;
  thumbnail: Thumbnail;
}
