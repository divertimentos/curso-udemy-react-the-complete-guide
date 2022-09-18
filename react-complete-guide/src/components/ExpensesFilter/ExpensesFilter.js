/* eslint-disable */
import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = ({ yearData }) => {
  const selectYearHandler = (event) => {
    const { value } = event.target;
    yearData(value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={selectYearHandler} className="expenses-filter select">
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
