import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { UsersService } from "../../service/users-service";
import { GridColumnConfig } from "../../../../../Framework/component/hf-grid-component/model/grid-column-config";
import { User } from "../../model/user-model";
import { UserTemplateService } from "../../service/user-template-service";
import { Router } from "@angular/router";
import { UserRouting } from "../../user.routing";


@Component({
  selector: 'users-component',
  templateUrl: './users-component.html',
  providers: [UsersService.providers]
})
export class UsersComponent implements OnInit {

  columnDefs: GridColumnConfig[];
  @ViewChild('actionTemplate', { static: true }) private actionTemplate: TemplateRef<any>;
  constructor(public router: Router, public usersService: UsersService, public userTemplateService: UserTemplateService) {

  }

  ngOnInit(): void {
    this.columnDefs = User.getGridColumns(this.actionTemplate);
  }

  onViewHolidayClick = (user: User) => {
    this.userTemplateService.selectedUser = user;
    this.router.navigate([`${UserRouting.app}/${UserRouting.user}/${UserRouting.publicholiday}`, user.location.id])
  }

  onViewTicketClick = (user: User) => {

  }



}
