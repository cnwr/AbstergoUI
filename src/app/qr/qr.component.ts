import { Component, OnInit, Directive, Renderer, ElementRef } from '@angular/core';
import { HttpHelperService } from '../services/http-helper.service';
import { QrModel } from '../models/qr-model';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewChild } from "@angular/core/src/metadata/di";
@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css'],
  providers: [HttpHelperService]
})

@Directive({
  selector: '[exploreRenderer]'
})

export class QrComponent implements OnInit {
  token: string = 'Token';
  data: string = 'Data buraya gelcek';
  guid: string = null;
  @ViewChild("label") gokhanow;
  private nativeElement: Node;
  source;


  constructor(private _service: HttpHelperService, private route: ActivatedRoute,
    private router: Router, private renderer: Renderer, private element: ElementRef) {

    this.nativeElement = element.nativeElement;
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

  getToken() {
    this._service.getToken().subscribe(data => this.getData(data.access_token));
  }

  getData(token: string) {
    this._service.getQrCode(token, this.guid)
      .subscribe(res => {
        this.source= 'data:image/png;base64,' + res.ImgContent;
      })
  }
}

