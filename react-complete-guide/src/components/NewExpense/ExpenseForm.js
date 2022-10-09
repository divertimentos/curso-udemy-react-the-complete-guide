/* eslint-disable */
import React, { useState } from "react";
import FormFields from "./FormFields";

import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(true);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setIsFormOpen((currState) => !currState);
  };

  const cancelHandler = (event) => {
    event.preventDefault();
    console.log("Abra/Fecha");
    setIsFormOpen((currState) => !currState);
  };

  let formContent = (
    <div className="open-expense__actions">
      <button onClick={cancelHandler} type="submit">
        Add New Expense (open)
      </button>
    </div>
  );

  if (isFormOpen) {
    formContent = (
      <FormFields
        enteredTitle={enteredTitle}
        titleChangeHandler={titleChangeHandler}
        amountChangeHandler={amountChangeHandler}
        enteredAmount={enteredAmount}
        dateChangeHandler={dateChangeHandler}
        enteredDate={enteredDate}
        cancelHandler={cancelHandler}
      />
    );
  }

  return <form onSubmit={submitHandler}>{formContent}</form>;
};

export default ExpenseForm;
