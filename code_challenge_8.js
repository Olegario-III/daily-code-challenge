function factorial(n) {
  // Handle base case: factorial of 0 is 1
  if (n === 0) {
    return 1;
  }

  let result = 1;

  // Multiply all numbers from 1 to n
  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log("Factorial Tests:");
console.log("factorial(0)  =", factorial(0));   // Should be 1
console.log("factorial(5)  =", factorial(5));   // Should be 120
console.log("factorial(20) =", factorial(20));  // Should be 2432902008176640000

console.log("\nAdditional tests:");
console.log("factorial(1)  =", factorial(1));
console.log("factorial(10) =", factorial(10));
