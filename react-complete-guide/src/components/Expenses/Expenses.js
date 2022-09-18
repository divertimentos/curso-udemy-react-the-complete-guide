import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
// import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter.js";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [yearProp, setYearProp] = useState("");
  const { expenses } = props;
  const gatherYearData = (year) => {
    setYearProp(year);
  };

  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter yearData={gatherYearData} />
      </div>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
