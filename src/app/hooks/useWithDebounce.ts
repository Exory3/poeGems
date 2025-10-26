import {useEffect, useState} from 'react'

const useWithDebounce = <T>(value: T, delay: number = 400) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(handler)
  }, [delay, value])

  return {debouncedValue}
}
export default useWithDebounce
