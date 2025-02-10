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

// Task 5 - Business Loan Interst Calculation
function calculateLoanInterest(principal, rate, years) {
    let interest = principal * rate * years;// Calculates the interest amounts from parameters
    console.log(`Total Interest: $${interest.toFixed(2)}`);// Returns the total interest 
};

calculateLoanInterest(1000, 0.05, 3); // Expected output: "Total Interest: $150.00"
calculateLoanInterest(5000, 0.07, 5); // Expected output: "Total Interest: $1750.00"