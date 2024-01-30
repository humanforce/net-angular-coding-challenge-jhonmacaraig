import { Component } from "@angular/core";
import { GridColumnConfig } from "../../../../../Framework/component/hf-grid-component/model/grid-column-config";

import { PublicHolidayService } from "../../service/public-holiday-service";
import { UserTemplateService } from "../../service/user-template-service";
import { Router } from "@angular/router";
import { UserRouting } from "../../user.routing";


@Component({
  selector: 'public-holiday-component',
  templateUrl: './public-holiday-component.html',
  providers: [PublicHolidayService.providers]
})
export class PublicHolidayComponent {

  columnDefs: GridColumnConfig[];

  constructor(public router: Router, public publicHolidayService: PublicHolidayService, public userTemplateService: UserTemplateService) {

  }

  onCloseClick = () => {
    this.router.navigate([`${UserRouting.app}/${UserRouting.user}`]);
  }




}
