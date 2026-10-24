// // Q1
// // city -> global scope
// // country -> function scope
// // Yes, both accessible inside display()
// // [-----------------------------------------------------------------------------]
// // Q2
// // Output: 550, 500
// // [-----------------------------------------------------------------------------]
// // Q3
// // college -> global
// // name -> function (student)
// // age -> function (student)
// // subject -> function (teacher)
// // [-----------------------------------------------------------------------------]
// // Q4
// // ReferenceError: number is not defined
// // number is local to first(), not accessible in second()
// // [-----------------------------------------------------------------------------]
// // Q5
// let appName = "CodingGita";
// function showInfo() {
//     var version = "2.0";
//     console.log(appName);
//     console.log(version);
// }
// showInfo();
// console.log(appName);
// // [-----------------------------------------------------------------------------]
// // Q6
// // Output: I like Cricket, Cricket
// // [-----------------------------------------------------------------------------]
// // Q7
// // Output: English, Gujarati, Gujarati
// // changeLanguage() modifies the global variable directly
// // [-----------------------------------------------------------------------------]
// // Q8
// // No error. var marks is hoisted, and displayMarks() is called after assignment
// // [-----------------------------------------------------------------------------]
// // Q9
// // Output: Favorite color: Red, Red
// // console.log(message) causes ReferenceError: message is function-scoped
// // [-----------------------------------------------------------------------------]
// // Q10
// let school = "Sunrise School";
// function showSchool() {
//     console.log(school);
// }
// function updateSchool() {
//     school = "Green Valley School";
// }
// showSchool();
// updateSchool();
// showSchool();
// console.log(school);
// // [-----------------------------------------------------------------------------]
// // Q11
// // Output: 300
// // console.log(first) -> ReferenceError: first is function-scoped
// // [-----------------------------------------------------------------------------]
// // Q12
// // ReferenceError: salary is not defined (function-scoped)
// // [-----------------------------------------------------------------------------]
// // Q13
// // Output: 25, 15
// // Local var number shadows global, doesn't change it
// // [-----------------------------------------------------------------------------]
// // Q14
// // Output: 50, 50
// // Yes, new local variable created each call
// // No, local variable not accessible after function finishes
// // [-----------------------------------------------------------------------------]
// // Q15
// function calculateArea() {
//     let length = 8;
//     let width = 4;
//     console.log(length * width);
// }
// calculateArea();
// // [-----------------------------------------------------------------------------]
// // Q16
// // Output: Success
// // var has no block scope, hoisted to function/global scope
// // [-----------------------------------------------------------------------------]
// // Q17
// // Output: 2
// // var doesn't have block scope, inner declaration overwrites outer

// // Q18
// // Output: End
// // No, standalone block does not create separate scope for var
// // [-----------------------------------------------------------------------------]
// // Q19
// // Output: undefined
// // var declaration hoisted but assignment doesn't execute (condition false)
// // [-----------------------------------------------------------------------------]
// // Q20
// if (true) {
//     let secret = "Hidden";
// }
// // console.log(secret); // ReferenceError
// // let has block scope, secret not accessible outside if block
// // [-----------------------------------------------------------------------------]
// // Q21
// // Output: 2, 4, 6, Final: 8
// // var has no block scope, number accessible after loop
// // [-----------------------------------------------------------------------------]
// // Q22
// // Output: 1, 2, 3, Count: 4
// // Loop's var count overwrites original count
// // [-----------------------------------------------------------------------------]
// // Q23
// // Output: 5, 4, 3, After loop: 2
// // Yes, i accessible after loop (var has no block scope)
// // [-----------------------------------------------------------------------------]
// // Q24
// // Output: Item: 1, Item: 2, Item: 3, Last item: 4
// // No error. item is 4 after loop ends
// // [-----------------------------------------------------------------------------]
// // Q25
// for (let step = 1; step <= 4; step++) {
//     console.log(step);
// }
// // console.log(step); // ReferenceError
// // let has block scope, step not accessible outside loop
// // [-----------------------------------------------------------------------------]
// // Q26
// // Output: 10, 20, 30, Final: 4
// // number is function-scoped, accessible after loop but not outside function
// // [-----------------------------------------------------------------------------]
// // Q27
// // Output: 60, 70, 80, 90
// // console.log(marks) outside function -> ReferenceError (function-scoped)
// // [-----------------------------------------------------------------------------]
// // Q28
// // Output: 5, 6, 7, Final value: 8
// // Loop executes 3 times
// // [-----------------------------------------------------------------------------]
// // Q29
// // console.log(i) -> ReferenceError: i is function-scoped inside calculate()
// // Order matters: i doesn't exist in outer scope
// // [-----------------------------------------------------------------------------]
// // Q30
// function printNumbers() {
//     for (let num = 1; num <= 5; num++) {
//         console.log(num);
//     }
//     console.log(num);
// }
// printNumbers();
// // console.log(num); // ReferenceError (function-scoped)
// // [-----------------------------------------------------------------------------]
// // Q31
// // Output: undefined, 90
// // var declaration hoisted, assignment stays in place
// // [-----------------------------------------------------------------------------]
// // Q32
// // Output: undefined, 20
// // Local var a shadows global a, hoisted as undefined inside function
// // [-----------------------------------------------------------------------------]
// // Q33
// // Output: undefined, undefined, 100, 200
// // First two are hoisted declarations (undefined), last two after assignment
// // [-----------------------------------------------------------------------------]
// // Q34
// // Output: undefined, 50
// // Hoisted: var total; -> undefined, then total = 50 -> 50
// // [-----------------------------------------------------------------------------]
// // Q35
// // Output: undefined, 100
// // Local var price hoisted inside function, shadows global price
// // Global price remains unchanged
// // [-----------------------------------------------------------------------------]
// // Q36
// sayHello();
// function sayHello() {
//     console.log("Hello from CodingGita");
// }
// // Function declarations are fully hoisted (name + body)
// // [-----------------------------------------------------------------------------]
// // Q37
// display2();
// function display2() {
//     console.log("Function is hoisted completely");
// }
// // Unlike var (only declaration hoisted), function declarations hoisted entirely
// // [-----------------------------------------------------------------------------]
// // Q38
// // greet() -> TypeError: greet is not a function
// // var greet hoisted as undefined, calling undefined as function throws TypeError
// var greet = function() {
//     console.log("Hi");
// };
// greet();
// // [-----------------------------------------------------------------------------]
// // Q39
// console.log(typeof myFunc); // Output: function
// function myFunc() {
//     return "I am hoisted";
// }
// console.log(myFunc()); // Output: I am hoisted
// // [-----------------------------------------------------------------------------]
// // Q40
// showWelcome();
// var welcomeMsg = "Welcome to CodingGita!";
// function showWelcome() {
//     console.log(welcomeMsg); // Output: undefined
// }
// // Function hoisted fully, but var welcomeMsg only declaration hoisted
// // [-----------------------------------------------------------------------------]
// // Q41
// // Output: 2025, CSE, CodingGita
// // Scope chain: batch -> department -> global
// // [-----------------------------------------------------------------------------]
// // Q42
// // Output: I am global, I am outer
// // console.log(innerVar) -> ReferenceError: not found in any scope
// // [-----------------------------------------------------------------------------]
// // Q43
// // Output: 1 2 3
// // All accessible via scope chain: a(global), b(level1), c(level2)
// // [-----------------------------------------------------------------------------]
// // Q44
// // Output: first, global
// // Scope chain looks up from innermost to outermost
// // [-----------------------------------------------------------------------------]
// // Q45
// (function() {
//     let country = "India";
//     function state() {
//         let stateName = "Gujarat";
//         function city() {
//             let cityName = "Surat";
//             console.log(cityName);
//             console.log(stateName);
//             console.log(country);
//         }
//         city();
//     }
//     state();
// })();
// // [-----------------------------------------------------------------------------]
// // Q46
// // Output: 90, 50
// // Shadowing: local variable with same name hides outer variable within that scope
// // [-----------------------------------------------------------------------------]
// // Q47
// // Output: Local Name, Global Name
// // No, local variable doesn't change global, only shadows it inside function
// // [-----------------------------------------------------------------------------]
// // Q48
// // Output: 20, 20
// // Without var, modifies the outer variable instead of creating local one
// // [-----------------------------------------------------------------------------]
// // Q49
// // Output: Inside: Red, Outside: Blue
// // [-----------------------------------------------------------------------------]
// // Q50
// (function() {
//     let marks = 70;
//     function showMarks() {
//         let marks = 95;
//         console.log("Inside function:", marks);
//     }
//     showMarks();
//     console.log("Outside function:", marks);
// })();
// // [-----------------------------------------------------------------------------]
// // Q51
// // Output: Jenil, Kartik Sir
// // teacher and student not accessible outside outer()
// // [-----------------------------------------------------------------------------]
// // Q52
// // Output: Parent, Child, Grandchild
// // [-----------------------------------------------------------------------------]
// // Q53
// // inner() outside outer() -> ReferenceError
// // inner is scoped inside outer, must be called from within
// // [-----------------------------------------------------------------------------]
// // Q54
// // Output: Hello students
// // Closure: inner function retains access to outer function's variables
// // [-----------------------------------------------------------------------------]
// // Q55
// function studentInfo() {
//     let name = "Apoorv";
//     let course = "JavaScript";
//     function display() {
//         console.log(name);
//         console.log(course);
//     }
//     display();
// }
// studentInfo();
// // [-----------------------------------------------------------------------------]
// // Q56
// // Output: 100
// // Missing var creates accidental global variable
// // [-----------------------------------------------------------------------------]
// // Q57
// // Output: 20
// // Beginners expect error thinking if-block creates scope, but var ignores block scope
// // [-----------------------------------------------------------------------------]
// // Q58
// // Output: undefined
// // No ReferenceError, var declaration hoisted, value undefined until assigned
// // [-----------------------------------------------------------------------------]
// // Q59
// // Output: 20
// // var allows re-declaration, can cause accidental overwrites
// // [-----------------------------------------------------------------------------]
// // Q60
// function calculateFixed() {
//     let total = 0;
//     for (let i = 1; i <= 5; i++) {
//         total = total + i;
//     }
//     console.log(total);
// }
// calculateFixed();
// // console.log(total); // ReferenceError (properly scoped now)
// // [-----------------------------------------------------------------------------]