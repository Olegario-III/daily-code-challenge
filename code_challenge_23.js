function formatNumber(number) {
  const country = number[0];
  const area = number.slice(1, 4);
  const localStart = number.slice(4, 7);
  const localEnd = number.slice(7);

  return `+${country} (${area}) ${localStart}-${localEnd}`;
}