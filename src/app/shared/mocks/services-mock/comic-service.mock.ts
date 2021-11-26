import { of } from "rxjs"

export class ComicServiceMock {
  getComics = () => {return of()};
  getOneComic = () => {return of()};
  getBehaviorSubjectComics = () => {return of()};
  setBehaviorSubjectComics = () => {};
}
