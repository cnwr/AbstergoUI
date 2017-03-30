import { Routes, RouterModule } from '@angular/router';
import { QrComponent } from "./qr/qr.component";
import { UserComponent } from "./user/user.component";
import { LogComponent } from "./log/log.component";
import { TicketComponent } from "./ticket/ticket.component";
const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path
    { path: '', redirectTo: '/ticket', pathMatch: 'full' },
    { path: 'ticket', component: TicketComponent },
     { path: 'qr', component: QrComponent },
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES,{useHash:true});