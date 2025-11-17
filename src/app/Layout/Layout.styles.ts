import {tv} from 'tailwind-variants/lite'

export const rootStyle = tv({
  base: 'min-h-screen flex flex-col',
})

export const mainStyle = tv({
  base: 'grow w-8/10 m-auto mt-10',
})

export const headerStyle = tv({
  base: 'flex justify-between gap-5 p-4 bg-blue-200 shadow-md  rounded-md',
})

export const navbarStyle = tv({
  base: 'flex gap-4',
})
export const footerStyle = tv({
  base: ' grid grid-cols-[30rem_1fr] gap-10 px-5 py-2 bg-blue-200 shadow-md text-stone-800 ',
})

export const footerBody = tv({
  base: 'mr-10 text-center',
})
