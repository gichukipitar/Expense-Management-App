import React from 'react';
import '../Utils/ExpenseDate.css'
const ExpenseDate =  (props)=> {
    const month = props.date.toLocaleString('default', {month:'long'});
    const day = props.date.toLocaleString('default', {day:'2-digit'});
    const year = props.date.getFullYear();

        return (

                <div className='expense-date'>
                    <div className='expense-date__month'>{month}</div>
                    <div className='expense-date__year'>{year}</div>
                    <div className='expense-date__year'>{day}</div>
                </div>


        );

}

export default ExpenseDate;