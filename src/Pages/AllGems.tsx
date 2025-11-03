import GemListItem from '../Components/UI/GemListItem/GemListItem'
import {useAppSelector} from '../app/hooks/storeHooks'
import Filter from '../Components/FilterGems/Filter'
import {getFilteredAndSortedData} from '../features/filters/filters.selectors'
import {useSearchParams} from 'react-router'
import {getStatus} from '../features/gemsData/gemsDataSlice'
import Spinner from '../Components/UI/Spinner/Spinner'
import ErrorComponent from '../Components/UI/Error/ErrorComponent'
import {allGemsBody, allGemsContainer, allGemsInfo} from './AllGems.styles'

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
      {status === 'failed' && <ErrorComponent message='Failed fetching gems' />}
      <Filter
        onChange={handleSearchString}
        searchParams={searchQuery}
      />
      {!result ||
        (result.length === 0 && (
          <h2 className={allGemsInfo()}>No results found for your request </h2>
        ))}
      <div className={allGemsContainer()}>
        <div className={allGemsBody()}>
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
export default AllGemsrGems
