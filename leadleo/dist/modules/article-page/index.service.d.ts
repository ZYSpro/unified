declare type ArticleDetails = {
    id: string;
};
export declare class ArticleService {
    details(id: string): Promise<ArticleDetails>;
}
export {};
