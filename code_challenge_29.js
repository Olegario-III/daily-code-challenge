function moonPhase(dateStr) {
  // Reference new moon (day 1 of the cycle)
  const reference = new Date(Date.UTC(2000, 0, 6)); // January is month 0

  // Parse the given date as UTC
  const [year, month, day] = dateStr.split("-").map(Number);
  const target = new Date(Date.UTC(year, month - 1, day));

  // Calculate the number of days between the two dates
  const diffTime = target - reference;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  // Find the day within the 28-day cycle (1 to 28)
  const dayInCycle = (diffDays % 28) + 1;

  // Determine the phase
  if (dayInCycle <= 7) return "New";
  if (dayInCycle <= 14) return "Waxing";
  if (dayInCycle <= 21) return "Full";
  return "Waning";
}
