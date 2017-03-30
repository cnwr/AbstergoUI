import { Component, OnInit } from '@angular/core';
import { HttpHelperService } from '../services/http-helper.service';
import { QrModel } from '../models/qr-model';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
  providers: [HttpHelperService],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({ transform: 'translateX(100%)', opacity: 0 }),
          animate('900ms', style({ transform: 'translateX(0)', opacity: 1 }))
        ]),
        transition(':leave', [
          style({ transform: 'translateX(0)', opacity: 1 }),
          animate('900ms', style({ transform: 'translateX(100%)', opacity: 0 }))
        ])
      ]
    )
  ]

})

export class TicketComponent implements OnInit {
  token: string = 'Token';
  qrModels: QrModel[];
  guid: string = null;
  public hasRecord: boolean = false;
  source;
  constructor(private _service: HttpHelperService, private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => {
        this.guid = params['guid'];
      });

    if (this.guid != null)
      this.getToken();
  }

  checkToken() {
    this._service.checkToken()
      .subscribe(data => this.token = data.access_token);
  }

  getData(token: string) {
    this._service.getQrInfo(token, this.guid)
      .subscribe(data => {
        if (data.length != 0) {

          this.qrModels = data
        }
      });
  }

  getToken() {
    this._service.getToken().subscribe(data => this.getData(data.access_token));
  }

  // private _populate(data: QrModel[]) {
  //   data.forEach(element => {
  //     element.Tickets.forEach(ticket => {
  //       this.data = ticket.SeatInfo;
  //     });
  //   });
  // }

  getToken2(barcode: string) {
    this._service.getToken().subscribe(data => this.getData2(data.access_token, barcode));
  }

  getData2(token: string, barcode: string) {
    console.log("navigate token : " + this.token)
    this.hasRecord = true;
    this._service.getQrCode(token, barcode)
      .subscribe(data => {
        this.source = 'data:image/png;base64,' + data.ImgContent;
      });

  }

  navigateQr(barcode: string) {
    // let extras: NavigationExtras;
    // extras = {
    //   queryParams: { 'guid': this.guid }
    // };
    // this.router.navigate(['/qr'], extras);
    console.log("Barcode : " + barcode);
    this.getToken2(barcode);
  }

  goBack(){
     this.hasRecord = false;
  }

  closeAlert() {
    this.hasRecord = false;
  }
}