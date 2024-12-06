import axios from "axios";
import { serverUrl } from "./config";

const ApiController = () => {
    const apiClient = axios.create({
        baseURL: serverUrl,
        withCredentials: true,
    });

    apiClient.interceptors.request.use(
        (config) => {
            const token = sessionStorage.getItem("accessToken");
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
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
        createManager: async (payload) => {
            try {
                const response = await apiClient.post(
                    "/",
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
                throw error;
            }
        },
    };
};

export default ApiController();
