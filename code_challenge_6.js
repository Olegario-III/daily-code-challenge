function areAnagrams(str1, str2) {
  console.log(`\nComparing: "${str1}"  vs  "${str2}"`);

  // Step 1: Clean the strings (remove spaces + lowercase)
  const clean1 = str1.toLowerCase().replace(/\s+/g, '');
  const clean2 = str2.toLowerCase().replace(/\s+/g, '');

  console.log("Cleaned version 1:", clean1);
  console.log("Cleaned version 2:", clean2);

  // Step 2: Quick length check
  if (clean1.length !== clean2.length) {
    console.log(`→ Lengths different (${clean1.length} vs ${clean2.length}) → NOT anagrams`);
    return false;
  }

  console.log("Lengths match ✓");

  // Step 3: Sort and compare (most visual way to see it)
  const sorted1 = clean1.split('').sort().join('');
  const sorted2 = clean2.split('').sort().join('');

  console.log("Sorted version 1:", sorted1);
  console.log("Sorted version 2:", sorted2);

  const result = sorted1 === sorted2;

  console.log(result 
    ? "→ They match! → YES, anagrams 🎉" 
    : "→ They don't match → NOPE 😕");

  return result;
}

// ────────────────────────────────────────
//          Test it right away
// ────────────────────────────────────────

console.log("=".repeat(50));

areAnagrams("listen", "silent");
areAnagrams("School master", "The classroom");
areAnagrams("A gentleman", "Elegant man");
areAnagrams("Hello", "World");
areAnagrams("apple", "banana");
areAnagrams("cat", "dog");

console.log("=".repeat(50));