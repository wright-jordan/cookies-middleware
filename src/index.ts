import type * as tsHTTP from "ts-http";

declare module "ts-http" {
  interface Context {
    cookies: string[];
  }
}

function use(next: tsHTTP.Handler): tsHTTP.Handler {
  return async function cookiesMiddleware(req, res, ctx) {
    await next(req, res, ctx);
    if (res.headersSent) {
      return;
    }
    if (ctx.cookies.length > 0) {
      res.setHeader("Set-Cookie", ctx.cookies);
    }
  };
}

export function CookiesMiddleware(): tsHTTP.Middleware {
  return {
    use,
  };
}
