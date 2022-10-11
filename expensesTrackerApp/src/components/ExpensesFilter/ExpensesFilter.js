/* eslint-disable */
import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = ({ onChangeFilter, selected }) => {
  const dropdownChangeHandler = (event) => {
    const { value } = event.target;
    onChangeFilter(value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select
          value={selected}
          onChange={dropdownChangeHandler}
          className="expenses-filter select"
        >
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
