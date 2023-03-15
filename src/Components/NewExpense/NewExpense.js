import React, {Component} from 'react';
import ExpenseForm from "./ExpenseForm";
import '../NewExpense/NewExpense.css'


const NewExpense = ()=> {
    const saveExpenseHandler = (enteredExpenseData) =>{
        const expenseData ={
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        console.log(expenseData);
    }

        return (
            <div className="new-expense">
                <ExpenseForm onSaveExpenseData = {saveExpenseHandler}/>
            </div>
        );

}

export default NewExpense;