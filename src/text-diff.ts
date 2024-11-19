/**
 * Returns a boolean array representing false if at that index texts do not match.
 * @param {string} a - Text to be compared.
 * @param {string} b - Text to be compared.
 * @returns {Array<boolean>} A promise resolving to the query result as a Blob.
 */
export function textDiff(a: string, b: string): Array<boolean> {
  const diff = [];

  if (a.length >= b.length) {
    for (let i = 0; i < a.length; i++) {
      diff[i] = b[i] === a[i];
    }
    return diff;
  }

  for (let i = 0; i < b.length; i++) {
    diff[i] = b[i] === a[i];
  }
  return diff;
}
