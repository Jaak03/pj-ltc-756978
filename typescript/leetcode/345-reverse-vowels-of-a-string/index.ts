export function test(s: string): string {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let swaps: string[] = [];
  const word = s.split('').map((char) => {
    if (vowels.has(char)) {
      swaps.push(char);
      return '{#}';
    }

    return char;
  });

  swaps = swaps.reverse();

  const response = word.map((char) => {
    if (char === '{#}') return swaps.shift();
    return char;
  });

  return response.join('');
}
