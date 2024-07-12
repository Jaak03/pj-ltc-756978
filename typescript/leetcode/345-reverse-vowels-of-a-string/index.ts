export function test(s: string): string {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  const swaps: string[] = [];
  let result = '';

  // First pass: collect vowels and replace them with placeholders
  for (let i = 0; i < s.length; i++) {
    if (vowels.has(s[i])) {
      swaps.push(s[i]);
      result += '{#}';
    } else {
      result += s[i];
    }
  }

  // Second pass: replace placeholders with reversed vowels
  let swapIndex = swaps.length - 1;
  for (let i = 0; i < result.length; i++) {
    if (result[i] === '#' && result[i - 1] === '{' && result[i + 1] === '}') {
      result =
        result.substring(0, i - 1) +
        swaps[swapIndex--] +
        result.substring(i + 2);
    }
  }

  return result;
}
