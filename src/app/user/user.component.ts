import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserModel } from '../models/user-model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  data: string;
  param:string;
  users: UserModel[]=[];
  
  constructor(private _service: UserService,  private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
      this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.param = params['guid'];
      });
  }
 
  getUsers() {
   
    for (var i = 0; i < 20; i++) {
      
      this.users.push({
        "firstName":"yildiz"+i,
        "lastName":"yurd",
        "birthDay":"10.10.1987",
        "userName":"deneme",
        "mail":"gokhan1gorlen",
        "phone":"45545"
      });
    }
  }
}
