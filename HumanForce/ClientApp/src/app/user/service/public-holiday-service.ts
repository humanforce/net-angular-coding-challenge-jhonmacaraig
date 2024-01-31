import { Injectable } from "@angular/core";
import { HFBaseService } from "../../../../Framework/service/sms-base-service";
import { EMPTY, Subject, of, switchMap, take, takeUntil } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { ActivatedRoute } from "@angular/router";
import { EnumCountryString } from "../enum/user-country-string-enum";
import { EnumHFCountry } from "../../../../Framework/enums/hf-country-enum";
import { UserPublicHoliday } from "../model/user-public-holiday-model";


@Injectable()
export class PublicHolidayService extends HFBaseService {

  static providers = [PublicHolidayService];

  userPublicHoliday: UserPublicHoliday;
  constructor(private httpClient: HttpClient, private readonly activatedRoute: ActivatedRoute) {
    super();
    this.activatedRoute.paramMap.pipe(take(1)).subscribe((r: any) => {
      debugger;
      let guid = r.params['id'];
      this.setupDataStream();
      let countryID: number;
      if (guid === EnumCountryString.Australia) {
        countryID = EnumHFCountry.Australia;
      } else if (guid === EnumCountryString.Pakistan) {
        countryID = EnumHFCountry.Pakistan;
      } else {
        countryID = EnumHFCountry.Philippines
      }
      this.getCountryPublicHoliday.next(countryID);
    });
  }

  private locationID: string;
  private getCountryPublicHoliday = new Subject<number>();
  private setupDataStream = () => {
    this.getCountryPublicHoliday.pipe(
      takeUntil(this.unsubscribe),
      switchMap((id: number) => {
        return this.httpClient.get<UserPublicHoliday>(`${environment.apiUrl}/user/getpublicholiday?id=${id}`);
      })
    ).subscribe(result => {
      this.userPublicHoliday = result;
    });
  }
}

