export interface TokenRO {
    token: string;
}
export interface TokenUser {
    customerId: string;
    iat?: number;
    exp?: number;
}
