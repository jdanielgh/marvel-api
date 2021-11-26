import { CharacterModel, Comic, Data, Item, MarvelModel } from '../../models/marvel.model';

export const itemsMock: Item[] = [
  {
    resourceURI: 'http://gateway.marvel.com/v1/public/comics/21366',
    name: 'Avengers: The Initiative (2007) #14'
  },
  {
    resourceURI: 'http://gateway.marvel.com/v1/public/comics/24571',
    name: 'Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)'
  }
];

export const comicMock: Comic = {
  available: 12,
	collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011334/comics',
  returned: 2,
  items: itemsMock
}

export const resultMock: CharacterModel[] = [{
    name: '3-D Man',
    description: '',

    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
      extension: 'jpg'
    },
    comics: comicMock
}];

export const dataMock: Data<CharacterModel> = {
  count: 10,
  limit: 10,
  offset: 0,
  total: 1559,
  results: resultMock
};


export const marvelDataMock: MarvelModel<CharacterModel> = {
	code: 200,
	data: dataMock
}
