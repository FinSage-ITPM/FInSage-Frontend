"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/utils/api";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await loginUser(email, password);

            console.log("Login Successful!");
            console.log("Token:", response.access_token); // Debugging token

            localStorage.setItem("token", response.access_token); // Store token
            router.push("/dashboard"); // Redirect to dashboard after login
        } catch (err) {
            console.error("Login Error:", err.message); // Debugging error
            setError(err.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="w-96 p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                {error && <p className="text-red-500">{error}</p>}
                <form onSubmit={handleLogin} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
