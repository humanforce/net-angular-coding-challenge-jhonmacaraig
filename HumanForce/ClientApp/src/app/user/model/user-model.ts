import { TemplateRef } from "@angular/core";
import { UserLocation } from "./user-location-model";
import { GridColumnConfig } from "../../../../Framework/component/hf-grid-component/model/grid-column-config";
import { ColumnType } from "../../../../Framework/component/hf-grid-component/model/grid-column-type";

export class User {
  id: number;
  name: string;
  location: UserLocation;
  countryID: number;


  static getGridColumns = (template: TemplateRef<any>): GridColumnConfig[] => {
    return [
      new GridColumnConfig('Action','').withColumnType(ColumnType.Template).withTemplate(template),
      new GridColumnConfig('Name', 'name').withColumnType(ColumnType.Text),
    ];
  }
}
