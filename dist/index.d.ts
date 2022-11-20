import type * as tsHTTP from "ts-http";
declare module "ts-http" {
    interface Context {
        cookies: string[];
    }
}
export declare class CookiesMiddleware implements tsHTTP.Middleware {
    use(next: tsHTTP.Handler): tsHTTP.Handler;
}
