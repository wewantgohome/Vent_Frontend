import { setCookie } from "nookies";
export const setToken = (
  AccessToken,
  AccessTokenExp,
  RefreshToken,
  RefreshTokenExp,
  ctx
) => {
  setCookie(ctx, "AccessToken", `Bearer ${AccessToken}`, {
    maxAge: AccessTokenExp,
    path: "/",
  }); // 3시간
  setCookie(ctx, "RefreshToken", `Bearer ${RefreshToken}`, {
    maxAge: RefreshTokenExp,
    path: "/",
  }); // 1주일
};
