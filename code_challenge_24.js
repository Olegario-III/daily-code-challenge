function tooMuchScreenTime(hours) {
  // 1. Any single day has 10 or more hours
  if (hours.some(h => h >= 10)) {
    return true;
  }

  // 2. Average of any three consecutive days >= 8
  for (let i = 0; i <= 4; i++) {
    const avg = (hours[i] + hours[i + 1] + hours[i + 2]) / 3;
    if (avg >= 8) {
      return true;
    }
  }

  // 3. Average of the whole week >= 6
  const total = hours.reduce((sum, h) => sum + h, 0);
  if (total / 7 >= 6) {
    return true;
  }

  return false;
}