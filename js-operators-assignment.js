// =============================================================================
// Assignment: JavaScript Operators
// File: js-operators-assignment.js
// =============================================================================

// =============================================================================
// Part A: Arithmetic Operators
// =============================================================================

// -----------------------------------------------------------------------------
// 1. Addition (+)
// -----------------------------------------------------------------------------

// Problem 1: A school collected ₹15,000 from one class and ₹12,500 from another class. Find the total collection.
let class1Collection = 15000;
let class2Collection = 12500;
let totalCollection = class1Collection + class2Collection;
console.log("Total collection: ₹" + totalCollection);

// Problem 2: A person reads 18 pages in the morning and 25 pages in the evening. Find the total pages read.
let morningPages = 18;
let eveningPages = 25;
let totalPagesRead = morningPages + eveningPages;
console.log("Total pages read: " + totalPagesRead);

// Problem 3: A shop sold 125 items on Monday and 178 items on Tuesday. Find the total items sold.
let mondaySales = 125;
let tuesdaySales = 178;
let totalItemsSold = mondaySales + tuesdaySales;
console.log("Total items sold: " + totalItemsSold);


// -----------------------------------------------------------------------------
// 2. Subtraction (-)
// -----------------------------------------------------------------------------

// Problem 1: A bus has 80 seats, and 53 seats are occupied. Find the number of empty seats.
let totalSeats = 80;
let occupiedSeats = 53;
let emptySeats = totalSeats - occupiedSeats;
console.log("Empty seats: " + emptySeats);

// Problem 2: A student has 500 marks and loses 35 marks due to incorrect answers. Find the final marks.
let initialMarks = 500;
let lostMarks = 35;
let finalMarks = initialMarks - lostMarks;
console.log("Final marks: " + finalMarks);

// Problem 3: A warehouse has 2,500 boxes and sends 875 boxes to a store. Find the remaining boxes.
let totalBoxes = 2500;
let boxesSent = 875;
let remainingBoxes = totalBoxes - boxesSent;
console.log("Remaining boxes: " + remainingBoxes);


// -----------------------------------------------------------------------------
// 3. Multiplication (*)
// -----------------------------------------------------------------------------

// Problem 1: One notebook costs ₹45. Calculate the cost of buying 8 notebooks.
let costPerNotebook = 45;
let numberOfNotebooks = 8;
let totalCost = costPerNotebook * numberOfNotebooks;
console.log("Total cost for 8 notebooks: ₹" + totalCost);

// Problem 2: A machine produces 120 bottles per hour. Calculate its production in 6 hours.
let productionPerHour = 120;
let hoursWorked = 6;
let totalProduction = productionPerHour * hoursWorked;
console.log("Total bottles produced in 6 hours: " + totalProduction);

// Problem 3: A garden has 7 rows with 15 plants in each row. Find the total number of plants.
let numberOfRows = 7;
let plantsPerRow = 15;
let totalPlants = numberOfRows * plantsPerRow;
console.log("Total plants in the garden: " + totalPlants);


// -----------------------------------------------------------------------------
// 4. Division (/)
// -----------------------------------------------------------------------------

// Problem 1: A teacher distributes 144 pencils equally among 12 students. Find the number of pencils each student receives.
let totalPencils = 144;
let totalStudents = 12;
let pencilsPerStudent = totalPencils / totalStudents;
console.log("Pencils per student: " + pencilsPerStudent);

// Problem 2: A train travels 360 kilometres in 6 hours. Find its average distance travelled per hour.
let totalDistance = 360; // in km
let totalHours = 6;
let averageDistancePerHour = totalDistance / totalHours;
console.log("Average distance travelled per hour: " + averageDistancePerHour + " km/h");

// Problem 3: A company distributes ₹72,000 equally among 9 departments. Find the amount received by each department.
let totalAmount = 72000;
let numberOfDepartments = 9;
let amountPerDepartment = totalAmount / numberOfDepartments;
console.log("Amount received by each department: ₹" + amountPerDepartment);


// -----------------------------------------------------------------------------
// 5. Modulus (%)
// -----------------------------------------------------------------------------

// Problem 1: A teacher has 53 students and forms groups of 5. Find the number of students left over.
let groupTotalStudents = 53;
let groupSize = 5;
let studentsLeftOver = groupTotalStudents % groupSize;
console.log("Students left over: " + studentsLeftOver);

// Problem 2: A shop has 128 candies and packs 10 candies in each box. Find the number of candies left unpacked.
let totalCandies = 128;
let candiesPerBox = 10;
let candiesLeftUnpacked = totalCandies % candiesPerBox;
console.log("Candies left unpacked: " + candiesLeftUnpacked);

// Problem 3: A number is given by the user. Check whether it is even or odd using the modulus operator.
let givenNumber = 17; // Change this value to test any number
let remainder = givenNumber % 2;
let isEven = remainder === 0;
console.log("Number: " + givenNumber);
console.log("Remainder when divided by 2: " + remainder);
console.log("Is the number even? " + isEven + " (false means odd)");


// -----------------------------------------------------------------------------
// 6. Exponentiation (**)
// -----------------------------------------------------------------------------

// Problem 1: Find the volume of a cube with a side length of 6 cm using side ** 3.
let cubeSide = 6;
let cubeVolume = cubeSide ** 3;
console.log("Volume of the cube: " + cubeVolume + " cubic cm");

// Problem 2: A bacteria culture doubles every hour. Calculate the number of bacteria after 4 hours using exponentiation.
let initialBacteria = 1;
let doublingHours = 4;
let totalBacteria = initialBacteria * (2 ** doublingHours);
console.log("Total bacteria after 4 hours: " + totalBacteria);

// Problem 3: Calculate the total number of cells in a square arrangement with 9 cells on each side using side ** 2.
let sideCells = 9;
let totalCells = sideCells ** 2;
console.log("Total cells in square arrangement: " + totalCells);

