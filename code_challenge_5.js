function jbelmu(text) {
    return text
        .split(' ')
        .map(word => {
            if (word.length <= 2) return word;
            const first = word[0];
            const last = word[word.length - 1];
            const middle = word.slice(1, -1).split('').sort().join('');
            return first + middle + last;
        })
        .join(' ');
}

// Test cases
const tests = [
    ["hello world", "hello wlord"],
    ["i love jumbled text", "i love jbelmud text"],
    ["freecodecamp is my favorite place to learn to code", "faccdeeemorp is my faiortve pacle to laern to cdoe"],
    ["the quick brown fox jumps over the lazy dog", "the qciuk borwn fox jmpus oevr the lazy dog"]
];

console.log("jbelmu Tests:");
tests.forEach(([input, expected], i) => {
    const result = jbelmu(input);
    const passed = result === expected;
    console.log(
        `${i + 1}. ${passed ? "PASS" : "FAIL"}` +
        `  "${input}" → "${result}"` +
        (passed ? " ✓" : ` (expected "${expected}")`)
    );
});