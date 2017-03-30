import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LogComponent } from './log/log.component';
import { UserComponent } from './user/user.component';
import { QrComponent } from './qr/qr.component';
import { MenuComponent } from './menu/menu.component';
import { CONST_ROUTING } from './app.routing';
import { TicketComponent } from './ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    LogComponent,
    UserComponent,
    QrComponent,
    MenuComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CONST_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
