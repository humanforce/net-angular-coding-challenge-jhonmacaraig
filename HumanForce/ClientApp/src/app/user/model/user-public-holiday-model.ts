import { GridColumnConfig } from "../../../../Framework/component/hf-grid-component/model/grid-column-config";
import { ColumnType } from "../../../../Framework/component/hf-grid-component/model/grid-column-type";


export class UserPublicHoliday {
  items: Item[] = [];

  static getGridColumns = (): GridColumnConfig[] => {
    return [
      
      new GridColumnConfig('Name', 'summary').withColumnType(ColumnType.Text),
      new GridColumnConfig('Start', 'start.date').withColumnType(ColumnType.Date),
      new GridColumnConfig('End', 'end.date').withColumnType(ColumnType.Date),
    ];
  }
}

export class Item {
  summary: string;
  start: Start;
  end: End;
}

export class StartEnd {
  date: Date;
}

export class Start extends StartEnd {
  
}
export class End extends StartEnd{
  
}




