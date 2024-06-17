export function test(flowerbed: number[], n: number): boolean {
  let openSpots = 0;
  const length = flowerbed.length;

  for (let i = 0; i < length && openSpots < n; i++) {
    if (flowerbed[i] === 0) {
      const prevEmpty = (i === 0) || (flowerbed[i - 1] === 0);
      const nextEmpty = (i === length - 1) || (flowerbed[i + 1] === 0);

      if (prevEmpty && nextEmpty) {
        openSpots++;
        i++; // Skip the next spot as we planted a flower here
      }
    }
  }

  return openSpots >= n;
}