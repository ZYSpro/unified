import { Request, Response } from 'express';
import { ArticleService } from './index.service';
export declare class AppController {
    private readonly articleService;
    constructor(articleService: ArticleService);
    articleDetails(req: Request, res: Response): Promise<void>;
    articleSearch(req: Request, res: Response): Promise<void>;
}
