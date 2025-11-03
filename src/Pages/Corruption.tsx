import {useAppSelector} from '../app/hooks/storeHooks'
import GemListItem from '../Components/UI/GemListItem/GemListItem'
import {getGroupedWithEV} from '../features/filters/filters.selectors'
import Divine from 'assets/images/Divine.png'
import {getError, getStatus} from '../features/gemsData/gemsDataSlice'
import ErrorComponent from '../Components/UI/Error/ErrorComponent'
import Spinner from '../Components/UI/Spinner/Spinner'
import {
  corruptionPageHeader,
  corruptionPageItem,
  corruptionPagePrice,
  corruptionPagePriceIcon,
} from './Corruption.styles'

function Corruption() {
  const corruptionList = useAppSelector(getGroupedWithEV)
  const status = useAppSelector(getStatus)
  const error = useAppSelector(getError)

  const sortedCorruptionList = corruptionList.sort((a, b) => b.ev - a.ev)

  return (
    <div className={corruptionPageHeader()}>
      {status === 'failed' && <ErrorComponent message={error} />}
      {status === 'idle' ||
        (status === 'loading' && <Spinner body='Corruping your page' />)}
      {sortedCorruptionList.map((i) => (
        <div key={i.name}>
          <p className={corruptionPagePrice()}>
            {i.ev?.toFixed(1)}:
            <img
              className={corruptionPagePriceIcon()}
              src={Divine}
            />
          </p>
          <div className={corruptionPageItem()}>
            {Object.entries(i.versions).map(([, value]) => (
              <GemListItem
                item={value}
                key={value.id}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Corruption
