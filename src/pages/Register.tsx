import { useState } from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import AuthCard from "../components/AuthCard";
import { registerUser } from "../services/api"; 
import { useNavigate } from "react-router-dom";
import { FormEvent } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("As senhas não coincidem!");
      return;
    }
    try {
      await registerUser({ email, username, password });
      await login(email, password)
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Erro ao registrar.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0A0E1A] relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20 z-0"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'><g fill='%23272727' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E\")",
          backgroundColor: "#0A0E1A",
          backgroundSize: "20px 20px",
          backgroundRepeat: "repeat",
        }}
      ></div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-md">
        <AuthCard 
          isRegister 
          email={email} setEmail={setEmail}
          username={username} setUsername={setUsername}
          password={password} setPassword={setPassword}
          confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword}
          error={error} 
          handleSubmit={handleRegister}
        />

        <div className="flex justify-center gap-6 mt-6 w-full">
          <a href="https://github.com/seuusuario" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-[#004AAD] text-3xl hover:scale-110 transition-transform" />
          </a>
          <a href="https://twitter.com/seuusuario" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-[#004AAD] text-3xl hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}
