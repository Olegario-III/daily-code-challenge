function checkStrength(password) {
  let score = 0;

  // Rule 1: At least 8 characters
  if (password.length >= 8) score++;

  // Rule 2: Contains both uppercase and lowercase letters
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;

  // Rule 3: Contains at least one number
  if (/\d/.test(password)) score++;

  // Rule 4: Contains at least one special character (!@#$%^&*)
  if (/[!@#$%^&*]/.test(password)) score++;

  if (score < 2) return "weak";
  if (score < 4) return "medium";
  return "strong";
}
