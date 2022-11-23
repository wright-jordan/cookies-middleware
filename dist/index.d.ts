import type * as tsHTTP from "ts-http";
declare module "ts-http" {
    interface Context {
        cookies: string[];
    }
}
export declare function CookiesMiddleware(): tsHTTP.Middleware;
