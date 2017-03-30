import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { UserModel } from '../models/user-model';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class UserService {

  constructor() { }

  getUsers(): UserModel[] {
    let list: UserModel[];
    for (var i = 0; i < 20; i++) {
      let model: UserModel;
      model.firstName = "Yildiz" + i,
        model.lastName = "Yurd" + i,
        model.birthDay = "24.10.1991",
        model.phone = "54545",
        model.mail = "gokhan1gorlen@gmail.com"

      list.push(model);
    }

    return list;
  }
}
