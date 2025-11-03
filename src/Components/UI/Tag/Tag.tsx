import type {ITagProps} from './Tag.props'
import {TagStyle} from './Tag.styles'

function Tag({children, type, size = 's'}: ITagProps) {
  return <div className={TagStyle({type, size})}>{children}</div>
}

export default Tag
