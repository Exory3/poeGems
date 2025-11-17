import Divine from 'assets/images/Divine.png'
import Chaos from 'assets/images/Chaos.png'

export default function priceConvertion(
  price: number,
  divinePrice: number
): {price: number; image: string} {
  return price <= 200
    ? {price: price, image: Chaos}
    : {price: divinePrice, image: Divine}
}
