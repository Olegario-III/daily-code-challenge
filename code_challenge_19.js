function secondLargest(arr) {
  // Remove duplicates
  const unique = [...new Set(arr)];

  // Sort from largest to smallest
  unique.sort((a, b) => b - a);

  // Return the second element
  return unique[1];
}