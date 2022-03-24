/**
 * Takes in a string and converts it to camel case!
 * This removes white space, capitalizes the next letter, joins the words, and leaves the first letter of the entire
 * string lower case
 * @param str a string you want to turn into camel case
 */
export default (str: string) =>
  str
    .replace(/^\w|[A-Z]|\b\w/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
