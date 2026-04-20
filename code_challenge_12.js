function decode(message, shift) {
    shift = ((shift % 26) + 26) % 26;
    
    let result = '';
    
    for (let char of message) {
        const code = char.charCodeAt(0);
        
        if (code >= 65 && code <= 90) {           // Uppercase
            let newCode = ((code - 65 - shift + 26) % 26) + 65;
            result += String.fromCharCode(newCode);
        }
        else if (code >= 97 && code <= 122) {     // Lowercase
            let newCode = ((code - 97 - shift + 26) % 26) + 97;
            result += String.fromCharCode(newCode);
        }
        else {
            result += char;                       // Keep unchanged
        }
    }
    
    return result;
}

// ==================== TEST CASES ====================

console.log("Test 1:", decode("Xlmw mw e wigvix qiwweki.", 4));
console.log("Expected: This is a secret message.\n");

console.log("Test 2:", decode("Byffi Qilfx!", 20));
console.log("Expected: Hello World!\n");

console.log("Test 3:", decode("Zqd xnt njzx?", -1));
console.log("Expected: Are you okay?\n");

console.log("Test 4:", decode("oannLxmnLjvy", 9));
console.log("Expected: freeCodeCamp");
