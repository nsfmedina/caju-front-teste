export const validateFullName = (str: string): boolean => {
  return /^(?!\d)[A-Za-z]+ [A-Za-z]+.*$/.test(str);
}