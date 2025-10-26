import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router'

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
    <div className='flex justify-center align-middle mt-52'>
      <div className=' text-3xl'>
        Sorry to hear that, you've reached an unreachable area
        <span className='text-[40px]'>&#128531;</span>
        {time}
      </div>
    </div>
  )
}
export default ErrorBoundry
