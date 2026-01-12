// Build a web app to track daily expenses using an array of objects. 
// Users should be able to add, edit, delete expenses. 
// Each expense has id, title, amount, category, and date. 
// Store data in localStorage. Use map to display, filter to show category-wise expenses, 
// reduce to calculate total and category-wise totals. 
// Use spread operator while updating data and promises (fetch dummy API or simulated promise).

let expenses = [];
const getExpenseId = (function() {  
    let id = 1;
    return () => id++;
})();

// ------------------------------------------------------------------
const addExpense = () => {
    const title = document.getElementById('expenseInput').value;
    const amount = parseFloat(document.getElementById('amountInput').value);
    const category = document.getElementById('categoryInput').value;
    const date = document.getElementById('dateInput').value;
    if (title === '' || isNaN(amount) || amount <= 0 || category === '' || date === '') {
        alert('Please enter valid expense details.');
        return;
    }
    const expense = {
        id: getExpenseId(),
        title: title,
        amount: amount,
        category: category,
        date: date
    };
    expenses.push(expense);
    displayExpenses();
    clearInput();
}

// 
const displayExpenses = () => {
    const table = document.getElementById('expenseTable');
    table.innerHTML = "";
    expenses.map(expense => {
        const {id, title, amount, category, date} = expense;
        table.innerHTML += `
            <tr>
                <td>${id}</td>
                <td>${title}</td>
                <td>Rs. ${amount.toFixed(2)}</td>
                <td>${category}</td>
                <td>${date}</td>
                <td><button onclick="editExpense(${id})">Edit</button></td>
                <td><button onclick="deleteExpense(${id})">Delete</button></td>
            </tr>
        `;
    });
}

// Filter expenses by category
const displayCategoryWiseExpenses = () => {
    const category = document.getElementById('filterCategoryInput').value.trim().toLowerCase();
    if (category !== '') {
        // normalize expense categories to lowercase for case-insensitive matching
        expenses = expenses.map(exp => ({ ...exp, category: exp.category.toLowerCase() }));
        const filteredExpenses = expenses.filter(exp => exp.category === category);
        const table = document.getElementById('expenseTable');
        table.innerHTML = "";
        filteredExpenses.map(expense => {
            const {id, title, amount, category, date} = expense;
            table.innerHTML += `
                <tr>
                    <td>${id}</td>
                    <td>${title}</td>
                    <b><td>Rs. ${amount.toFixed(2)}</td></b>
                    <td>${category}</td>
                    <td>${date}</td>
                    <td><button onclick="editExpense(${id})">Edit</button></td>
                    <td><button onclick="deleteExpense(${id})">Delete</button></td>
                </tr>
            `;
        });
        document.getElementById('totalExpense').textContent = filteredExpenses.reduce((sum, exp) => sum + exp.amount, 0).toFixed(2);
    } else {
        displayExpenses();
        displayTotal();
    }
}

// Total expenses using reduce
const displayTotal = () => {
    const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    document.getElementById('totalExpense').textContent = total.toFixed(2);
}

const clearInput = () => {
    document.getElementById('expenseInput').value = '';
    document.getElementById('amountInput').value = '';
    document.getElementById('categoryInput').value = '';
    document.getElementById('dateInput').value = '';
}

const saveExpensesAsync = () => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
    return new Promise((resolve, reject) => {
        setTimeout(() => {  
            resolve('Expenses saved successfully!');
        }, 1000);
    });
}

const saveExpenses = async () => {
        alert("Saving expenses...");
        const message = await saveExpensesAsync(); 
        alert(message);
        displayExpenses();
        displayTotal();
}

const editExpense = (id) => {
    const expense = expenses.find(exp => exp.id === id);
    if (!expense) return;
    document.getElementById('expenseInput').value = expense.title;
    document.getElementById('amountInput').value = expense.amount;
    document.getElementById('categoryInput').value = expense.category;

    document.getElementById('dateInput').value = expense.date;
    // Hide add button
    document.getElementById('addExpenseBtn').style.display = 'none';
    // Change add button to save button
    document.getElementById('saveExpenseBtn').style.display = 'inline-block';
    document.getElementById('saveExpenseBtn').onclick = () => saveEditedExpense(id);
}

const saveEditedExpense = (id) => {
    const title = document.getElementById('expenseInput').value;
    const amount = parseFloat(document.getElementById('amountInput').value);
    const category = document.getElementById('categoryInput').value;
    const date = document.getElementById('dateInput').value;
    if (title === '' || isNaN(amount) || amount <= 0 || category === '' || date === '') {
        alert('Please enter valid expense details.');
        return;
    }
    expenses = expenses.map(exp =>
        exp.id === id ? { ...exp, title, amount, category, date } : exp
    );
    localStorage.setItem('expenses', JSON.stringify(expenses));
    displayTotal();
    displayExpenses();
    clearInput();
    // Show add button
    document.getElementById('addExpenseBtn').style.display = 'inline-block';
    // Hide save button
    document.getElementById('saveExpenseBtn').style.display = 'none';
}

const deleteExpense = (id) => {
    expenses = expenses.filter(exp => exp.id !== id);
    // Refresh display and total
    displayTotal();
    displayExpenses();
}

// Display from localStorage on load
window.onload = () => {
    const storedExpenses = localStorage.getItem('expenses');
    if (storedExpenses) {
        expenses = JSON.parse(storedExpenses);
        displayExpenses();
        displayTotal();
    }
};

// Initial display
displayExpenses();
displayTotal();