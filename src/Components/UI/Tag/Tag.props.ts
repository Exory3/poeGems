import {
  type DetailedHTMLProps,
  type HTMLAttributes,
  type ReactNode,
} from 'react'

export interface ITagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode
  size?: 's' | 'm'
  type: 'normal' | 'corrupted'
}
