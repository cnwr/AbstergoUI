import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { TokenModel } from '../models/token-model';
import { QrModel } from '../models/qr-model';
import { QrCodeModel } from '../models/qr-code-model';
import 'rxjs/Rx';

@Injectable()
export class HttpHelperService {
  private _token: string = null;
  private _urlToken: string = 'http://nirvana-webapi-test.azurewebsites.net/api/v1.0/Token';
  private _qrUrl: string = 'http://nirvana-webapi-test.azurewebsites.net/api/v1.0/POZ/Web/Ticketing/GetQrInfo?guid=';
  private _qrCodeUrl: string = 'http://nirvana-webapi-test.azurewebsites.net/api/v1.0/POZ/Web/Ticketing/GetQrCode?guid='

  constructor(private _http: Http) {
    this._getToken().subscribe(
      data => this._token = data.access_token
    );
  }

  getQrInfo(token: string, guid: string): Observable<QrModel[]> {

    console.log('getqrInfo token : ' + token);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'bearer ' + token);

    return this._http.get(this._qrUrl + guid, { headers: headers })
      .map(res => res.json());
  }

  getQrCode(token: string, guid: string):Observable<QrCodeModel> {

    console.log('getqrInfo token : ' + token);
    var headers = new Headers();
    headers.append('Authorization', 'bearer ' + token);

    return this._http.get(this._qrCodeUrl + guid, { headers: headers })
      .map(res => res.json());
  }

  private _getToken(): Observable<TokenModel> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    var data = JSON.stringify({
      grant_type: "password",
      UserName: "nirvana",
      Password: "nirvana",
      ApiKey: "8a542bed-131f-434b-b78b-bb3f11120dfb",
      FirmCode: "POZ",
      ChannelCode: "web",
    });

    return this._http.post(this._urlToken, data, { headers: headers })
      .map(res => res.json())
  }

  setToken() {
    this._getToken().subscribe(
      data => this._token = data.access_token
    );
  }

  getToken(): Observable<TokenModel> {
    return this._getToken();
  }

  checkToken(): Observable<TokenModel> {
    console.log('checkToken token : ' + this._token);
    return this._getToken();
  }

  private _checkToken(): boolean {
    if (this._token == null)
      return false;
    return true;
  }
}
