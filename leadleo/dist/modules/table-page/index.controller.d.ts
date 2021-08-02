import { Request, Response } from 'express';
import { TableService } from './index.service';
export declare class AppController {
    private readonly tableService;
    constructor(tableService: TableService);
    tableDetails(req: Request, res: Response): Promise<void>;
    tableSearch(req: Request, res: Response): Promise<void>;
}
