import React, { useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter.js";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(1992);
  const { expenses } = props;
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  console.log(`ano ano escolhido: ${typeof Number(filteredYear)}`);
  console.dir(
    expenses
      .filter((expense) => expense.date.getFullYear() === Number(filteredYear))
      .map((expense) => expense)
  );

  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
      </div>
      {expenses
        .filter(
          (expense) => expense.date.getFullYear() === Number(filteredYear)
        )
        .map((expense) => (
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
