function sumOfSquares(n) {
  
  let total = 0;                    // Start with 0

  for (let i = 1; i <= n; i++) {    // Count from 1 to n
    total = total + (i * i);        // Square the number and add it
  }

  return total;
}

// === Test it yourself in Codespaces ===
console.log("Sum of Squares Tests:");
console.log("sumOfSquares(5)   =", sumOfSquares(5));     // Should be 55
console.log("sumOfSquares(10)  =", sumOfSquares(10));    // Should be 385
console.log("sumOfSquares(25)  =", sumOfSquares(25));    // Should be 5525
console.log("sumOfSquares(500) =", sumOfSquares(500));   // Should be 41791750
console.log("sumOfSquares(1000)=", sumOfSquares(1000));  // Should be 333833500

console.log("\nAll tests completed!");
