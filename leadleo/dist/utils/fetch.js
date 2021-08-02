"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetch = void 0;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const rq = require('request-promise');
/**
 * 请求核心层方法
 * @param url 核心层地址
 * @param path 接口地址
 * @param body 参数
 * @param method 方法
 * @returns
 */
function fetch(url, path, body = {}, method = 'GET') {
    const headers = {
        Authorization: 'Bearer ',
        'request-platform': 'MOBILE'
    };
    const data = method === 'GET' ? { qs: body } : { body };
    const params = {
        method,
        uri: url + path,
        headers: headers,
        json: true,
        timeout: 200000,
        ...data
    };
    return new Promise((resolve, reject) => {
        rq(params)
            .then(res => {
            if (res.errCode === 0) {
                resolve(res.data);
            }
            else {
                reject(res);
            }
        })
            .catch(err => {
            reject(err);
        });
    });
}
exports.fetch = fetch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvZmV0Y2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOERBQThEO0FBQzlELE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRXJDOzs7Ozs7O0dBT0c7QUFDSCxTQUFnQixLQUFLLENBQUMsR0FBVyxFQUFFLElBQVksRUFBRSxJQUFJLEdBQUcsRUFBRSxFQUFFLE1BQU0sR0FBRyxLQUFLO0lBQ3hFLE1BQU0sT0FBTyxHQUFHO1FBQ2QsYUFBYSxFQUFFLFNBQVM7UUFDeEIsa0JBQWtCLEVBQUUsUUFBUTtLQUM3QixDQUFBO0lBQ0QsTUFBTSxJQUFJLEdBQUcsTUFBTSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUE7SUFDdkQsTUFBTSxNQUFNLEdBQUc7UUFDYixNQUFNO1FBQ04sR0FBRyxFQUFFLEdBQUcsR0FBRyxJQUFJO1FBQ2YsT0FBTyxFQUFFLE9BQU87UUFDaEIsSUFBSSxFQUFFLElBQUk7UUFDVixPQUFPLEVBQUUsTUFBTTtRQUNmLEdBQUcsSUFBSTtLQUNSLENBQUE7SUFDRCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQ3JDLEVBQUUsQ0FBQyxNQUFNLENBQUM7YUFDUCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDVixJQUFJLEdBQUcsQ0FBQyxPQUFPLEtBQUssQ0FBQyxFQUFFO2dCQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO2FBQ2xCO2lCQUFNO2dCQUNMLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTthQUNaO1FBQ0gsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ1gsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2IsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUM7QUEzQkQsc0JBMkJDIn0=