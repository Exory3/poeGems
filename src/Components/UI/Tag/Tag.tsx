import type {JSX} from 'react'
import type {ITagProps} from './Tag.props'

function Tag({children, type, size = 's'}: ITagProps): JSX.Element {
  const className = [
    'inline-block rounded-lg box-sizing: border-box p-1 text-black leading-none ml-2 h-5 text-center min-w-[35px]',
  ]
  className.push(
    type === 'normal'
      ? 'bg-emerald-300 border-black'
      : 'bg-rose-300 border-red-600'
  )
  className.push(size === 's' ? 'text-xs' : 'text-sm')

  return <div className={className.join(' ')}>{children}</div>
}

export default Tag
