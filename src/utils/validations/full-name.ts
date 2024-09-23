export const validateFullName = (str: string): boolean => {
  if (!str.includes(" ")) {
    return false;
  }

  if (str.length < 2) {
    return false;
  }

  if (str[0].match(/\d/)) {
    return false;
  }

  return true;
}