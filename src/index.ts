import type * as tsHTTP from "ts-http";

declare module "ts-http" {
  interface Context {
    cookies: string[];
  }
}

export class CookiesMiddlware implements tsHTTP.Middleware {
  use(next: tsHTTP.Handler): tsHTTP.Handler {
    return async function cookiesMiddleware(req, res, ctx) {
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
  }
}
