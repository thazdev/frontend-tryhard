import React from "react";

export default function SectionCard() {
    return (
        <div className="bg-[#1C1C1C] rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">🎮 Setup Gamer</h3>

            <ul className="space-y-2 text-sm text-gray-300">
                <li><strong>Mouse:</strong> Logitech G Pro X Superlight</li>
                <li><strong>Teclado:</strong> SteelSeries Apex Pro</li>
                <li><strong>Monitor:</strong> Alienware 240Hz</li>
                <li><strong>Headset:</strong> HyperX Cloud II</li>
                <li><strong>Mousepad:</strong> Artisan Zero</li>
            </ul>
        </div>
    )
}