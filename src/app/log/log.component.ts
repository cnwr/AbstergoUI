import { Component, OnInit } from '@angular/core';
import { LogService } from './log.service';


@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css'],
  providers: [LogService]
})

export class LogComponent implements OnInit {
  data = "asdas";
  logs;

  constructor(private _logService: LogService) { }

  ngOnInit() {

  }

  getLogs() {
     this._logService.getMemberLogs().subscribe(c=>this.data=c.time);
  }
}
