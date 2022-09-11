import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem({ title, amount, date }) {
  return (
    <div className="expense-item">
      {date && <ExpenseDate date={date} />}
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price"> R$ {amount} </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
