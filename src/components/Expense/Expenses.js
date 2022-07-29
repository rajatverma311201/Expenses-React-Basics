import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

import Card from "../UI/Card";

const Expenses = (props) => {
    // const expenses = props.expenses;

    const [filteredYear, setFilteredYear] = useState("2020");
    const filteredExpenses = props.expenses.filter((expense) => {
        if (expense.date.getFullYear() === Number(filteredYear)) return true;
        else return false;
    });
    let expensesContent = filteredExpenses.map((expense) => (
        <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        ></ExpenseItem>
    ));

    if (filteredExpenses.length === 0)
        expensesContent = (
            <h2 className="expenses-list__fallback">No Expense Found !!!</h2>
        );

    // console.log(filteredExpenses);
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            <ExpensesChart expenses={filteredExpenses} />
            {expensesContent}
        </Card>
    );
};

export default Expenses;
