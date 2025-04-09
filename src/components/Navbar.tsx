import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate("/login");
    }

    return (
        <nav className="w-full flex items-center justify-between px-4 py-2 bg-[#0A0E1A] border-b border-gray-800 fixed top-0 left-0 right-0 z-50">
            <h2 className="text-xl mt-10">Usuário logado:</h2>
            <button
                onClick={() => navigate("/")}
                className="flex items-center gap-2 px-4 py-2 text-white font-semibold rounded-lg hover:bg-[#181368] transition cursor-pointer"
            >
                <img src="./homeIcon.svg" alt="homeLogo" className="w-8 h-8 rounded-lg shadow-lg filter invert" />
                Home
            </button>
            <button
                onClick={handleLogout}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
                Sair
            </button>
            <div>
                <h2>Bem-vindo, {user?.name}!</h2>
                <p>Seu email: {user?.email}</p>
                <p>ID: {user?.id}</p>
            </div>
            <div className="flex gap-4">
                <button className="text-white hover:text-gray-300 cursor-pointer">Conecte-se</button>
                <button className="px-4 py-2 bg-[#004AAD] text-white font-semibold rounded-lg hover:bg-[#003B8B] transition cursor-pointer">
                    Inscrever-se
                </button>
            </div>
        </nav>
    )
}