import AuthCard from "../components/AuthCard";
import { FaGithub, FaTwitter } from "react-icons/fa";

export default function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#0A0E1A] relative overflow-hidden">
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
                <AuthCard />
                <div className="flex justify-center gap-6 mt-6 w-full">
                    <a href="https://github.com/thazdev" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-[#004AAD] text-3xl hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://twitter.com/thazvlr" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-[#004AAD] text-3xl hover:scale-110 transition-transform" />
                    </a>
                </div>
            </div>
        </div>

    )
}