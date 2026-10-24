// // Q1

// // Q2
// function greetStudent(name) {
//     return "Hello " + name + ", welcome to CodingGita!";
// }
// console.log(greetStudent("Apoorv"));
// console.log(greetStudent("Riya"));

// // Q3
// console.log(sayHello("Apoorv"));
// function sayHello(name) {
//     return "Hello " + name;
// }

// // Q4
// let calculateAverage = function(a, b, c) {
//     return (a + b + c) / 3;
// };
// console.log(calculateAverage(80, 90, 70));

// // Q5
// function multiply(x, y) {   // x, y are parameters
//     return x * y;
// }
// console.log(multiply(12, 5));  // 12, 5 are arguments

// // Q6
// function isEven(num) {
//     return num % 2 === 0;
// }
// console.log(isEven(24));
// console.log(isEven(17));

// // Q7
// function findPercentage(obtainedMarks, totalMarks) {
//     return (obtainedMarks / totalMarks) * 100;
// }
// console.log(findPercentage(456, 500));

// // Q8
// function noReturn() {
//     let x = 10 + 20;
// }
// console.log(noReturn());

// // Q9
// let calculateSimpleInterest = function(principal, rate, time) {
//     return (principal * rate * time) / 100;
// };
// console.log(calculateSimpleInterest(10000, 5, 2));

// // Q10
// function studentMessage(name, marks) {
//     return "Student " + name + " has scored " + marks + " marks.";
// }
// console.log(studentMessage("Apoorv", 92));
// console.log(studentMessage("Riya", 85));

// // Q11
// // b)
// function displayAge() {
//     let age = 20;
//     console.log(age);
// }
// displayAge();

// let course = "JavaScript";
// function showCourse() {
//     console.log(course);
// }
// showCourse();

// // Q12
// function analyzeStudent(name, m1, m2, m3) {
//     let total = m1 + m2 + m3;
//     let average = total / 3;
//     return name + " scored total " + total + " with average " + average.toFixed(2);
// }
// console.log(analyzeStudent("Apoorv", 85, 90, 78));
// console.log(analyzeStudent("Riya", 92, 88, 95));

// // Q13
// function studentReport(name, s1, s2, s3) {
//     function total() {
//         return s1 + s2 + s3;
//     }
//     return name + " total marks: " + total();
// }
// console.log(studentReport("Apoorv", 85, 90, 78));

// // Q14
// function generateReport(name, m1, m2, m3) {
//     let total = m1 + m2 + m3;
//     let average = total / 3;
//     let result = average >= 40 ? "Pass" : "Fail";
//     return "Name: " + name + " | Total: " + total + " | Average: " + average.toFixed(2) + " | Result: " + result;
// }
// console.log(generateReport("Apoorv", 85, 90, 78));
// console.log(generateReport("Riya", 20, 15, 25));

// // Q15
// function sumOfThree(a, b, c) {
//     return a + b + c;
// }
// console.log(sumOfThree(10, 20, 30));

// let averageOfTwo = function(x, y) {
//     return (x + y) / 2;
// };
// console.log(averageOfTwo(80, 90));

// function maxOfTwo(a, b) {
//     return a > b ? a : b;
// }
// console.log(maxOfTwo(45, 78));

// function fullName(first, last) {
//     return first + " " + last;
// }
// console.log(fullName("Apoorv", "Sharma"));

// // Q16
// let calculateGrade = function(percentage) {
//     if (percentage >= 90) return "A+";
//     if (percentage >= 80) return "A";
//     if (percentage >= 70) return "B";
//     if (percentage >= 60) return "C";
//     if (percentage >= 40) return "D";
//     return "F";
// };
// console.log(calculateGrade(95));
// console.log(calculateGrade(82));
// console.log(calculateGrade(67));
// console.log(calculateGrade(45));
// console.log(calculateGrade(32));

// // Q17
// function calculateFinalPrice(price, discountPercent) {
//     return price - (price * discountPercent / 100);
// }
// console.log(calculateFinalPrice(2500, 15));
// console.log(calculateFinalPrice(1200, 10));

// // Q18
// let celsiusToFahrenheit = function(c) {
//     return (c * 9 / 5) + 32;
// };
// console.log(celsiusToFahrenheit(0));
// console.log(celsiusToFahrenheit(37));

// let fahrenheitToCelsius = function(f) {
//     return (f - 32) * 5 / 9;
// };
// console.log(fahrenheitToCelsius(98.6));
// console.log(fahrenheitToCelsius(32));

// // Q19
// function calculateBill(items, taxRate) {
//     function subtotal() {
//         let sum = 0;
//         for (let i = 0; i < items.length; i++) {
//             sum += items[i];
//         }
//         return sum;
//     }
//     let sub = subtotal();
//     let tax = sub * taxRate / 100;
//     return "Subtotal: " + sub + " | Tax: " + tax + " | Total: " + (sub + tax);
// }
// console.log(calculateBill([250, 400, 150], 18));

// // Q20
function processStudent(name, m1, m2, m3) {
    function calcResults() {
        let total = m1 + m2 + m3;
        let average = total / 3;
        return { total: total, average: average };
    }
    let results = calcResults();
    let status = results.average >= 40 ? "Pass" : "Fail";
    return name + " | Total: " + results.total + " | Average: " + results.average.toFixed(2) + " | Status: " + status;
}
console.log(processStudent("Apoorv", 85, 90, 78));
console.log(processStudent("Riya", 92, 88, 95));
console.log(processStudent("Karan", 20, 15, 25));

function compareAverages(avg1, avg2) {
    if (avg1 > avg2) return "First average (" + avg1 + ") is higher";
    if (avg2 > avg1) return "Second average (" + avg2 + ") is higher";
    return "Both averages are equal (" + avg1 + ")";
}
console.log(compareAverages(84.33, 91.67));
console.log(compareAverages(75, 75));
