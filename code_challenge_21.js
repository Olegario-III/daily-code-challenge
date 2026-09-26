function isSpam(number) {
  // Extract parts using regex
  const match = number.match(/^\+(\d+) \((\d{3})\) (\d{3})-(\d{4})$/);
  const [, country, area, localStart, localEnd] = match;

  // 1. Country code is longer than 2 digits OR does not start with 0
  const countrySpam = country.length > 2 || !country.startsWith("0");

  // 2. Area code > 900 or < 200
  const areaNum = parseInt(area, 10);
  const areaSpam = areaNum > 900 || areaNum < 200;

  // 3. Sum of first three local digits appears in the last four digits
  const sum = localStart
    .split("")
    .reduce((total, digit) => total + parseInt(digit, 10), 0);
  const sumSpam = localEnd.includes(String(sum));

  // 4. Same digit appears 4 or more times in a row (ignoring formatting)
  const digitsOnly = number.replace(/\D/g, "");
  const fourInARow = /(.)\1{3}/.test(digitsOnly);

  // Return true if ANY of the spam conditions are met
  return countrySpam || areaSpam || sumSpam || fourInARow;
}