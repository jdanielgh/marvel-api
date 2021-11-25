import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { paramsApiMarvel, urlMarvelApi } from '../constant-service';

@Injectable()
export class CharacterService {

  readonly characterPath = `${urlMarvelApi}/characters`;

  constructor(private readonly http: HttpClient) { }

  getAllCharacters(): Observable<any> {
    const params = paramsApiMarvel;
    return this.http.get<any>(this.characterPath, {params});
  }

}
