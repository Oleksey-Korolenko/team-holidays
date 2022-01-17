import { Request, Response, Router } from 'express';
import { asyncHandler } from '../middlewares';
import { IResponse } from '../query';
import QueryService from '../query/query.service';
import { IHoliday } from './interface';
import SortHolidayService from './sort-holiday.service';

export default (router: typeof Router) => {
  const routes = router();

  const sortHolidayService = new SortHolidayService();

  routes.get(
    '/',
    asyncHandler(async (req: Request, res: Response) => {
      const response = sortHolidayService.getHolidays();

      return QueryService.sendResponse<IResponse<IHoliday[]>>(
        200,
        response,
        res
      );
    })
  );

  return routes;
};
