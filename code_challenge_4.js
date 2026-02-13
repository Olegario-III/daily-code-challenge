function spaceJam(s) {
    return s.replace(/\s+/g, '').toUpperCase().split('').join('  ');
}

// Test cases
const tests = [
    ["freeCodeCamp",         "F  R  E  E  C  O  D  E  C  A  M  P"],
    [" free Code Camp ",     "F  R  E  E  C  O  D  E  C  A  M  P"],
    ["Hello World?!",        "H  E  L  L  O  W  O  R  L  D  ?  !"],
    ["C@t$ & D0g$",          "C  @  T  $  &  D  0  G  $"],
    ["allyourbase",          "A  L  L  Y  O  U  R  B  A  S  E"]
];

console.log("spaceJam Tests:");
tests.forEach(([input, expected], i) => {
    const result = spaceJam(input);
    const passed = result === expected;
    console.log(
        `${i + 1}. ${passed ? "PASS" : "FAIL"}` +
        `  "${input}" → "${result}"` +
        (passed ? " ✓" : ` (expected "${expected}")`)
    );
});