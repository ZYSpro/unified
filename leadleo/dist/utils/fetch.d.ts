/**
 * 请求核心层方法
 * @param url 核心层地址
 * @param path 接口地址
 * @param body 参数
 * @param method 方法
 * @returns
 */
export declare function fetch(url: string, path: string, body?: {}, method?: string): Promise<any>;
