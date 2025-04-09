import React from "react";
import ProfileCard from "../components/ProfileCard";
import SectionCard from "../components/SectionCard";
import Navbar from "../components/Navbar";

export default function UserProfile() {
    return (
        <div className="min-h-screen bg-[#0A0E1A] text-white py-15 px-4">
            <Navbar />
            <div className="max-w-7xl pt-24 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <ProfileCard />
                    </div>

                    <div className="md:col-span2 space-y-8">
                        <SectionCard />
                    </div>
                </div>
            </div>
        </div>
    );
}