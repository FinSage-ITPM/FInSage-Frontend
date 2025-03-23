import Image from "next/image";
import { Abril_Fatface } from "next/font/google";
// Removed unused imports and variables
import image1 from "../assets/image1.png";
import Navbar from "./navbar/navbar.js";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import Footer from "./footer/footer";

import Link from "next/link";

export default function Home() {
  return (
    <>
      {" "}
      {/* Properly opening the JSX fragment */}
      <Navbar />
      <div className="flex flex-row my-10">
        <div className="bg-gradient-to-r from-orange-500 to-orange-100 bg-clip-text text-transparent w-[50%] p-10">
          <p className={`text-5xl font-semibold p-8`}>
            Simplified Finance Personalized to Your Needs.
          </p>
          <div className="flex flex-row text-white mx-10 pb-2">
            <p>Optimize Savings,</p>
            <p className="text-orange-200">Manage Wealth</p>
          </div>
          <div className="flex flex-row gap-x-10 mx-10 pt-6">
            <Link href="/expensetracker" className="text-white rounded-4xl bg-orange-500 px-20 h-10 flex items-center gap-2">
              <p>Try Now</p>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
        <div className="text-white w-[50%] px-20">
          <Image src={image1} width={400} height={400} alt="image" />
        </div>
      </div>
      <div className="bg-gradient-to-r from-orange-500 to-orange-100 bg-clip-text text-transparent p-10 text-center my-10">
        <p className="text-4xl font-semibold">
          Empowering Young Adults to Make Smarter Financial Decisions
        </p>
      </div>
      <div className="flex flex-row my-10">
        <div className="w-[50%] p-10">
          <p className="text-white text-xl p-10">
            Our chatbot is designed for the new earners and young adults,
            offering personalized tax advice and financial guidance, ensuring
            you get the most out of your income.
          </p>
          <div className="flex flex-row gap-x-10 mx-10 pt-6">
            <Link href="/chatbot" className="text-white rounded-4xl bg-orange-500 px-20 h-10 flex items-center gap-2">
              <p>Try Now</p>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
        <div className="w-[50%] mx-10">
          <Image src={image2} width={400} height={400} alt="image" />
        </div>
      </div>
      <div className="bg-gradient-to-r from-orange-500 to-orange-100 bg-clip-text text-transparent p-10 text-center">
        <p className="text-4xl font-semibold">
          Explore Possibilites. Redefine Future
        </p>
      </div>
      <div className="flex flex-row">
        <div className="w-[50%] p-10">
          <Image src={image3} width={300} height={300} alt="image" />
        </div>

        <div className="bg-black text-white p-6 space-y-4 max-w-lg mx-auto">
          <ul className="space-y-4 text-lg">
            <li className="flex items-start space-x-3">
              <span className="text-green-500">✔️</span>
              <span>Track expenses and manage spending.</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-500">✔️</span>
              <span>Stay updated with the latest news.</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-500">✔️</span>
              <span>Learn smart finance step-by-step.</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-500">✔️</span>
              <span>Ask, share, discuss, and grow financially.</span>
            </li>
          </ul>

          <div className="flex flex-row gap-x-10 mx-10 pt-6">
            <Link href="/forums" className="text-white rounded-4xl bg-orange-500 px-20 h-10 flex items-center gap-2">
              <p>Try Now</p>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
