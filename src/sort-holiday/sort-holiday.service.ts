import { IResponse } from '../query';
import { IHoliday, IHolidayDate, IHolidaySort } from './interface';
import HOLIDAYS from './json';

export default class SortHolidayService {
  private _holidays;

  constructor() {
    this._holidays = HOLIDAYS;
  }

  public getHolidays = (): IResponse<IHoliday[]> => {
    const preparedHolidays: IHolidaySort = {};

    for (const holiday of this._holidays) {
      if (preparedHolidays[holiday.user._id]) {
        const preparedDates: IHolidayDate = {
          startDate: holiday.startDate,
          endDate: holiday.endDate,
        };
        preparedHolidays[holiday.user._id].weekendDates.push(preparedDates);
      } else {
        preparedHolidays[holiday.user._id] = {
          userId: holiday.user._id,
          name: holiday.user.name,
          weekendDates: [
            {
              startDate: holiday.startDate,
              endDate: holiday.endDate,
            },
          ],
        };
      }
    }

    return {
      message: 'Everything is correct!',
      data: Object.values(preparedHolidays),
    };
  };
}
