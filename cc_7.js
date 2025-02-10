// Task 1 - Customer Invoice Calculation
function calculateInvoice(subtotal, taxRate, discount) {    
    let total = (subtotal + (subtotal * taxRate) - discount);
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