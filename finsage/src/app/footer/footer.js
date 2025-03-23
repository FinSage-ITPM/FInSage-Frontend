import { Abril_Fatface } from "next/font/google";

const abrilFatface = Abril_Fatface({ subsets: ["latin"], weight: "400" });

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16" id="footer">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h1 className={`text-3xl font-semibold ${abrilFatface.className} bg-gradient-to-r from-orange-500 to-orange-100 bg-clip-text text-transparent`}>
              FinSage
            </h1>
            <p className="text-sm text-gray-400 mt-2">
              Simplified Finance Personalized to Your Needs.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <div>
              <h2 className="text-lg font-semibold text-orange-500 mb-3">Quick Links</h2>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-orange-500">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500">Contact</a></li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-orange-500 mb-3">Resources</h2>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-orange-500">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500">FAQs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-orange-500 mb-3">Contact Us</h2>
              <ul className="space-y-2">
                <li className="text-gray-400">Email: support@finsage.com</li>
                <li className="text-gray-400">Phone: +123 456 7890</li>
                <li className="text-gray-400">Address: 123 Finance St, Money City</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} FinSage. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}