import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({ title, amount, date }) => {
  const [titleVar, setTitleVar] = useState(title);
  const clickHandler = () => {
    setTitleVar("Updated!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{titleVar}</h2>
        <div className="expense-item__price"> R$ {amount} </div>
      </div>
      <button onClick={clickHandler} type="submit">
        Change Title
      </button>
    </Card>
  );
};

export default ExpenseItem;
