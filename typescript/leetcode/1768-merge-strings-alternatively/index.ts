function mergeAlternately(word1: string, word2: string): string {
  const word1Chars = word1.split('').reverse();
  const word2Chars = word2.split('').reverse();

  let result = '';

  while(word1Chars.length > 0 || word2Chars.length > 0) {
    if (word1Chars.length > 0) result += word1Chars.pop();
    if (word2Chars.length > 0) result += word2Chars.pop();
  }

  return result;
};

export default mergeAlternately;