function toCamelCase(s) {
  const words = s.split(/[\s\-_]+/).filter(Boolean);

  return words
    .map((word, i) => {
      const lower = word.toLowerCase();
      if (i === 0) return lower;
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join("");
}
const tests = [
  ["hello world", "helloWorld"],
  ["HELLO WORLD", "helloWorld"],
  ["secret agent-X", "secretAgentX"],
  ["FREE cODE cAMP", "freeCodeCamp"],
  [
    "ye old-_-sea faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk",
    "yeOldSeaFaringBuccaneerWithAPegLegAndAParrotNamedSquawk",
  ],
];

tests.forEach(([input, expected]) => {
  const result = toCamelCase(input);
  const status = result === expected ? "✓" : "✗";
  console.log(`${status} toCamelCase(${JSON.stringify(input)}) → "${result}"`);
});