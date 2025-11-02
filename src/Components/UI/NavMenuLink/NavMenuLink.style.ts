import {tv} from 'tailwind-variants/lite'

export const linkStyle = tv({
  base: 'p-2 ',
  variants: {
    active: {
      true: 'text-gray-900  border-b-2 border-b-emerald-400',
      false: ' text-gray-600  hover:border-b-2 hover:border-b-emerald-400 ',
    },
  },
  defaultVariants: {
    active: false,
  },
})
