// ==========================================
// CHAPTER 10: IF STATEMENTS SOLUTIONS
// ==========================================

function runBasicIf() {
    // Basic if statement checking user prompt against string "Vatican"
    var x = prompt("Where does the Pope live?");
    
    if (x === "Vatican") {
        alert("Correct!"); // Triggers if user enters "Vatican"[cite: 21]
    } else {
        alert("Incorrect! Try again.");
    }
}

function runVariableIf() {
    // if statement using variables for comparison
    var correctAnswer = "Vatican";
    var userAns = prompt("Where does the Pope live?");

    if (userAns === correctAnswer) {
        alert("Correct! (Matched with variable)");[cite: 21]
    } else {
        alert("Incorrect!");
    }
}

function runMultipleStatementsIf() {
    // Demonstrating multiple statements executing inside an if block when condition is met
    var correctAnswer = "Vatican";
    var userAns = prompt("Where does the Pope live?");

    if (userAns === correctAnswer) {
        alert("Correct!");[cite: 21]
        console.log("User answered correctly.");[cite: 21]
        document.write("<h1>Chapter 10 - Multiple Statements Output</h1>");
        document.write("User answered correctly! Condition met.<br><br>");
        document.write("<a href='chapter10.html'>Go Back</a>");
    } else {
        alert("Incorrect answer.");
    }
}