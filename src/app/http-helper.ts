import { RequestOptions, Request, RequestMethod } from '@angular/http';
import { ReflectiveInjector } from '@angular/core';
import {Http}  from '@angular/http';
import 'rxjs/Rx';
import { Inject } from '@angular/core';



export default class HttpHelper {
  private _token: string;
  private _url: string;
  private _options: any;
  private _http;

static $inject = ['$q','$http', 'config'];
  constructor(url: string, isTokenRequired: boolean, options?: RequestOptions) {
    if (options)
      this._options = options;

    this._url = url;
  }

  private _get() {
    let injector = ReflectiveInjector.resolveAndCreate([Http]);
    this._http = injector.get(Http);
    return this._http.get(this._url)
      .map(c => c.json());
 
  }

  get() {
    let res: string;
    this._get().subscribe(data => res = JSON.stringify(data))
    return res;
  }

  getUrl() {
    return this._url;
  }
}