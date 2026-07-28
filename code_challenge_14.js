function battle(yourArmy, opposingArmy) {
  /**
   * Simulate a battle between two armies represented as strings.
   *
   * Strength rules:
   * - a-z → 1-26
   * - A-Z → 27-52
   * - 0-9 → face value
   * - everything else → 0
   */

  function strength(c) {
    if (c >= "a" && c <= "z") return c.charCodeAt(0) - 97 + 1;
    if (c >= "A" && c <= "Z") return c.charCodeAt(0) - 65 + 27;
    if (c >= "0" && c <= "9") return Number(c);
    return 0;
  }

  // Length check first
  if (yourArmy.length > opposingArmy.length) {
    return "Opponent retreated";
  }
  if (opposingArmy.length > yourArmy.length) {
    return "We retreated";
  }

  // Fight position by position
  let yourWins = 0;
  let theirWins = 0;

  for (let i = 0; i < yourArmy.length; i++) {
    const y = strength(yourArmy[i]);
    const t = strength(opposingArmy[i]);

    if (y > t) yourWins++;
    else if (t > y) theirWins++;
    // equal strength → neither gets a win
  }

  if (yourWins > theirWins) return "We won";
  if (theirWins > yourWins) return "We lost";
  return "It was a tie";
}

// --------------- Quick self-test ---------------
const tests = [
  ["Hello", "World", "We lost"],
  ["pizza", "salad", "We won"],
  ["C@T5", "D0G$", "We won"],
  ["kn!ght", "orc", "Opponent retreated"],
  ["PC", "Mac", "We retreated"],
  ["Wizards", "Dragons", "It was a tie"],
  ["Mr. Smith", "Dr. Jones", "It was a tie"],
];

tests.forEach(([yours, theirs, expected]) => {
  const result = battle(yours, theirs);
  const status = result === expected ? "✓" : "✗";
  console.log(`${status} battle("${yours}", "${theirs}") → "${result}"  (expected "${expected}")`);
});