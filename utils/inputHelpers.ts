export const disallowNonNumbers = (event: any) =>
  ["e", "E", "+", "-"].includes(event.key) && event.preventDefault();
