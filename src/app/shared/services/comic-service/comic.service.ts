import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ComicModel, MarvelModel } from '../../models/marvel.model';
import { paramsApiMarvel, urlMarvelApi } from '../constant-service';

@Injectable()
export class ComicService {

  readonly comicPath = `${urlMarvelApi}/comics`;
  comic: BehaviorSubject<ComicModel> = new BehaviorSubject<ComicModel>(undefined);

  constructor(private readonly http: HttpClient) { }

  getComics(offset: string = '0', limit: string = '3'): Observable<MarvelModel<ComicModel>> {
    let params = paramsApiMarvel
      .append('offset', offset)
      .append('limit', limit);
    return this.http.get<MarvelModel<ComicModel>>(this.comicPath, {params});
  }

  getOneComic(resourceURI: string): Observable<MarvelModel<ComicModel>> {
    const params = paramsApiMarvel
    return this.http.get<MarvelModel<ComicModel>>(resourceURI, {params});
  }

  getBehaviorSubjectComics(): Observable<ComicModel> {
    return this.comic.asObservable();
  }

  setBehaviorSubjectComics(valor: ComicModel): void {
    this.comic.next(valor);
  }

}
