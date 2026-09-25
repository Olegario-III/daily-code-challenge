function speeding(speeds, limit) {
  // Get only the speeds that are over the limit
  const speedingVehicles = speeds.filter(speed => speed > limit);

  // If no one was speeding
  if (speedingVehicles.length === 0) {
    return [0, 0];
  }

  // Calculate the total amount over the limit
  const totalOver = speedingVehicles.reduce((sum, speed) => {
    return sum + (speed - limit);
  }, 0);

  // Calculate the average amount over the limit
  const averageOver = totalOver / speedingVehicles.length;

  return [speedingVehicles.length, averageOver];
}