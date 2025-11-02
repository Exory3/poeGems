import {tv} from 'tailwind-variants/lite'

export const titleStyle = tv({
  base: `text-xl text-center font-semibold `,
  variants: {
    color: {
      blue: 'text-blue-500',
      green: 'text-green-500',
      red: 'text-red-500',
    },
  },
})

export const evStyle = tv({
  base: 'text-center text-md mb-3',
})
