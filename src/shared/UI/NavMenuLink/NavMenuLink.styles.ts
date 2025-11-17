import {tv} from 'tailwind-variants/lite'

export const linkStyle = tv({
  variants: {
    active: {
      true: 'p2 text-gray-900  border-b-2 border-b-emerald-400',
      false: 'p2 text-gray-600  hover:border-b-2 hover:border-b-emerald-400 ',
    },
  },
  defaultVariants: {
    active: false,
  },
})
