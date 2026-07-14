// Expense Tracker Started

console.log("Expense Tracker Started...");

// DOM Elements

const expenseName = document.getElementById("expenseName");
const amount = document.getElementById("amount");
const category = document.getElementById("category");
const date = document.getElementById("date");

const addExpenseBtn = document.getElementById("addExpenseBtn");

const expenseContainer = document.getElementById("expenseContainer");
const totalAmount = document.getElementById("totalAmount");

const searchExpense = document.getElementById("searchExpense");
const filterCategory = document.getElementById("filterCategory");

// Variables

let expenses = [];
let total = 0;

// Functions

// Update Total Amount
function updateTotal() {

    total = 0;

    expenses.forEach(function (expense) {

        total += Number(expense.amount);

    });

    totalAmount.textContent = `₹${total}`;

}

// Create Expense Card
function createExpenseCard(expense, index) {

    const expenseCard = document.createElement("div");

    expenseCard.classList.add("expense-card");

    expenseCard.setAttribute("data-category", expense.category);

    expenseCard.innerHTML = `
        <h3>${expense.name}</h3>

        <p><strong>Amount:</strong> ₹${expense.amount}</p>

        <p><strong>Category:</strong> ${expense.category}</p>

        <p><strong>Date:</strong> ${expense.date}</p>

        <button class="deleteBtn">Delete</button>
    `;

    const deleteBtn = expenseCard.querySelector(".deleteBtn");

    deleteBtn.addEventListener("click", function () {

        expenses.splice(index, 1);

        localStorage.setItem(
            "expenses",
            JSON.stringify(expenses)
        );

        expenseCard.remove();

        updateTotal();

    });

    expenseContainer.appendChild(expenseCard);

}

// Add Expense

addExpenseBtn.addEventListener("click", function () {

    const expense = expenseName.value.trim();
    const expenseAmount = amount.value.trim();
    const expenseCategory = category.value;
    const expenseDate = date.value;

    // Validation
    if (
        expense === "" ||
        expenseAmount === "" ||
        expenseCategory === "" ||
        expenseDate === ""
    ) {
        alert("Please fill all fields.");
        return;
    }

    // Create Object
    const newExpense = {
        name: expense,
        amount: Number(expenseAmount),
        category: expenseCategory,
        date: expenseDate
    };

    // Store in Array
    expenses.push(newExpense);

    // Save in Local Storage
    localStorage.setItem(
        "expenses",
        JSON.stringify(expenses)
    );

    // Clear Old Cards
    expenseContainer.innerHTML = "";

    // Create All Cards Again
    expenses.forEach(function (expense, index) {

        createExpenseCard(expense, index);

    });

    // Update Total
    updateTotal();

    // Clear Input Fields
    expenseName.value = "";
    amount.value = "";
    category.value = "";
    date.value = "";

});


// Search Expense

searchExpense.addEventListener("input", function () {

    const searchText = searchExpense.value.toLowerCase();

    const cards = document.querySelectorAll(".expense-card");

    cards.forEach(function (card) {

        const title = card.querySelector("h3").textContent.toLowerCase();

        if (title.includes(searchText)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});

// Filter Expense

filterCategory.addEventListener("change", function () {

    const selectedCategory = filterCategory.value;

    const cards = document.querySelectorAll(".expense-card");

    cards.forEach(function (card) {

        const cardCategory = card.getAttribute("data-category");

        if (
            selectedCategory === "All" ||
            selectedCategory === cardCategory
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});

// Search Expense

searchExpense.addEventListener("input", function () {

    const searchText = searchExpense.value.toLowerCase();

    const cards = document.querySelectorAll(".expense-card");

    cards.forEach(function (card) {

        const title = card.querySelector("h3").textContent.toLowerCase();

        if (title.includes(searchText)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});

// Filter Expense

filterCategory.addEventListener("change", function () {

    const selectedCategory = filterCategory.value;

    const cards = document.querySelectorAll(".expense-card");

    cards.forEach(function (card) {

        const cardCategory = card.getAttribute("data-category");

        if (
            selectedCategory === "All" ||
            selectedCategory === cardCategory
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});