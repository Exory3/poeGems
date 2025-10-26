import {memo} from 'react'
import {useAppSelector} from '../app/hooks/storeHooks'
import {makeGetFilteredByColor} from '../features/filters/filters.selectors'
import {sortByDescPrice} from '../features/filters/filters.utils'
import GemColorList from '../Components/GemColorList'
import {getStatus} from '../features/gemsData/gemsDataSlice'

const GemsList = () => {
  const status = useAppSelector(getStatus)
  const red = sortByDescPrice(useAppSelector(makeGetFilteredByColor('red')))
  const green = sortByDescPrice(useAppSelector(makeGetFilteredByColor('green')))
  const blue = sortByDescPrice(useAppSelector(makeGetFilteredByColor('blue')))

  if (status === 'idle' || status === 'loading') {
    return <p className='text-center mt-10'>Loading...</p>
  }
  return (
    <>
      <div>
        <h3 className='text-lg my-2 text-center'>
          This is page created to assist you in picking right gem type for your
          lab font
        </h3>
        <p className='max-w-7/10 m-auto indent-8'>
          Math behind it is the sum of each gem’s price multiplied by its odds
          of being the highest pick (3 choose N). Since all variants have equal
          odds, what matters is how often each gem ends up as the max in 3
          random draws. Instead of computing exact combinatorics, we simulate
          this many times to approximate those odds and get the expected value
          (EV).
        </p>
      </div>
      <div className=' grid w-7/10 m-auto mt-10 md:grid-cols-3 gap-2'>
        <GemColorList
          key={'red'}
          color='red'
          gems={red}
          title='Strength Gems'
        />
        <GemColorList
          color='green'
          key='green'
          gems={green}
          title='Dexterity Gems'
        />
        <GemColorList
          color='blue'
          key='blue'
          gems={blue}
          title='Intelligence Gems'
        />
      </div>
    </>
  )
}
export default memo(GemsList)
