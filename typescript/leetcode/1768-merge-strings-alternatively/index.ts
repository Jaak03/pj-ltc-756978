function mergeAlternately(word1: string, word2: string): string {
  const w1 = word1.length;
  const w2 = word2.length

  let result = '', i = 0;

  while (i < w1 || i < w2) {
    if (i < w1) result += word1[i];
    if (i < w2) result += word2[i];
    i++;
  }

  return result;
};

export default mergeAlternately;