import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://movies-master-pro-server.vercel.app",
});
const useAxios = () => {
  return axiosInstance;
};
export default useAxios;
