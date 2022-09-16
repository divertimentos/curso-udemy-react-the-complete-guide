import React from "react";
// import PropTypes from "prop-types";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const { date } = props;
  const month = date.toLocaleString("pt-BR", { month: "long" });
  const day = date.toLocaleString("pt-BR", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
