/* eslint-disable */
import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  console.clear();
  console.log("Estado:");
  console.log(new Date());
  console.dir(userInput);

  const { enteredTitle, enteredAmount, enteredDate } = userInput;

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
        enteredDate: value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    console.dir(userInput);
    setUserInput({});
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="9999-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
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
