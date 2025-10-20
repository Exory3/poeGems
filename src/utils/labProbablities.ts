/**
 * Computes expected maximum of k random draws from a list of numbers
 * @param nums Array of numbers (from API or anywhere)
 * @param k Number of draws per trial
 * @param trials Number of simulation trials (higher = more accurate)
 * @returns Object with {price:odds} pairs
 */
export function labProbablities(
  nums: number[],
  k: number = 3,
  trials = 100000
) {
  if (k > nums.length) throw new Error('k cannot be greater than nums.length')

  const counts = new Map<number, number>()
  for (const n of nums) counts.set(n, 0)

  for (let t = 0; t < trials; t++) {
    const picks: number[] = []
    const usedIndices = new Set<number>()
    while (picks.length < k) {
      const idx = Math.floor(Math.random() * nums.length)
      if (!usedIndices.has(idx)) {
        picks.push(nums[idx])
        usedIndices.add(idx)
      }
    }
    const m = Math.max(...picks)
    counts.set(m, (counts.get(m) || 0) + 1)
  }

  const probs: Record<number, number> = {}
  for (const [num, count] of counts.entries()) {
    probs[num] = count / trials
  }
  return probs
}
