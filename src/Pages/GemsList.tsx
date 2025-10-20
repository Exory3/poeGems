import {memo} from 'react'
import GemListItem from '../Components/GemListItem'
import {useAppSelector} from '../app/hooks/storeHooks'
import {getStatus} from '../features/gemsData/gemsData.selectors'
import Filter from '../Components/FilterGems/Filter'
import {getFilteredAndSortedData} from '../features/filters/filters.selectors'
import {useSearchParams} from 'react-router'

const GemsList = () => {
  const gemsList = useAppSelector(getFilteredAndSortedData)

  const status = useAppSelector(getStatus)
  const [searchParams, setSearchParams] = useSearchParams()
  const searchQuery = searchParams.get('name')?.toLowerCase() ?? ''

  const result = gemsList.filter((gem) =>
    gem.name.toLowerCase().includes(searchQuery)
  )

  if (!gemsList) {
    return
  }
  if (status === 'loading') {
    return <p>Loading gems...</p>
  }

  return (
    <>
      <Filter
        onChange={setSearchParams}
        searchParams={searchQuery}
      />
      <div className=' grid max-w-8/10 m-auto'>
        <div className=' grid md:grid-cols-3 gap-x-3 gap-y-1 '>
          {result.map((item) => (
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
