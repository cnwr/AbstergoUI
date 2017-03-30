import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { TimeModel } from '../models/time-model';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class LogService {
  constructor(public http: Http) { }

  getMemberLogs(): Observable<TimeModel> {
    return this.http.get('http://date.jsontest.com').map(res => res.json());
  }
}
