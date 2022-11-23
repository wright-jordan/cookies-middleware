function use(next) {
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
export function Cookies() {
    return {
        use,
    };
}
