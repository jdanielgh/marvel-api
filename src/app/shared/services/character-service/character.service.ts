import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MarvelModel } from '../../models/marvel.model';
import { urlMarvelApi } from '../constant-service';

@Injectable()
export class CharacterService {

  readonly characterPath = `${urlMarvelApi}/characters`;
  characterSearch: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(private readonly http: HttpClient) { }

  getCharacters(offset: string = '0', limit: string = '10', orderBy: string = 'name', name?: string): Observable<MarvelModel> {
    let params = new HttpParams()
      .set('ts', '1000')
      .set('apikey', '215457b5c0188ca377d17a32e0b4ebfd')
      .set('hash', 'd44f6dfb8a295d2595dd3a26761edbca')
      .set('limit', limit)
      .set('offset', offset)
      .set('orderBy', orderBy);
    if (!!name) {
      console.log('', name);

      params = params.append('nameStartsWith', name);
    }
    return this.http.get<MarvelModel>(this.characterPath, {params});
  }

  getCharacterSearch(): Observable<string> {
    return this.characterSearch.asObservable();
  }

  setCharacterSearch(value: string): void {
    this.characterSearch.next(value);
  }

}
