

export class UserPublicHoliday {
  items: Item[] = [];
}

export class Item {
  summary: string;
  start: Start;
  end: End;
}

export class StartEnd {
  date: string;
}

export class Start extends StartEnd {
  
}
export class End extends StartEnd{
  
}
