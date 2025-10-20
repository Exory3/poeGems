import {memo} from 'react'
import {useAppSelector} from '../app/hooks/storeHooks'
import {makeGetFilteredByColor} from '../features/filters/filters.selectors'
import {getStatus} from '../features/gemsData/gemsData.selectors'
import {sortByDescPrice} from '../features/filters/filters.utils'
import GemColorList from '../Components/GemColorList'

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
