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
                        (window.location.href = `/admin/login?redirect=${window.location.pathname}`);
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
        loadProfile: async () => {
            try {
                const response = await apiClient.get(
                    `${serverUrl}/account/admin/profile/`,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
                return response.data;
            } catch (error) {
                throw error;
            }
        },

        getManagers: async () => {
            try {
                const response = await apiClient.get(
                    `${serverUrl}/account/manager/`,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
                return response;
            } catch (error) {
                console.log(error);
                throw error.response.data;
            }
        },

        createManager: async (payload) => {
            try {
                const response = await apiClient.post(
                    `${serverUrl}/account/manager/`,
                    _prepareData(payload),
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
                return response;
            } catch (error) {
                console.log(error);
                throw error.response.data;
            }
        },
        deleteManager: async (staff_id) => {
            try {
                const response = await apiClient.delete(
                    `${serverUrl}/account/manager/${staff_id}/`,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
                return response;
            } catch (error) {
                console.log(error);
                throw error.response.data;
            }
        },
        getManager: async (staff_id) => {
            try {
                const response = await apiClient.get(
                    `${serverUrl}/account/manager/${staff_id}/`,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
                return response;
            } catch (error) {
                console.log(error);
                throw error.response.data;
            }
        },
        toogleManagerStatus: async (psk, staff_id, action) => {
            try {
                const response = await apiClient.patch(
                    `${serverUrl}/account/manager/${staff_id}/${
                        action ? "activate" : "deactivate"
                    }/`,
                    _prepareData({ psk }),
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
                return response;
            } catch (error) {
                console.log(error);
                throw error.response.data;
            }
        },
        getVendors: async () => {
            try {
                const response = await apiClient.get(
                    `${serverUrl}/account/vendors/`,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
                return response;
            } catch (error) {
                console.log(error);
                throw error.response.data;
            }
        },
        getVendor: async (store_id) => {
            try {
                const response = await apiClient.get(
                    `${serverUrl}/account/vendor/profile/?v-id=${store_id}`,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
                return response;
            } catch (error) {
                console.log(error);
                throw error.response.data;
            }
        }
    };
};

export default ApiController();
