export function test(flowerbed: number[], n: number): boolean {
  let openSpots = 0;

  if (flowerbed.length === 1 && flowerbed[0] === 0) return true;
  
  for(let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 1) continue;

    // Had to do some checks here for those little 2 spot edge cases
    if (
      flowerbed[i+1] === 0
      && (
        i === 0
        || i >= flowerbed.length - 2
        || flowerbed[i+2] === 0
      )
    ) {
      openSpots++;
      flowerbed[i] = 3;
      console.log(flowerbed);
      i += 1;
      continue;
    }
  }

  return openSpots >= n;
}