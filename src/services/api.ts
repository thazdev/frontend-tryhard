import axios from "axios";

const API_URL = "http://localhost:3000";

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

interface RegisterData {
    username: string;
    email: string;
    password: string;
}

export const registerUser = async (userData: RegisterData) => {
    try {
        const response = await api.post("/profiles", {
            name: userData.username,
            email: userData.email,
            password: userData.password,
        });
        return response.data;
    } catch (error: any) {
        console.error("Erro na requisição:", error.response?.data || error.message);
        throw new Error(error.response?.data?.message || "Erro ao registrar.");
    }
};

interface LoginResponse {
    message: string;
    token: string;
}

export const loginUser = async (
    email: string,
    password: string
): Promise<LoginResponse> => {
    const response = await api.post("/login", { email, password });
    return response.data;
};

interface UserData {
    id: number;
    name: string;
    email: string;
}

export const getProfile = async (): Promise<UserData> => {
    const token = localStorage.getItem("token");
    const response = await api.get("/profile", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    console.log("Perfil carregado:", response.data)
    return response.data;
}
