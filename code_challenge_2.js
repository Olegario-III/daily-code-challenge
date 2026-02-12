function isValidNumber(n, base) {
    if (base < 2 || base > 36) return false;
    if (!n || n.length === 0) return false;

    const str = n.toUpperCase();

    for (let char of str) {
        let value;
        if (char >= '0' && char <= '9') {
            value = char.charCodeAt(0) - 48;
        } else if (char >= 'A' && char <= 'Z') {
            value = 10 + char.charCodeAt(0) - 65;
        } else {
            return false;
        }
        if (value >= base) {
            return false;
        }
    }
    return true;
}

// Test cases
const tests = [
    ["10101", 2, true],
    ["10201", 2, false],
    ["76543210", 8, true],
    ["9876543210", 8, false],
    ["9876543210", 10, true],
    ["ABC", 10, false],
    ["ABC", 16, true],
    ["Z", 36, true],
    ["ABC", 20, true],
    ["4B4BA9", 16, true],
    ["5G3F8F", 16, false],
    ["5G3F8F", 17, true],
    ["abc", 10, false],
    ["abc", 16, true],
    ["AbC", 16, true],
    ["z", 36, true],
];

console.log("Testing isValidNumber:");
for (const [input, base, expected] of tests) {
    const result = isValidNumber(input, base);
    const pass = result === expected;
    console.log(
        `${pass ? "PASS" : "FAIL"} | "${input}" base ${base} → ${result} ` +
        `(expected ${expected})`
    );
}