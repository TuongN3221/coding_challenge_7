// Task 1 - Customer Invoice Calculation
function calculateInvoice(subtotal, taxRate, discount) {    
    let total = (subtotal + (subtotal * taxRate) - discount);// Calculates the invoice total
    console.log(`Total: $${total}`);
};// Sets up function that calculoates the invoice amount

calculateInvoice(100, 0.08, 5); // Expected output: "Total Invoice: $103.00"
calculateInvoice(500, 0.1, 20); // Expected output: "Total Invoice: $530.00"

// Task 2 -Employee Hourly Wage Calculation
function calculateHourlyWage(salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek * 52);// Calculates the hourly wage
    console.log(`Hourly Wage: $${hourlyWage.toFixed(2)}`);
}

calculateHourlyWage(52000, 40); // Expected output: "Hourly Wage: $25.00"
calculateHourlyWage(75000, 35); // Expected output: "Hourly Wage: $41.21"

// Task 3 - Customer Loyalty Discount
const calculateLoyaltyDiscount = (amount, years) => {
    let loyalty = 0;
    if (years >= 5) loyalty = amount * 0.15;// Variables to determine loyalty lengths, 5 years or more
    else if (years >= 3) loyalty = amount * 0.10;// Greater than or equal to 3 years
    else loyalty = amount * 0.05;// less than 3 years
    
    const discountPrice = amount - loyalty;// Calculates discount by amount and years
    console.log(`Discounted Price: (${discountPrice})`);
};

calculateLoyaltyDiscount(100, 6); // Expected output: "Discounted Price: $85.00"
calculateLoyaltyDiscount(200, 2); // Expected output: "Discounted Price: $190.00"

// Task 4 -Product Shipping Cost Calculation
function calculateShippingCost(weight, location, expedited = false) {
    let shippingCost = 0;

    if (location === "USA") {
         shippingCost = 5 + (0.5 * weight);
    } else if (location === "Canada") {
        shippingCost = 10 + (0.7 * weight);
    } else {
        return "Invalid Location";
    }// Calculates cost based on location

    if (expedited) {
        shippingCost += 10;
    }// Checks if package is expedited and add expedite cost to total
    return `Shipping Cost: $${shippingCost.toFixed(2)}`;
};

console.log(calculateShippingCost(10, "USA", true)); // Expected output: "Shipping Cost: $20.00"
console.log(calculateShippingCost(5, "Canada", false)); // Expected output: "Shipping Cost: $13.50"


// Task 5 - Business Loan Interst Calculation
function calculateLoanInterest(principal, rate, years) {
    let interest = principal * rate * years;// Calculates the interest amounts from parameters
    console.log(`Total Interest: $${interest.toFixed(2)}`);// Returns the total interest 
};

calculateLoanInterest(1000, 0.05, 3); // Expected output: "Total Interest: $150.00"
calculateLoanInterest(5000, 0.07, 5); // Expected output: "Total Interest: $1750.00"

// Task 6 - Filtering High-Value Transactions
let transactions = [500, 1200, 3000, 800, 2200];
function filterHighValueTransactions(transactions, filterFunction) {
    let filterTransactions = transactions.filter(filterFunction);
    console.log(`Filtered Transactions: ${filterTransactions}`);
};
filterHighValueTransactions(transactions, amount => amount > 1000); // filters the numbers from transactions array to return above 1000
// Expected output: [1200, 3000, 2200]

// Task 7 - Budget Tracker
function createBudgetTracker() {
    let totalExpense = 0;// Sets up empty expenses

    return function(expense) {
        totalExpense += expense;// Adds the expense to totalExpense
        return `Total Expenses: ${totalExpense}`;
    } 
};
let budget = createBudgetTracker();// Sets up empty budget with createBudgetTracker function
console.log(budget(200)); // Expected output: "Total Expenses: $200"
console.log(budget(150)); // Expected output: "Total Expenses: $350"

// Task 8 - Business Growth Projection
function calculateGrowth(years, revenue) {
    if (years >= 10) {
        return revenue
    };// Returns revenue if past year 10
    const growthRate = 0.05;
    const projectedRevenue = revenue * (1 + growthRate);// calculates projected revenue for next year 
    return calculateGrowth(years + 1, projectedRevenue);// Recursive call for the next year
};

function revenueFormat(revenue) {
    return `Projected Revenue: $${revenue.toFixed(2)}`
};// Function to format the output

console.log(revenueFormat(calculateGrowth(8, 1000))); // Expected output: "Projected Revenue: $1102.50"
console.log(revenueFormat(calculateGrowth(5, 5000))); // Expected output: "Projected Revenue: $6381.41"
