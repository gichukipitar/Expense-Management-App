import React, {useState} from 'react';
import ExpenseItemComponent from "./ExpenseItemComponent";
import '../Utils/Expenses.css'
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);

    };
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let expenseContent = <p>No expenses found</p>;

    if (filteredExpenses.length>0){
        expenseContent = filteredExpenses.map((expense) => (
            <ExpenseItemComponent
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))

    }

    return (
        <div>
            <Card className="expenses">

                <ExpenseFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                {expenseContent}
            </Card>
        </div>
    );
}
export default Expenses;