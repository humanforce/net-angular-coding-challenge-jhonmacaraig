import { Component, OnInit } from "@angular/core";
import { GridColumnConfig } from "../../../../../Framework/component/hf-grid-component/model/grid-column-config";

import { PublicHolidayService } from "../../service/public-holiday-service";
import { UserTemplateService } from "../../service/user-template-service";
import { Router } from "@angular/router";
import { UserRouting } from "../../user.routing";
import { UserPublicHoliday } from "../../model/user-public-holiday-model";


@Component({
  selector: 'public-holiday-component',
  templateUrl: './public-holiday-component.html',
  providers: [PublicHolidayService.providers]
})
export class PublicHolidayComponent implements OnInit {

  columnDefs: GridColumnConfig[];

  constructor(public router: Router, public publicHolidayService: PublicHolidayService, public userTemplateService: UserTemplateService) {

  }

  ngOnInit(): void {
    this.columnDefs = UserPublicHoliday.getGridColumns();
  }

  onCloseClick = () => {
    this.router.navigate([`${UserRouting.app}/${UserRouting.user}`]);
  }




}
