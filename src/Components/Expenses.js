import React, {useState} from 'react';
import ExpenseItemComponent from "./ExpenseItemComponent";
import '../Utils/Expenses.css'
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./NewExpense/ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);

    };
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });



    return (
        <div>
            <Card className="expenses">

                <ExpenseFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesChart expenses = {filteredExpenses}/>
              <ExpensesList items = {filteredExpenses}/>
            </Card>
        </div>
    );
}
export default Expenses;