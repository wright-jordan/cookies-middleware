export const useCookies = function useCookies(next) {
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
