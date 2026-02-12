function fibonacciSequence(startSequence, length) {
    if (length === 0) return [];
    
    const result = startSequence.slice(0, length);
    
    while (result.length < length) {
        const next = result[result.length - 1] + result[result.length - 2];
        result.push(next);
    }
    
    return result;
}

// Test cases
const tests = [
    {
        input: [[0, 1], 20],
        expected: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]
    },
    {
        input: [[21, 32], 1],
        expected: [21]
    },
    {
        input: [[0, 1], 0],
        expected: []
    },
    {
        input: [[10, 20], 2],
        expected: [10, 20]
    },
    {
        input: [[123456789, 987654321], 5],
        expected: [123456789, 987654321, 1111111110, 2098765431, 3209876541]
    }
];

console.log("Fibonacci Sequence Tests:");
tests.forEach((test, index) => {
    const result = fibonacciSequence(...test.input);
    const passed = JSON.stringify(result) === JSON.stringify(test.expected);
    
    console.log(
        `${index + 1}. ${passed ? "PASS" : "FAIL"}` +
        `  →  ${JSON.stringify(result)}` +
        (passed ? " ✓" : ` (expected ${JSON.stringify(test.expected)})`)
    );
});