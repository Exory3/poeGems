import {useAppSelector} from '../../../../app/hooks/storeHooks'
import ErrorComponent from '../../../../shared/UI/Error/ErrorComponent'
import GemListItem from '../GemListItem/GemListItem'
import Spinner from '../../../../shared/UI/Spinner/Spinner'
import {getGroupedWithEV} from '../../../filters/filters.selectors'
import {getError, getStatus} from '../../gemsDataSlice'
import Divine from 'assets/images/Divine.png'
import {
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
    <div>
      {status === 'failed' && <ErrorComponent message={error} />}
      {status === 'idle' ||
        (status === 'loading' && <Spinner body='Corrupting your page' />)}
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
