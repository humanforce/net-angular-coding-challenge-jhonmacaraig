import { Injectable } from "@angular/core";
import { HFBaseService } from "../../../../Framework/service/sms-base-service";
import { User } from "../model/user-model";
import { Subject, switchMap, takeUntil } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";



@Injectable()
export class UsersService extends HFBaseService {
  static providers = [UsersService]
  users: User[] = [];
  constructor(private httpClient: HttpClient) {
    super();
    this.setupDataStreams();
    this.getTeamMembersRequestSubject.next(null);
  }

  private getTeamMembersRequestSubject = new Subject();

  private setupDataStreams = () => {
    this.getTeamMembersRequestSubject.pipe(
      takeUntil(this.unsubscribe),
      switchMap(() => {
        debugger;
        return this.httpClient.get<User[]>(`${environment.apiUrl}/user/getteammembers`)
      })
    ).subscribe(result => {
      this.users = result;
    });

  }
  private buildForm = () => {

  }

  
}
