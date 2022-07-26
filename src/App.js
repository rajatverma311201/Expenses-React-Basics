import React from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
import "./App.css";
import "./../public/github-icon.svg";

const EXPENSES = [
    {
        id: "e1",
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: "e2",
        title: "New TV",
        amount: 799.49,
        date: new Date(2021, 2, 12),
    },
    {
        id: "e3",
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: "e4",
        title: "New Desk (Wooden)",
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];
function App() {
    const [expenses, setExpenses] = useState(EXPENSES);
    const addExpenseHandler = (expense) => {
        // expenses.push(expense);
        setExpenses((prevExpenses) => [expense, ...expenses]);
        console.log(expenses);
    };
    return (
        <div>
            <div className="heading" >
                Basic Project Built While Learning React
                <a href="https://github.com/rajatverma311201/Expenses-React-Basics">
                    <img src="github-icon.svg" alt="Github logo"/>
                </a>
            </div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses expenses={expenses} />
        </div>
    );
}

export default App;
