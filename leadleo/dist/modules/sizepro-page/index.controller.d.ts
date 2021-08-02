import { Request, Response } from 'express';
import { SizeproService } from './index.service';
export declare class AppController {
    private readonly sizeproService;
    constructor(sizeproService: SizeproService);
    sizeproDetails(req: Request, res: Response): Promise<void>;
    sizeproSearch(req: Request, res: Response): Promise<void>;
}
