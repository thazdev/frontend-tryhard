import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

interface PrivateRouteProps {
    children: ReactNode;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
    const { user, loading } = useAuth();
    if (loading) {
        return <p>Carregando...</p>;
    }
    if (!user) {
        return <Navigate to="/login" />;
    }
    return children;
}