import { NgModule } from "@angular/core";
import { TicketTemplateComponent } from "./template/ticket-template-component";
import { TicketRoutingModule } from "./ticket.module.routing";
import { SharedModule } from "../../../Framework/shared.module";
import { TicketComponent } from "./component/ticket-component/ticket-component";


@NgModule({
  declarations: [
    TicketTemplateComponent,
    TicketComponent
  ],
  imports: [
    TicketRoutingModule,
    SharedModule
  ]
})
export class TicketModule { }
