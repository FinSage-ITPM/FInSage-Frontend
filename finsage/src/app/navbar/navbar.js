import { Abril_Fatface } from "next/font/google";
import Link from "next/link";

const abrilFatface = Abril_Fatface({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  return (
    <div className="text-white flex flex-row justify-between p-10">
      <h1
        className={`text-3xl font-semibold ${abrilFatface.className} bg-gradient-to-r from-orange-500 to-orange-100 bg-clip-text text-transparent`}>
        FinSage
      </h1>
      <div className="flex flex-row gap-x-10">
        <p>Home</p>
        <p>About</p>
        <p>Explore</p>
        <a href="#footer">Contact</a>
        <div className="flex justify-center h-8 cursor-pointer">
          <Link href="/register">
            <p>Sign Up</p>
          </Link>
        </div>
        <div className="bg-white rounded-2xl text-black w-20 flex justify-center h-8 cursor-pointer items-center">
          <Link href="/login">
            <p>Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
