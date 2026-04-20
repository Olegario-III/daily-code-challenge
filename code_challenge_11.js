function milePace(miles, duration) {
    // Parse the duration "MM:SS" into total seconds
    const [minutes, seconds] = duration.split(':').map(Number);
    const totalSeconds = minutes * 60 + seconds;
    
    // Calculate average seconds per mile
    const secondsPerMile = totalSeconds / miles;
    
    // Convert seconds per mile back to MM:SS
    const paceMinutes = Math.floor(secondsPerMile / 60);
    const paceSeconds = Math.floor(secondsPerMile % 60);
    
    // Format with leading zeros
    const formattedMinutes = paceMinutes.toString().padStart(2, '0');
    const formattedSeconds = paceSeconds.toString().padStart(2, '0');
    
    return `${formattedMinutes}:${formattedSeconds}`;
}

// ==================== TEST CASES ====================

console.log("Test 1: milePace(3, '24:00')");
console.log("Expected: 08:00");
console.log("Actual:  ", milePace(3, "24:00"));
console.log("----------------------------------------");

console.log("Test 2: milePace(1, '06:45')");
console.log("Expected: 06:45");
console.log("Actual:  ", milePace(1, "06:45"));
console.log("----------------------------------------");

console.log("Test 3: milePace(2, '07:00')");
console.log("Expected: 03:30");
console.log("Actual:  ", milePace(2, "07:00"));
console.log("----------------------------------------");

console.log("Test 4: milePace(26.2, '120:35')");
console.log("Expected: 04:36");
console.log("Actual:  ", milePace(26.2, "120:35"));
console.log("----------------------------------------");
