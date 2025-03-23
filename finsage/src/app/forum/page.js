import { FiSearch, FiSettings } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { AiOutlineEye } from "react-icons/ai";

const threads = [
  {
    id: 1,
    title: "Budget 2025",
    creator: "Kevin",
    time: "15h ago",
    upvotes: 652,
    downvotes: 50,
    views: 652,
    bookmarked: false,
  },
  {
    id: 2,
    title: "Stock Market Updates",
    creator: "User2",
    time: "1d ago",
    upvotes: 800,
    downvotes: 26,
    views: 589,
    bookmarked: true,
  },
  {
    id: 3,
    title: "GenZ Spending Habits..",
    creator: "User3",
    time: "37m ago",
    upvotes: 358,
    downvotes: 14,
    views: 1800,
    bookmarked: false,
  },
  {
    id: 4,
    title: "X.com IPO launches on NASDAQ",
    creator: "User4",
    time: "1h ago",
    upvotes: 443,
    downvotes: 25,
    views: 1100,
    bookmarked: false,
  },
];

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-white">
      {/* Navbar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
        <h1 className="text-2xl font-bold text-primary">FinSage</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-gray-800 px-3 py-2 rounded-lg">
            <input
              type="text"
              placeholder="Search for threads.."
              className="bg-transparent text-sm outline-none"
            />
            <FiSearch className="text-gray-500" />
          </div>
          <FiSettings className="text-xl cursor-pointer" />
        </div>
      </div>

      {/* Create Thread */}
      <div className="flex items-center px-6 py-4 bg-gray-800">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center">
            👤
          </div>
          <input
            type="text"
            placeholder="Create your own thread..."
            className="bg-transparent w-full outline-none"
          />
        </div>
        <button className="bg-primary p-2 rounded-full ml-3">
          <IoMdAdd className="text-white text-lg" />
        </button>
      </div>

      {/* Thread List */}
      <div className="px-6 py-4 space-y-4">
        {threads.map((thread) => (
          <div
            key={thread.id}
            className="bg-card p-4 rounded-lg flex justify-between items-center"
          >
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-xl">
                👤
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">
                  {thread.title}
                </h2>
                <p className="text-sm text-grayText">
                  {thread.creator} created at : {thread.time}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-grayText">
              <div className="flex items-center space-x-1">
                <IoIosArrowUp className="text-white" />
                <span className="text-black">{thread.upvotes}</span>
              </div>
              <div className="flex items-center space-x-1">
                <IoIosArrowDown className="text-black" />
                <span className="text-black">{thread.downvotes}</span>
              </div>
              <div className="flex items-center space-x-1">
                <AiOutlineEye className="text-black" />
                <span className="text-black">
                  {thread.views >= 1000
                    ? `${(thread.views / 1000).toFixed(1)}K`
                    : thread.views}
                </span>
              </div>
              <FaRegBookmark
                className={`text-lg ${
                  thread.bookmarked ? "text-primary" : "text-black"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
