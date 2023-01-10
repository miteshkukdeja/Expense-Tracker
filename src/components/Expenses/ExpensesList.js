import React from "react";
import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";
const ExpensesList = (props) => {
  //   let expensesContent = (
  //     <p style={{ color: "white", padding: "10px" }}>No expenses found!</p>
  //   );
  if (props.list.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.list.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title1={expense.title}
          amount1={expense.amount}
          date1={expense.date}
        />
      ))}
      ;
    </ul>
  );
};

export default ExpensesList;
