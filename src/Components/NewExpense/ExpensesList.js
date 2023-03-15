import React from 'react';
import ExpenseItemComponent from "../ExpenseItemComponent";
import './ExpensesList.css'

const ExpensesList =(props)=> {

    if (props.items.length===0){
        return <h2 className="expenses-list__fallback">Found No Expense.</h2>
      }
        return (
            <div>
                <ul className="expenses-list">
                    {props.items.map((expense) => (
                            <ExpenseItemComponent
                                key={expense.id}
                                title={expense.title}
                                amount={expense.amount}
                                date={expense.date}
                            />
                        ))
                    }

                </ul>


            </div>
        );

}

export default ExpensesList;