/* eslint-disable */
import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    const { value } = event.target;
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: value,
      };
    });
  };

  const amountChangeHandler = (event) => {
    const { value } = event.target;
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: value,
      };
    });
  };

  const dateChangeHandler = (event) => {
    const { value } = event.target;
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: new Date(value),
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    console.dir(userInput);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="9999-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
