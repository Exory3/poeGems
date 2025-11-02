import {memo} from 'react'
import {useParams} from 'react-router'
import {makeGetFilteredByName} from '../features/filters/filters.selectors'
import {useAppSelector} from '../app/hooks/storeHooks'
import GemListItem from '../Components/UI/GemListItem/GemListItem'

const GemsList = () => {
  const {gemName} = useParams<{gemName: string}>()
  const searchString = gemName?.split('-').join(' ') ?? ''
  const itemsList = useAppSelector(makeGetFilteredByName(searchString))

  if (itemsList.length === 0 || !itemsList) {
    return (
      <>
        <p className='text-3xl text-center my-10'>
          Seems like something went wrong, empty array found.
        </p>
        <p className='text-3xl text-center'>
          Please, consider checking gem name again
        </p>
      </>
    )
  }
  return (
    <>
      <div className=' grid w-7/10 m-auto mt-10'>
        <div className=' grid md:grid-cols-3 gap-x-3 gap-y-1 '>
          {itemsList.map((item) => (
            <GemListItem
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </div>
    </>
  )
}
export default memo(GemsList)
