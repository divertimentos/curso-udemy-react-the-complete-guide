/* eslint-disable */
import React from "react";

const FormFields = ({
  enteredTitle,
  titleChangeHandler,
  amountChangeHandler,
  enteredAmount,
  dateChangeHandler,
  enteredDate,
  cancelHandler,
}) => (
  <>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          onChange={amountChangeHandler}
          value={enteredAmount}
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="9999-12-31"
          onChange={dateChangeHandler}
          value={enteredDate}
        />
      </div>
    </div>
    <div className="new-expense__actions">
      <button onClick={cancelHandler} type="button">
        Cancel
      </button>
      <button type="submit">Add Expense</button>
    </div>
  </>
);

export default FormFields;
