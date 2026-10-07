function goldilocksZone(mass) {
  const luminosity = Math.pow(mass, 3.5);
  const sqrtLuminosity = Math.sqrt(luminosity);

  const start = Math.round(0.95 * sqrtLuminosity * 100) / 100;
  const end = Math.round(1.37 * sqrtLuminosity * 100) / 100;

  return [start, end];
}
