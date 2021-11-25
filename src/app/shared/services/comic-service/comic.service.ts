import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { paramsApiMarvel, urlMarvelApi } from '../constant-service';

@Injectable()
export class ComicService {

  readonly comicPath = `${urlMarvelApi}/comics`;

  constructor(private readonly http: HttpClient) { }

  getAllComics(): Observable<any> {
    const params = paramsApiMarvel;
    return this.http.get<any>(this.comicPath, {params});
  }

}
