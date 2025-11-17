import {useSearchParams} from 'react-router'
import {useAppSelector} from '../../../../app/hooks/storeHooks'
import {getFilteredAndSortedData} from '../../../filters/filters.selectors'
import {getStatus} from '../../gemsDataSlice'
import {allGemsBody, allGemsInfo} from './AllGems.styles'
import Filter from './Filter'
import ErrorComponent from '../../../../shared/UI/Error/ErrorComponent'
import Spinner from '../../../../shared/UI/Spinner/Spinner'
import GemListItem from '../GemListItem/GemListItem'

const AllGems = () => {
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
      <Filter
        onChange={handleSearchString}
        searchParams={searchQuery}
      />
      {!result ||
        (result.length === 0 && (
          <h2 className={allGemsInfo()}>No results found for your request </h2>
        ))}
      {status === 'idle' || (status === 'loading' && <Spinner />)}
      {status === 'failed' && <ErrorComponent message='Failed fetching gems' />}
      <div>
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
export default AllGems
