import { Component } from "@angular/core";
import { UserTemplateService } from "../service/user-template-service";

@Component({
  selector: 'user-template-component',
  templateUrl: './user-template-component.html',
  providers: [UserTemplateService]
  })
export class UserTemplateComponent {
  constructor() {


  }
}
