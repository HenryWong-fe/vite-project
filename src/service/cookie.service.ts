import Cookie from "js-cookie";

class CookieService {
  TOKEN_NAME: string
  constructor() {
    this.TOKEN_NAME = "oa-token";
  }
  getAuthToken() {
    return Cookie.get(this.TOKEN_NAME);
  }
  setAuthToken(token) {
    Cookie.set(this.TOKEN_NAME, token, { expires: 7 });
  }
  removeAuthToken() {
    Cookie.remove(this.TOKEN_NAME);
  }
}
export default new CookieService();