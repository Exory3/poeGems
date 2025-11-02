import {tv} from 'tailwind-variants/lite'

export const itemContainer = tv({
  base: 'px-2 pt-2 pb-0.5 m-1 rounded-sm h-fit min-h-20 bg-blue-300 flex justify-between cursor-pointer overflow-hidden transition delay-75 ease-in-out hover:bg-blue-400 hover:scale-102',
})
export const nameStyle = tv({
  base: 'text-black text-left',
})

export const priceStyle = tv({
  base: 'flex text-sm text-black',
})
export const currencyIconStyle = tv({
  base: 'w-4 h-4 mt-0.5 ',
})

export const iconStyle = tv({
  base: 'w-8 h-8',
})
