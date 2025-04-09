import React from "react";
import { FaTwitter, FaTwitch, FaInstagram, FaGamepad } from "react-icons/fa"

export default function ProfileCard() {
    return (
        <div className="bg-[#1C1C1C] rounded-xl shadow-lg p-6 text-center">
            <div className="h-32 w-full rounded-xl overflow-hidden mb-6">
                <img
                    src="trioParadaDura.png"
                    alt="Banner"
                    className="object-cover w-full h-full"
                />
            </div>

            <div className="relative w-24 h-24 mx-auto -mt-16 rounded-full border-4 border-[#0A0E1A] overflow-hidden">
                <img
                    src="https://i.pravatar.cc/150?img=32"
                    alt="Avatar"
                    className="w-full h-full object-cover"
                />
            </div>

            <h2 className="text-2xl font-bold mt-4">THAZ</h2>
            <p className="text-sm text-gray-400 mb-1">🇧🇷 Brazil</p>
            <p className="text-sm text-gray-400">Lorenzo "Thaz" Machado</p>

            <div className="flex justify-center gap-4 mt-4">
                <a href="#" target="_blank"><FaTwitter className="text-white hover:text-[#1DA1F2]" /></a>
                <a href="#" target="_blank"><FaTwitch className="text-white hover:text-purple-500" /></a>
                <a href="#" target="_blank"><FaInstagram className="text-white hover:text-pink-500" /></a>
                <a href="#" target="_blank"><FaGamepad className="text-white hover:text-red-500" /></a>
            </div>
        </div>
    )
}