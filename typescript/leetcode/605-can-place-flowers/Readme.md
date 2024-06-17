# 605 can place flowers #

You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in **adjacent** plots.

Given an integer array `flowerbed` containing `0`'s and `1`'s, where `0` means empty and `1` means not empty, and an integer `n`, return `true` if `n` new flowers can be planted in the `flowerbed` without violating the no-adjacent-flowers rule and `false` otherwise.

## URL ##
[can-place-flowers](https://leetcode.com/problems/can-place-flowers/description/?envType=study-plan-v2&envId=leetcode-75)

## notion ##
* [Notion page](https://tri2be.notion.site/can-place-flowers-540629fa216d41b180ce866af8dee510?pvs=4)

## optimisation ##
To further optimize the function for both speed and memory usage, the goal is to minimize the number of operations and avoid modifying the `flowerbed` array if possible. We'll also use a single pass through the flowerbed while ensuring we check the edge cases properly.

Here is the optimized version:

```typescript
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
```

### Optimizations: ###
1. **Single Loop Condition:** Adds a check in the loop condition to exit early if we've already found enough spots to plant `n` flowers, saving unnecessary iterations.
2. **Reduced Array Accesses:** Uses constant space and avoids modifying the input `flowerbed` array, reducing memory usage.
3. **Reduced Condition Checks:** Combines multiple conditional checks and only increments the loop counter when necessary.

### Explanation: ###
1. **Loop through the flowerbed:** The loop continues until the end of the flowerbed or until `openSpots` is greater than or equal to `n`.
2. **Check if the current position can hold a flower:**
   - This is done by ensuring the current spot is empty (`0`).
   - The previous spot is either at the beginning of the array or empty.
   - The next spot is either at the end of the array or empty.
3. **Increment openSpots and skip next position:** If a spot is valid for planting a flower, increment `openSpots` and skip the next position to ensure no adjacent flowers.
4. **Return result:** If `openSpots` is greater than or equal to `n`, return `true`.

This version is optimized to minimize the number of operations and memory usage while ensuring the logic remains clear and correct.