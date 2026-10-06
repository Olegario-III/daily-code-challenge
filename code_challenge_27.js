function findLandingSpot(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let minDanger = Infinity;
  let bestSpot = [0, 0];

  // Only check up, down, left, right (no diagonals)
  const directions = [
    [-1, 0], // up
    [1, 0],  // down
    [0, -1], // left
    [0, 1]   // right
  ];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        let danger = 0;

        // Sum the danger of valid neighbors
        for (const [di, dj] of directions) {
          const ni = i + di;
          const nj = j + dj;

          if (ni >= 0 && ni < rows && nj >= 0 && nj < cols) {
            danger += matrix[ni][nj];
          }
        }

        // Keep the spot with the lowest surrounding danger
        if (danger < minDanger) {
          minDanger = danger;
          bestSpot = [i, j];
        }
      }
    }
  }

  return bestSpot;
}
