import React from "react";

import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
const ExpenseItem=(props)=> {
    const { amount, date } = props;

    // for changing title on button click
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle(`Updated`);
        // console.log("CLicked Me");
    };

    return (
        <div className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2> {title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>

            <button onClick={clickHandler}>Click Me!</button>
        </div>
    );
}

export default ExpenseItem;
