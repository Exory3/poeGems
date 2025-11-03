import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router'
import {errorBoundryBody, errorBoundryContainer} from './ErrorBoundry.styles'

const ErrorBoundry = () => {
  const navigate = useNavigate()
  const [time, setTime] = useState(2)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => time - 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasHistory = window.history.state?.idx
      if (hasHistory) {
        navigate(-1)
      } else {
        navigate('/', {replace: true})
      }
    }, 1000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className={errorBoundryContainer()}>
      <div className={errorBoundryBody()}>
        Sorry to hear that, you've reached an unreachable area
        <span>&#128531;</span>
        {time}
      </div>
    </div>
  )
}
export default ErrorBoundry
