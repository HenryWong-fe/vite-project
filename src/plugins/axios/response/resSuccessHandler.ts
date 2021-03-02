import { AxiosResponse } from "axios";
import { notification } from "ant-design-vue";
export default (axiosResponse: AxiosResponse) => {
  const serverResponse = axiosResponse.data;
  if (serverResponse.code === 200) {
    if (serverResponse && serverResponse.data) {
      return serverResponse.data;
    } else {
      import.meta.env.DEV &&
        console.warn(
          "[res-success-handler interceptor] no serverResponse.data detected"
        );
      return axiosResponse;
    }
  } else {
    notification.warning({
      message: "提示",
      description: serverResponse.msg,
    });
    return Promise.reject(serverResponse);
  }
};