import type * as tsHTTP from "ts-http";

declare module "ts-http" {
  interface Context {
    cookies: string[];
  }
}

export const useCookies: tsHTTP.Middleware = function useCookies(next) {
  return async function cookies(req, res, ctx) {
    await next(req, res, ctx);
    if (res.headersSent) {
      return;
    }
    if (ctx.cookies.length > 0) {
      if (ctx.cookies.length > 0) {
        res.setHeader("Set-Cookie", ctx.cookies);
      }
    }
  };
};
