/*
WEB_U1B2 — JavaScript Strings + Numbers
Pair Programming Lab: Strings & Numbers Boot Camp (NO FUNCTIONS YET)
Names: Jacob  Alan

Instructions:
- Complete each
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

let rand1to10 = Math.floor(Math.random() * 10) + 1;

console.log(rand1to10);

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

let inputA = "12";
let inputB = "3.5";
let inputC = "nope";

let numA = Number(inputA);
let numB = Number(inputB);

console.log(`SUM: ${numA + numB}`);

let numC = Number(inputC);

console.log(inputC);

let cIsNaN = Number.isNaN(numC);

console.log(cIsNaN);

let safeC = cIsNaN ? 0 : numC

console.log(safeC);

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

let item1Name = "item";
let item1Price = 5.00;

let item2Name = "item2";
let item2Price = 10.00;

let taxRate = 0.07;

let subtotal = item1Price + item2Price;

let taxAmount = subtotal * taxRate;

let total = subtotal + taxAmount;


console.log(`Item: ${item1Name} | Price: $${item1Price}`);
console.log(`Item: ${item2Name} | Price: $${item2Price}`);
console.log(`Subtotal: $${subtotal}`);
console.log(`Tax: $${taxAmount}`);
console.log(`Total: $${total}`);
