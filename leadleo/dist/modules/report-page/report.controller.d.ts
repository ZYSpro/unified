import { Request, Response } from 'express';
import { ApiReportService } from './report.service';
export declare class ReportController {
    private readonly apiReportService;
    constructor(apiReportService: ApiReportService);
    handlerDetail(req: Request, res: Response): Promise<any>;
}
