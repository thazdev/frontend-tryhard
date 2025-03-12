import axios from "axios";

const API_URL = "http://localhost:3000";

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export const registerUser = async (userData) => {
    try {
        const response = await api.post("/profiles", {
            name: userData.username,
            email: userData.email,
            password: userData.password
        });
        return response.data;
    } catch (error) {
        console.error("Erro na requisição:", error.response?.data || error.message);
        throw new Error(error.response?.data?.message || "Erro ao registrar.");
    }
};

