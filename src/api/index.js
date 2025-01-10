import axios from "axios";
import { serverUrl } from "./config.js";

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
            return response;
        },
        async (error) => {
            if (
                error.response &&
                error.response.status === 401 &&
                window.__mp_user_xhrse_isTrue
            ) {
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
                        (window.location.href = `/account/login?redirect=${window.location.pathname}`);
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
    const extractErrorMessage = (error) => {
        return (
            error?.response?.data?.error ||
            error?.response?.data?.detail ||
            error?.response?.data?.message ||
            "Unknown Error please try again"
        );
    };

    return {
        login: async (payload) => {
            try {
                const response = await axios.post(
                    `${serverUrl}/account/login`,
                    _prepareData(payload),
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
                return response.data;
            } catch (error) {
                throw extractErrorMessage(error);
            }
        },
        signup: async (payload) => {
            try {
                const response = await axios.post(
                    `${serverUrl}/account/register/`,
                    _prepareData(payload),
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
                return response.data;
            } catch (error) {
                throw extractErrorMessage(error);
            }
        },
        confirmEmail: async (payload) => {
            try {
                const response = await axios.post(
                    `${serverUrl}/account/confirm/`,
                    _prepareData(payload),
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
                return response.data;
            } catch (error) {
                console.log(error);
                throw extractErrorMessage(error);
            }
        },
        addItemsToCart: async (payload) => {
            try {
                const response = await apiClient.post(
                    "/account/carts/",
                    payload,
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                return response.data;
            } catch (error) {
                console.log(error);
                throw extractErrorMessage(error);
            }
        },
        getCartItems: async () => {
            try {
                const response = await apiClient.get("/account/carts/", {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
                return response.data;
            } catch (error) {
                throw extractErrorMessage(err);
            }
        },
    };
};

export default ApiController();
