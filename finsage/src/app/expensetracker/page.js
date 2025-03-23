"use client"; // Required for interactivity (e.g., useState, useEffect)
import { useState } from "react";
import { Abril_Fatface } from "next/font/google";
import { useRouter } from "next/navigation";
import Footer from "../footer/footer";

const abrilFatface = Abril_Fatface({ subsets: ["latin"], weight: "400" });

export default function ExpenseTracker() {
  const router = useRouter();
  const [expenses, setExpenses] = useState([
    { category: "Food", amount: 300, description: "Burger" },
    { category: "Glazing", amount: 180, description: "Window repair" },
    { category: "Gitting", amount: 200, description: "Gift for friend" },
    { category: "Onsocios", amount: 300, description: "Subscription" },
    { category: "Entertainment", amount: 299, description: "Movie tickets" },
  ]);

  const [newExpense, setNewExpense] = useState({
    description: "",
    amount: "",
    category: "",
  });

  const handleAddExpense = async () => {
    if (newExpense.description && newExpense.amount) {
      const category = await fetchCategoryFromBackend(newExpense.description);

      const expense = {
        category: category,
        amount: newExpense.amount,
        description: newExpense.description,
      };

      setExpenses([...expenses, expense]);
      setNewExpense({ description: "", amount: "", category: "" });
    }
  };

  const fetchCategoryFromBackend = async (description) => {
    const response = await fetch("/api/predict-category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description }),
    });

    const data = await response.json();
    return data.category;
  };

  return (
    <>
      <div className="bg-black text-white min-h-screen p-8 flex flex-col items-center justify-center">
        {/* Back Button */}
        <button
          onClick={() => router.push("/")}
          className="absolute top-4 left-4 text-white p-2 rounded-full hover:bg-orange-600 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"/>
          </svg>
        </button>

        {/* Header Section */}
        <div className="text-center mb-10">
          <h1
            className={`text-4xl font-semibold mb-4 ${abrilFatface.className} bg-gradient-to-r from-orange-500 to-orange-100 bg-clip-text text-transparent`}
          >
            FinSage
          </h1>
          <h2 className="text-2xl bg-gradient-to-r from-orange-500 to-orange-100 bg-clip-text text-transparent">
            Expense Tracker
          </h2>
        </div>

        {/* Centered Container */}
        <div className="w-[700px] space-y-6">
          {/* Expenses List */}
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-6">Expenses</h3>
            <div className="flex items-center justify-center mb-8">
              <span className="bg-gradient-to-r from-red-300 to-red-500 bg-clip-text text-transparent text-4xl font-bold">
                Total Spending $1800
              </span>
            </div>
            <ul className="space-y-4">
              {expenses.map((expense, index) => (
                <li key={index} className="flex justify-between text-gray-400">
                  <span>
                    {expense.category} - {expense.description}
                  </span>
                  <span>${expense.amount}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Add New Expense Form */}
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-6">Add New Expense</h3>
            <input
              type="text"
              placeholder="Expense Description (e.g., 'I spent 200 on burger')"
              value={newExpense.description}
              onChange={(e) =>
                setNewExpense({ ...newExpense, description: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-700 rounded-md shadow-sm bg-gray-800 text-white focus:outline-none focus:ring-orange-500 focus:border-orange-500 mb-6"
            />
            <input
              type="number"
              placeholder="Amount"
              value={newExpense.amount}
              onChange={(e) =>
                setNewExpense({ ...newExpense, amount: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-700 rounded-md shadow-sm bg-gray-800 text-white focus:outline-none focus:ring-orange-500 focus:border-orange-500 mb-6"
            />
            <button
              onClick={handleAddExpense}
              className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-300"
            >
              Add Expense
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
