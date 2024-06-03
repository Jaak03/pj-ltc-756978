export default function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const threshold = [...candies].sort((a, b) => b - a)[0] - extraCandies;
  return candies.map(numberOfCandies => numberOfCandies >= threshold);
};