import {
  ErrorContainer,
  ErrorHeader,
  ErrorMessage,
} from './ErrorComponent.styles'

type TErrorComponent = {
  title?: string
  message: string | null
}

function ErrorComponent({
  title = 'Unknown Error Occured',
  message,
}: TErrorComponent) {
  return (
    <div className={ErrorContainer()}>
      <h2 className={ErrorHeader()}>{title}</h2>
      <p className={ErrorMessage()}>{message ?? 'Something went wrong..'}</p>
    </div>
  )
}

export default ErrorComponent
