import { HttpParams } from "@angular/common/http";

export const paramsApiMarvel = new HttpParams()
.set('ts', '1000')
.set('apikey', '215457b5c0188ca377d17a32e0b4ebfd')
.set('hash', 'd44f6dfb8a295d2595dd3a26761edbca');

export const urlMarvelApi = 'http://gateway.marvel.com/v1/public';
