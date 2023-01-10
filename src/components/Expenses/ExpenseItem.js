import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date1={props.date1} />
        <div className="expense-item__description ">
          <h2>{props.title1}</h2>
          <div className="expense-item__price">${props.amount1}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
