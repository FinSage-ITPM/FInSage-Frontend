import { Abril_Fatface } from "next/font/google";
import { use } from "react";
const abrilFatface = Abril_Fatface({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  return (
    <div className="text-white flex flex-row justify-between p-10">
      <h1 className="text-orange-500 text-3xl">Finsage</h1>
      <div className="flex flex-row gap-x-10">
        <p>Home</p>
        <p>About</p>
        <p>Explore</p>
        <p>Contact</p>
        <div className="flex justify-center h-8 cursor-pointer">
          <p>Sign Up</p>
        </div>
        <div className="bg-white rounded-2xl text-black w-20 flex justify-center h-8 cursor-pointer">
          <p>Login</p>
        </div>
      </div>
    </div>
  );
}