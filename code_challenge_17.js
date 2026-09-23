function digitsOrLetters(str) {
  const digits = (str.match(/\d/g) || []).length;
  const letters = (str.match(/[a-zA-Z]/g) || []).length;

  if (digits > letters) return "digits";
  if (letters > digits) return "letters";
  return "tie";
}