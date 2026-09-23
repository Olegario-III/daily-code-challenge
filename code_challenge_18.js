function isPerfectSquare(n) {
  if (n < 0) return false;
  
  const sqrt = Math.sqrt(n);
  return Number.isInteger(sqrt);
}