import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TicketRouting } from "./ticket.routing";
import { TicketComponent } from "./component/ticket-component/ticket-component";
import { TicketTemplateComponent } from "./template/ticket-template-component";


const routes: Routes = [
  {
    path: TicketRouting.ticket,
    component: TicketTemplateComponent,
    children: [
      {
        path: TicketRouting.tickets,
        component: TicketComponent, data: { title: 'Manage' }
      },
      {
        path: '', redirectTo: TicketRouting.tickets, pathMatch: 'full'
      }
    ]
  }
]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule { }

