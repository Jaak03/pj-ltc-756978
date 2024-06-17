export function test(flowerbed: number[], n: number): boolean {
  let openSpots = 0;

  if (flowerbed.length === 1 && flowerbed[0] === 0) return true;
  
  for(let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 1) continue;

    if (flowerbed[i] === 0) {
      let result = true;
      const lower = i - 1;
      const upper = i + 1;

      if (lower >= 0 && flowerbed[lower] !== 0) result = false;
      if (upper < flowerbed.length && flowerbed[upper] !== 0) result = false;

      if (result) {
        openSpots++;
        i = upper;
      }
    }
  }

  return openSpots >= n;
}