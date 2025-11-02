import {type DetailedHTMLProps, type HTMLAttributes} from 'react'

export interface ITagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 's' | 'm'
  type: 'normal' | 'corrupted'
}
