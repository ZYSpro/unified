import { Request, Response } from 'express';
import { ApiService } from './index.service';
import { ApiReportService } from '../report-page/report.service';
export declare class AppController {
    private readonly apiService;
    private readonly apiReportService;
    constructor(apiService: ApiService, apiReportService: ApiReportService);
    quoteDetails(req: Request, res: Response): Promise<void>;
    quoteSearch(req: Request, res: Response): Promise<void>;
}
