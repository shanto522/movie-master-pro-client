import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const instance = axios.create({
  baseURL: "https://movies-master-pro-server.vercel.app",
});

const useAxiosSecure = () => {
  const { user, signOutFunc } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const requestInterceptor = instance.interceptors.request.use((config) => {
      if (user?.accessToken) {
        config.headers.authorization = `Bearer ${user.accessToken}`;
      }
      return config;
    });
    const responseInterceptor = instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        const status = err.status;
        if (status === 401 || status === 403) {
          signOutFunc().then(() => {
            navigate("/auth/register");
          });
        }
      }
    );

    return () => {
      instance.interceptors.request.eject(requestInterceptor);
      instance.interceptors.response.eject(responseInterceptor);
    };
  }, [user, signOutFunc, navigate]);

  return instance;
};

export default useAxiosSecure;
