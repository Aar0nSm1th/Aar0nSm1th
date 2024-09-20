document.addEventListener("DOMContentLoaded", function() {
    let results = [];

    while (true) {
        let x = prompt("Enter the first number:");
        if (x === null) break;
        x = parseFloat(x);

        let y = prompt("Enter the second number:");
        if (y === null) break;
        y = parseFloat(y);

        let operator = prompt("Enter an operator (+, -, *, /, %):");
        if (operator === null) break;

        let result;
        if (isNaN(x) || isNaN(y)) {
            result = "Error: Non-numeric input";
        } else {
            switch (operator) {
                case "+":
                    result = x + y;
                    break;
                case "-":
                    result = x - y;
                    break;
                case "*":
                    result = x * y;
                    break;
                case "/":
                    result = y !== 0 ? x / y : "Error: Division by zero";
                    break;
                case "%":
                    result = x % y;
                    break;
                default:
                    result = "Error: Invalid operator";
            }
        }

        results.push({ x, y, operator, result });
    }

    // Display the results table
    document.write("<table border='1'>");
    document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");
    results.forEach(entry => {
        document.write(`<tr><td>${entry.x}</td><td>${entry.operator}</td><td>${entry.y}</td><td>${entry.result}</td></tr>`);
    });
    document.write("</table>");

    // Calculate summary statistics
    let validResults = results.filter(entry => typeof entry.result === "number");
    if (validResults.length > 0) {
        let min = Math.min(...validResults.map(entry => entry.result));
        let max = Math.max(...validResults.map(entry => entry.result));
        let total = validResults.reduce((sum, entry) => sum + entry.result, 0);
        let avg = total / validResults.length;

        // Display the summary table
        document.write("<table border='1'>");
        document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
        document.write(`<tr><td>${min}</td><td>${max}</td><td>${avg}</td><td>${total}</td></tr>`);
        document.write("</table>");
    }
});
