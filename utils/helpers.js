export function upcase(string) {
  if (typeof string !== 'string') {
    throw new Error(`${string} is not a string`);
  }
  const uppercasedString =
    string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  return uppercasedString.split('-').join(' ');
}

export function dasherized(string) {
  if (typeof string !== 'string') {
    throw new Error(`${string} is not a string`);
  }
  return string.toLowerCase().split(' ').join('-');
}
