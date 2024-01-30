import { TemplateRef } from "@angular/core";
import { HFGridColumnPinDirection } from "../../../enums/hf-grid-column-pin-direction-enum";
import { ColumnType } from "./grid-column-type";



export class GridColumnConfig {
  title: string;
  key: string;
  columnType: ColumnType = ColumnType.Text;
  template: TemplateRef<any>
  private columnPinDirection: HFGridColumnPinDirection;
  constructor(title: string, key: string) {
    this.title= title;
    this.key = key;
  }
  withColumnType = (columnType: ColumnType) => {
    this.columnType = columnType;
    return this;
  }
  withTemplate(template: TemplateRef<any>) {
    this.template = template;
    return this;
  }

  withColumnPin(columnPinDirection: HFGridColumnPinDirection) {
    this.columnPinDirection = columnPinDirection;
    return this;
  }
  
}
