
import CookieService from '@/service/cookie.service'
export default (config) => {
  /**
   * 使用原始传输配置
   */
  if (config.origin) {
    return config;
  }
  const token = CookieService.getAuthToken();
  const platform = config.platform || import.meta.env.PLATFORM;

  let uid = "uid-";

  const rid = Date.now().toString(16) + Math.random().toString(16).slice(3);

  // uuid 生成 时间戳和随机数合并
  config.headers["X-Request-Id"] = `${uid};${rid}`;
  config.headers["Authorization"] = token ? `Bearer ${token}` : "";
  config.headers["device-type"] = 1;
  // 该请求的项目平台码
  config.headers["X-Platform-Code"] = platform;
  // 所有get请求添加随机数

  config.params = config.params || {};
  if (config.yapi) {
    config.baseURL = "https://mockjs/";
    config.url = `${config.yapi}${config.url}`;
  } else {
    if (!config.__headerAdded) {
      if (platform && !config.mock) {
        config.url = "/_api/" + platform + config.url;
      }
      config.__headerAdded = true;
    }
  }
  return config;
};
