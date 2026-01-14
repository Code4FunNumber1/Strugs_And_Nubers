/*
WEB_U1B2 — JavaScript Strings + Numbers
Pair Programming Lab: Strings & Numbers Boot Camp (NO FUNCTIONS YET)
Names: Jacob  Alan

Instructions:
- Complete each TODO (no functions in this lab).
- Run often and compare your output to the “EXPECTED OUTPUT” comments.
- Keep your code readable: small steps, good variable names.

Roles (switch halfway)
Driver: types, runs the code, shares screen/keyboard
Navigator: reads instructions, watches for mistakes, explains “why”
(Optional 3rd) Coach: tests edge cases, keeps time

0–3 min: Assign roles, create file, run it once.
3–20 min: Complete Parts A–C.
20 min: Switch Driver/Navigator.
20–37 min: Complete Parts D–E.
37–40 min: Clean up: confirm output matches expected, add names, push to GitHub.

Each person will turn in a complete copy. Make sure all work is present for both students.
When finished turn this in on GitHub and Canvas.

This portion is worth 15 points.
*/

console.log("\n=== WEB_U1B2 Pair Lab: Strings & Numbers (No Functions) ===\n");

// ============================================================
// PART A (3–8 min): Strings — build + inspect
// ============================================================

console.log("\n=== PART A: Strings ===\n");

let firstName = "Jacob";

let lastName = "Stephens";

let fullName = firstName + " " + lastName;

console.log(`Full Name: ${fullName}`);

console.log(`Length: ${fullName.length}`);

console.log(`First Char: ${firstName[0]}`);

console.log(`Last Char: ${fullName[fullName.length - 1]}`);

/*
EXPECTED OUTPUT (your name will differ):
Full name: Ada Lovelace
Length: 12
First char: A
Last char: e
*/

// ============================================================
// PART B (8–14 min): Strings — cleaning + searching
// ============================================================

console.log("\n=== PART B: Clean + Search ===\n");

// Example: "   NiCK Armstrong   "
let messyUsername = `  aHHHHHHHHHHHHHHHHah jfohe gf u  ; kdjoeifhbvbn `;

// TODO B2: Create cleanUsername by trimming spaces and lowercasing.
// Hint: messyUsername.trim().toLowerCase()
let cleanUsername = messyUsername.trim().toLowerCase();

cleanUsername = cleanUsername.replaceAll(" ", "_");

console.log(cleanUsername);

console.log(cleanUsername.includes("nick"));

let domain = "school.edu";

let email = `${cleanUsername}@${domain}`;

console.log(email);

/*
EXPECTED OUTPUT (if messyUsername was "   NiCK Armstrong   "):
Clean username: nick_armstrong
Includes 'nick': true
Email: nick_armstrong@school.edu
*/

// ============================================================
// PART C (14–20 min): Numbers — math, rounding, modulo
// ============================================================

console.log("\n=== PART C: Numbers ===\n");

let price = 5000.999;
let quantity = 1;

let cost = price * quantity;

console.log(cost);

console.log(cost.toFixed(2));

let quantityIsEven = (quantity % 2) === 0;

console.log(quantityIsEven);

// TODO C7: Create rand1to10 = random integer 1..10 inclusive
// Hint: Math.floor(Math.random() * 10) + 1
let rand1to10 = 0; // TODO

// TODO C8: Print: Random 1-10: <rand1to10>
console.log(""); // TODO

/*
EXPECTED OUTPUT (random will differ):
Cost raw: 11
Cost rounded: 11.00
Quantity is even: true
Random 1-10: <some number 1..10>
*/

// ===================== SWITCH ROLES @ 20 MIN =====================

// ============================================================
// PART D (20–30 min): Conversions + NaN
// ============================================================

console.log("\n=== PART D: Conversions + NaN ===\n");

// TODO D1: Create three “input” strings:
let inputA = ""; // TODO example: "12"
let inputB = ""; // TODO example: "3.5"
let inputC = ""; // TODO example: "nope"

// TODO D2: Convert inputA and inputB into numbers using Number()
let numA = 0; // TODO
let numB = 0; // TODO

// TODO D3: Print: A + B = <sum>
console.log(""); // TODO

// TODO D4: Convert inputC into a number (it might become NaN)
let numC = 0; // TODO

// TODO D5: Print: C as number: <numC>
console.log(""); // TODO

// TODO D6: Create cIsNaN using Number.isNaN(numC)
let cIsNaN = false; // TODO

// TODO D7: Print: C is NaN: <true/false>
console.log(""); // TODO

// TODO D8: Create safeC
// If cIsNaN is true, safeC should be 0. Otherwise safeC should be numC.
// Hint: use the ternary operator: condition ? valueIfTrue : valueIfFalse
let safeC = 0; // TODO

// TODO D9: Print: safeC: <safeC>
console.log(""); // TODO

/*
EXPECTED OUTPUT (if inputA="12", inputB="3.5", inputC="nope"):
A + B = 15.5
C as number: NaN
C is NaN: true
safeC: 0
*/

// ============================================================
// PART E (30–37 min): Mini Receipt (no functions, just steps)
// ============================================================

console.log("\n=== PART E: Mini Receipt ===\n");

// TODO E1: Create item1Name (string) and item1Price (number)
let item1Name = ""; // TODO
let item1Price = 0; // TODO

// TODO E2: Create item2Name (string) and item2Price (number)
let item2Name = ""; // TODO
let item2Price = 0; // TODO

// TODO E3: Create taxRate (number). Example: 0.07
let taxRate = 0; // TODO

// TODO E4: Compute subtotal (add the two prices)
let subtotal = 0; // TODO

// TODO E5: Compute taxAmount = subtotal * taxRate
let taxAmount = 0; // TODO

// TODO E6: Compute total = subtotal + taxAmount
let total = 0; // TODO

// TODO E7: Print the receipt exactly in this format:
//
// Receipt
// Item: Soda  | Price: $1.50
// Item: Chips | Price: $2.00
// Subtotal: $3.50
// Tax:      $0.25
// Total:    $3.75
//
// Tips:
// - Use toFixed(2) on numbers for 2 decimals (money)
// - Use template literals: `text ${variable} more text`
//
// TODO E7a: Print "Receipt"
console.log(""); // TODO

// TODO E7b: Print item 1 line (use item1Name and item1Price.toFixed(2))
console.log(""); // TODO

// TODO E7c: Print item 2 line
console.log(""); // TODO

// TODO E7d: Print subtotal line
console.log(""); // TODO

// TODO E7e: Print tax line
console.log(""); // TODO

// TODO E7f: Print total line
console.log(""); // TODO

// ============================================================
// 37–40 min: CLEAN UP + REFLECTION (comments)
// ============================================================
//
// TODO REFLECTION 1: One string method you used today: ____________________________
// TODO REFLECTION 2: One number concept you used today (%, rounding, conversion, etc.): ____________________________
//
// TODO SUBMISSION: Add both names at the top, push to GitHub, submit on Canvas.
