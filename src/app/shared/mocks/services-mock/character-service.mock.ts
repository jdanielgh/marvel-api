import { of } from 'rxjs';

export class CharacterServiceMock {
  getCharacters = () => {return of();};
  getCharacterSearch = () => { return of();};
  setCharacterSearch = () => {};
}
