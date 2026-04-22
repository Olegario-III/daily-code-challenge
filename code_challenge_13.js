function isUnnaturalPrime(n) {
if (n === 0 || n === 1 || n === -1) return false;

  let num = Math.abs(n);

  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}
