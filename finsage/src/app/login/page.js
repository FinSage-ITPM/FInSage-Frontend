"use client"; 
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Abril_Fatface } from "next/font/google";

const abrilFatface = Abril_Fatface({ subsets: ["latin"], weight: "400" });

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="bg-black text-white flex items-center justify-center min-h-screen">
      {/* Back Button */}
      <button
        onClick={() => router.push("/")} // 
        className="absolute top-4 left-4 text-white p-2 rounded-full hover:bg-orange-600 flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Login Form */}
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-96">
        <h1
          className={`text-4xl font-semibold text-center mb-6 ${abrilFatface.className} bg-gradient-to-r from-orange-500 to-orange-100 bg-clip-text text-transparent`}
        >
          FinSage
        </h1>
        <h2 className="text-2xl text-center mb-6 bg-gradient-to-r from-orange-500 to-orange-100 bg-clip-text text-transparent">
          Login
        </h2>

        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm bg-gray-800 text-white focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm bg-gray-800 text-white focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>

          <a href="#" className="text-sm text-orange-500 hover:text-orange-400">
            Forgot your password?
          </a>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg mt-6 hover:bg-orange-600 flex items-center justify-center gap-2"
          >
            Login
            <span>&rarr;</span>
          </button>
        </form>
      </div>
    </div>
  );
}
