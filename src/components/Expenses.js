import ExpenseItem from "./ExpenseItem";
import React from "react";

import "./Expenses.css";

const Expenses = (props) => {
    // const expenses = props.expenses;
    return (
        <div className="expenses">
            {props.expenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                ></ExpenseItem>
            ))}
        </div>
    );
};

export default Expenses;
