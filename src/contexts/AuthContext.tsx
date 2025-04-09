import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { loginUser, getProfile } from "../services/api";

interface UserData {
    id: number;
    name: string;
    email: string;
}

interface AuthContextType {
    user: UserData | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
    children: ReactNode; //enviar para os componentes filhos
}

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);

    const login = async (email: string, password: string) => {
        const { token } = await loginUser(email, password);
        console.log("Token recebido:", token);
        localStorage.setItem("token", token);
        const userData = await getProfile();
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    useEffect(() => {
        const restoreSession = async () => {
            const token = localStorage.getItem("token");
            if (token) {
                try {
                    const userData = await getProfile();
                    setUser(userData);
                } catch (error) {
                    console.error("Erro ao restaurar sessão:", error);
                    localStorage.removeItem("token");
                }
            }
            setLoading(false);
        }
        restoreSession();
    }, []);
    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    }
    return context;
}
