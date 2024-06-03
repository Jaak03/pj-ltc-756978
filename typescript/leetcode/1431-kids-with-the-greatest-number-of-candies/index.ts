export default function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const threshold = Math.max(...candies) - extraCandies;
  return candies.map(numberOfCandies => numberOfCandies  >= threshold);
};