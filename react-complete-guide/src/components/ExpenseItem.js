import './ExpenseItem.css'

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div className="expense-item__description">24 de agosto de 2022</div>
      <div>
        <h2>Seguro da Bicicleta</h2>
        <div className="expense-item__price"> R$ 295.67 </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
