import type * as tsHTTP from "ts-http";
declare module "ts-http" {
    interface Context {
        cookies: string[];
    }
}
declare function use(next: tsHTTP.Handler): tsHTTP.Handler;
export declare function Cookies(): {
    use: typeof use;
};
export {};
