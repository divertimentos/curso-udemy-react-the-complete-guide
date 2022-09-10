import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2022, 8, 24);
  const expenseTitle = "Bike Insurance";
  const expenseAmount = "666";

  return (
    <div className="expense-item">
      <div className="expense-item__description">
        {expenseDate.toISOString()}
      </div>
      <div>
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price"> R$ {expenseAmount} </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
