import { NgModule } from "@angular/core";
import { UserTemplateComponent } from "./template/user-template-component";
import { SharedModule } from "../../../Framework/shared.module";

import { UserRoutingModule } from "./user.module.routing";
import { UsersComponent } from "./component/users-component/users-component";
import { PublicHolidayComponent } from "./component/public-holiday-component/public-holiday-component";



@NgModule({
  declarations: [
    UserTemplateComponent,
    UsersComponent,
    PublicHolidayComponent
  ],
  imports: [
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
