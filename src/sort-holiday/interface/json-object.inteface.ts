export interface IHolidayDate {
  startDate: string;
  endDate: string;
}

export interface IHoliday {
  userId: string;
  name: string;
  weekendDates: IHolidayDate[];
}

export interface IHolidaySort {
  [key: string]: IHoliday;
}
