function findTarget(arr, target) {
  console.log(`\nArray: [${arr.join(", ")}]   Target: ${target}`);

  // Use a Map to store number → index
  const seen = new Map();

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const needed = target - current;

    console.log(`  Checking ${current} at index ${i} → looking for ${needed}`);

    if (seen.has(needed)) {
      const prevIndex = seen.get(needed);
      const indices = [prevIndex, i].sort((a, b) => a - b); // ensure ascending order
      console.log(`  → Found! ${needed} + ${current} = ${target} at indices [${indices}] 🎯`);
      return indices;
    }

    // Store current number and its index
    seen.set(current, i);
  }

  console.log("  → No pair found 😕");
  return "Target not found";
}

// ────────────────────────────────────────
//          Run all test cases
// ────────────────────────────────────────

console.log("=".repeat(60));

console.log(findTarget([2, 7, 11, 15], 9));
// Expected: [0, 1]

console.log(findTarget([3, 2, 4, 5], 6));
// Expected: [1, 2]

console.log(findTarget([1, 3, 5, 6, 7, 8], 15));
// Expected: [4, 5]

console.log(findTarget([1, 3, 5, 7], 14));
// Expected: "Target not found"

console.log("=".repeat(60));