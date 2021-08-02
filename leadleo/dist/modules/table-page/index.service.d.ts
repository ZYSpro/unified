declare type TableDetails = {
    id: string;
};
export declare class TableService {
    details(id: string): Promise<TableDetails>;
}
export {};
