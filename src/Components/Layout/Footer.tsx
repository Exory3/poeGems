import {memo} from 'react'

const Footer = memo(function Footer() {
  return (
    <footer className=' grid grid-cols-[30rem_1fr] gap-10 px-5 py-2 bg-blue-200 shadow-md text-stone-800 '>
      <section className='flex gap-10'>
        <div className='font-semibold'>Contact info:</div>
        <ul>
          <li>email: exoryq@gmail.com</li>
        </ul>
      </section>
      <p className=' mr-10 text-center'>
        This is WIP project, feel free to contact us with improvement ideas or
        suggestions
      </p>
    </footer>
  )
})
export default Footer
