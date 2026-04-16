function squaresWithThree(n) {
    let count = 0;
    
    for (let i = 1; i <= n; i++) {
        const square = i * i;
        if (String(square).includes('3')) {
            count++;
        }
    }
    
    return count;
}

// ======================
// Test Cases with Console Logs
// ======================

console.log("Test 1: squaresWithThree(1)    →", squaresWithThree(1));
console.log("Test 2: squaresWithThree(10)   →", squaresWithThree(10));
console.log("Test 3: squaresWithThree(100)  →", squaresWithThree(100));
console.log("Test 4: squaresWithThree(1000) →", squaresWithThree(1000));
console.log("Test 5: squaresWithThree(10000)→", squaresWithThree(10000));

console.log("\nExpected Results:");
console.log("1     → 0");
console.log("10    → 1");
console.log("100   → 19");
console.log("1000  → 326");
console.log("10000 → 453");
