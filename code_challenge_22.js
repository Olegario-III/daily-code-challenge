function getLongestWord(sentence) {
  const words = sentence.split(" ");
  let longest = "";

  for (const word of words) {
    // Remove periods when calculating length
    const cleaned = word.replace(/\./g, "");

    // Keep the first word in case of a tie
    if (cleaned.length > longest.length) {
      longest = cleaned;
    }
  }

  return longest;
}