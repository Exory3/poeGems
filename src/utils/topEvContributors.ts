export type TTopEvContributor = {
  price: number
  prob: number
  contribution: number
}

export const topEvContributors = (
  probabilities: Record<number, number>,
  topN: number = 5
): TTopEvContributor[] => {
  return Object.entries(probabilities)
    .map(([price, prob]) => ({
      price: Number(price),
      prob,
      contribution: Number(price) * prob,
    }))
    .sort((a, b) => b.price - a.price)
    .slice(0, topN)
}
