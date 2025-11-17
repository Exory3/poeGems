import {tv} from 'tailwind-variants/lite'

const spinnerContainer = tv({
  base: 'flex my-30 items-center flex-col',
})
const spinnerAnimation = tv({
  base: ' w-12 h-12 border-5 border-solid border-white border-b-orange-600 rounded-full inline-block  box-border animate-rotation ',
})
const spinnerText = tv({
  base: 'text-center text-2xl',
})

function Spinner({body}: {body?: string}) {
  return (
    <div>
      <div className={spinnerContainer()}>
        <span className={spinnerAnimation()}></span>
        <p className={spinnerText()}>{body ?? 'Loading...'}</p>
      </div>
    </div>
  )
}

export default Spinner
