import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({ title, amount, date }) => {
  const handleClick = () => console.log("OIBEBEEEEEEEEEEEEE");
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price"> R$ {amount} </div>
      </div>
      <button onClick={handleClick} type="submit">
        Change Title
      </button>
    </Card>
  );
};

export default ExpenseItem;
