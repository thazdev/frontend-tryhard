import { Link } from 'react-router-dom';

export default function AuthCard({ 
  isRegister = false, 
  email, setEmail, 
  username, setUsername, 
  password, setPassword, 
  confirmPassword, setConfirmPassword, 
  error, handleSubmit 
}) {
  return (
    <div className="bg-[#1C2230] border border-gray-700 p-8 rounded-lg shadow-2xl w-full max-w-md">
      <h2 className="text-white text-2xl font-semibold text-center mb-6">
        {isRegister ? "CRIE SUA CONTA" : "BEM-VINDO DE VOLTA"}
      </h2>

      {error && <p className="text-red-500 text-sm text-center mb-2">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="text-gray-400 text-sm block mb-1">Email</label>
          <input 
            type="email" 
            className="w-full px-4 py-2 bg-[#2A3140] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-500" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {isRegister && (
          <div className="mb-4">
            <label className="text-gray-400 text-sm block mb-1">Nome de usuário</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 bg-[#2A3140] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-500" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        )}

        <div className="mb-4">
          <label className="text-gray-400 text-sm block mb-1">Senha</label>
          <input 
            type="password" 
            className="w-full px-4 py-2 bg-[#2A3140] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-500" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {isRegister && (
          <div className="mb-4">
            <label className="text-gray-400 text-sm block mb-1">Confirmar senha</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 bg-[#2A3140] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-500" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        )}

        <button className="w-full bg-[#004AAD] text-white font-semibold py-2 rounded-lg hover:bg-[#003B8B] transition">
          {isRegister ? "Registrar" : "Entrar"}
        </button>

        <p className="text-center text-gray-400 text-sm mt-4">
          {isRegister ? "Já tem uma conta?" : "Não tem uma conta?"} 
          <Link to={isRegister ? "/login" : "/register"} className="text-blue-400 hover:underline"> 
            {isRegister ? " Faça login" : " Inscreva-se"}
          </Link>
        </p>
      </form>
    </div>
  );
}
