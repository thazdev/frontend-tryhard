import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate()
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0A0E1A] text-white text-center px-6 relative overflow-hidden">
      <Navbar />
      <div
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 200 200'><rect fill='#ffffff' width='200' height='200'/><defs><linearGradient id='a' gradientUnits='userSpaceOnUse' x1='88' y1='88' x2='0' y2='0'><stop offset='0' stop-color='#005092'/><stop offset='1' stop-color='#007cc4'/></linearGradient><linearGradient id='b' gradientUnits='userSpaceOnUse' x1='75' y1='76' x2='168' y2='160'><stop offset='0' stop-color='#868686'/><stop offset='0.09' stop-color='#ababab'/><stop offset='0.18' stop-color='#c4c4c4'/><stop offset='0.31' stop-color='#d7d7d7'/><stop offset='0.44' stop-color='#e5e5e5'/><stop offset='0.59' stop-color='#f1f1f1'/><stop offset='0.75' stop-color='#f9f9f9'/><stop offset='1' stop-color='#FFFFFF'/></linearGradient><filter id='c' x='0' y='0' width='200%' height='200%'><feGaussianBlur in='SourceGraphic' stdDeviation='12' /></filter></defs><polygon fill='url(#a)' points='0 174 0 0 174 0'/><path fill='#000' fill-opacity='.5' filter='url(#c)' d='M121.8 174C59.2 153.1 0 174 0 174s63.5-73.8 87-94c24.4-20.9 87-80 87-80S107.9 104.4 121.8 174z'/><path fill='url(#b)' d='M142.7 142.7C59.2 142.7 0 174 0 174s42-66.3 74.9-99.3S174 0 174 0S142.7 62.6 142.7 142.7z'/></svg>`)}`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "#0A0E1A",
        }}
      ></div>
      {/* navbar */}
      {/* <nav className="w-full flex items-center justify-between px-4 py-2 bg-[#0A0E1A] border-b border-gray-800 fixed top-0 left-0 right-0 z-50">
        <h2 className="text-xl mt-10">Usuário logado:</h2>
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-4 py-2 text-white font-semibold rounded-lg hover:bg-[#181368] transition cursor-pointer"
        >
          <img src="./homeIcon.svg" alt="homeLogo" className="w-8 h-8 rounded-lg shadow-lg filter invert" />
          Home
        </button>
        <button onClick={handleLogout}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">
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
      </nav> */}

      <div className="mt-16"></div>
      <img
        src="./tryhardLogo.png"
        alt="tryhardLogo"
        className="w-40 md:w-38 mb-4 rounded-2xl border border-gray-500 shadow-[0_0_30px_#004AAD] drop-shadow-3xl z-10"
      />

      <h1 className="text-5xl md:text-7xl font-bold max-w-3xl leading-[1.1] z-10 font-[Kanit]">
        <span className="text-white block">Se torne Tryhard</span>
        <span className="text-[#004AAD] block -mt-2">Construa seu legado!</span>
      </h1>

      <div className="mt-6 w-full max-w-md z-10 font-[Kanit]">
        <div className="relative">
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">tryhard.gg/</span>
          <input
            type="text"
            placeholder="seunome"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="pl-24 pr-4 py-3 w-full bg-[#1C2230] border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#004AAD] text-lg text-white"
          />
        </div>

        <button className="mt-5 px-6 py-3 bg-[#004AAD] text-white font-semibold text-lg rounded-lg hover:bg-[#003B8B] transition cursor-pointer font-[Poppins]">
          Reivindicar meu legado
        </button>
      </div>
    </div>
  );
}
