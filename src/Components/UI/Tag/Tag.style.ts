import {tv} from 'tailwind-variants/lite'

export const TagStyle = tv({
  base: 'inline-block rounded-lg box-sizing: border-box p-1 text-black leading-none ml-2 h-5 text-center min-w-[35px]',
  variants: {
    type: {
      normal: 'bg-emerald-300 border-black',
      corrupted: 'bg-rose-300 border-red-600',
    },
    size: {
      s: 'text-xs',
      m: 'text-sm',
    },
  },
  defaultVariants: {
    size: 's',
    type: 'normal',
  },
})
