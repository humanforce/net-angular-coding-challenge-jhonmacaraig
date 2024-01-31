import { Injectable } from "@angular/core";
import { HFBaseService } from "../../../../Framework/service/sms-base-service";
import { User } from "../model/user-model";





@Injectable()
export class UserTemplateService extends HFBaseService {
  static providers = [UserTemplateService];

  selectedUser: User;
  constructor() {
    super();
  }
}
