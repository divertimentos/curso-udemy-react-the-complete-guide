import React from "react";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  const { expenses } = props;
  console.dir(expenses);

  return (
    <div className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default Expenses;
