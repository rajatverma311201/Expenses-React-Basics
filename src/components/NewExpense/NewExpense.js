import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.round(Math.random() * 10),
        };
        console.log(expenseData);
        setOpenForm(false);
        props.onAddExpense(expenseData);
    };

    const [openForm, setOpenForm] = useState(false);

    const openFormHandler = () => {
        setOpenForm(true);
    };
    const closeFormHandler = ()=>{
        setOpenForm(false);
    }
    return (
        <div className="new-expense">
            {!openForm && (
                <button onClick={openFormHandler}>Add New Expense</button>
            )}
            {openForm && (
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelForm={closeFormHandler}/>
            )}
        </div>
    );
};

export default NewExpense;
