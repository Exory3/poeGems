import {memo} from 'react'
import GemListItem from '../Components/UI/GemListItem/GemListItem'
import {useAppSelector} from '../app/hooks/storeHooks'
import Filter from '../Components/FilterGems/Filter'
import {getFilteredAndSortedData} from '../features/filters/filters.selectors'
import {useSearchParams} from 'react-router'
import {getStatus} from '../features/gemsData/gemsDataSlice'
import Spinner from '../Components/UI/Spinner/Spinner'

const AllGemsrGems = () => {
  const gemsList = useAppSelector(getFilteredAndSortedData)

  const status = useAppSelector(getStatus)
  const [searchParams, setSearchParams] = useSearchParams()
  const searchQuery = searchParams.get('name')?.toLowerCase() ?? ''

  const handleSearchString = (string: string) => {
    if (string) {
      setSearchParams({name: string})
    } else {
      setSearchParams({})
    }
  }

  const result = gemsList.filter((gem) =>
    gem.name.toLowerCase().includes(searchQuery)
  )

  return (
    <>
      {status === 'idle' || (status === 'loading' && <Spinner />)}
      <Filter
        onChange={handleSearchString}
        searchParams={searchQuery}
      />
      <div className=' grid max-w-8/10 m-auto'>
        <div className=' grid md:grid-cols-3 gap-x-3 gap-y-1 '>
          {result.slice(0, 99).map((item) => (
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
export default memo(AllGemsrGems)
