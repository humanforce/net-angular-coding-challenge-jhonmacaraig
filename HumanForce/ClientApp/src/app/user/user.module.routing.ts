import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserRouting } from "./user.routing";
import { UserTemplateComponent } from "./template/user-template-component";
import { UsersComponent } from "./component/users-component/users-component";
import { PublicHolidayComponent } from "./component/public-holiday-component/public-holiday-component";


const routes: Routes = [
  {
    path: UserRouting.user,
    component: UserTemplateComponent,
    children: [
      {
        path: UserRouting.users,
        component: UsersComponent, data: { title: 'Manage' }
      },
      {
        path: '', redirectTo: UserRouting.users, pathMatch: 'full'
      },
      {
        path: UserRouting.publicholiday + '/:id', component: PublicHolidayComponent, data: { title: 'Manage' }
      },
    ]
  }
]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

