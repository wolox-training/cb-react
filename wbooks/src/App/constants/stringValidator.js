export const stringValidator = {
  matchNumber(string) {
    return /[^a-z|A-Z]/.test(string);
  },
  noNumberOrLetter(string) {
    return !/(?=.*[a-z|A-Z])(?=.*\d)/.test(string);
  }
};
