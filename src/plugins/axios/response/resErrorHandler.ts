import { AxiosError } from "axios";
export default (axiosError: AxiosError) => {
  return Promise.reject(axiosError);
};
