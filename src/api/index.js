import axios from "axios";
import { serverUrl } from "./config";

const ApiController = () => {
    const apiClient = axios.create({
        baseURL: serverUrl,
        withCredentials: true,
    });

    apiClient.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem("accessToken");
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    apiClient.interceptors.response.use(
        (response) => {
            return response.data;
        },
        async (error) => {
            if (error.response && error.response.status === 401) {
                try {
                    const response = await axios.post(
                        `${serverUrl}/account/login/refresh/`,
                        {
                            refresh:
                                localStorage.getItem("refreshToken") || "token",
                        },
                        {
                            headers: {
                                "Content-Type": "multipart/form-data",
                            },
                        }
                    );
                    response.data?.access &&
                        localStorage.setItem(
                            "accessToken",
                            response.data?.access
                        );
                } catch (error) {
                    error?.status == 401 &&
                        (window.location.href = `/login?redirect=${window.location.pathname}`);
                }

                return;
            }
            return Promise.reject(error);
        }
    );

    const _prepareData = (payload) => {
        const formData = new FormData();
        for (const key in payload) {
            formData.append(key, payload[key]);
        }
        return formData;
    };

    return {
        login: async (payload) => {
             try {
                const response = await apiClient.post(
                    `${serverUrl}/account/login`,
                    _prepareData(payload),
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
                return response;
            } catch (error) {
                throw error;
            }
        },

    };
};

export default ApiController();
