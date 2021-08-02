declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    /**
     * 当使用@UseGuards(AuthGuard('jwt'))去校验身份时, 需要内部提供一个validate方法用于校验
     */
    validate(payload: any): Promise<{
        customerId: any;
    }>;
}
export {};
