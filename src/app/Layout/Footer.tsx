import {memo} from 'react'
import {footerBody, footerStyle} from './Layout.styles'

const Footer = memo(function Footer() {
  return (
    <footer className={footerStyle()}>
      <section className='flex gap-2'>
        <div className='font-semibold'>Contact info:</div>
        <ul>
          <li>Discord: exory</li>
        </ul>
      </section>
      <p className={footerBody()}>
        This is WIP project, feel free to contact us with improvement ideas or
        suggestions
      </p>
    </footer>
  )
})
export default Footer
