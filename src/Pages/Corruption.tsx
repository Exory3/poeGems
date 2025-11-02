import {useAppSelector} from '../app/hooks/storeHooks'
import GemListItem from '../Components/UI/GemListItem/GemListItem'
import {getGroupedWithEV} from '../features/filters/filters.selectors'
import Divine from 'assets/images/Divine.png'
import {getError, getStatus} from '../features/gemsData/gemsDataSlice'
import ErrorComponent from '../Components/UI/Error/ErrorComponent'
import Spinner from '../Components/UI/Spinner/Spinner'

function Corruption() {
  const corruptionList = useAppSelector(getGroupedWithEV)
  const status = useAppSelector(getStatus)
  const error = useAppSelector(getError)

  const sortedCorruptionList = corruptionList.sort((a, b) => b.ev - a.ev)

  return (
    <div className='max-w-8/10 m-auto'>
      {status === 'failed' && <ErrorComponent message={error} />}
      {status === 'idle' ||
        (status === 'loading' && <Spinner body='Corruping your page' />)}
      {sortedCorruptionList.map((i) => (
        <>
          <p className='ml-2 flex'>
            {i.ev?.toFixed(1)}:
            <img
              className='h-6 w-6'
              src={Divine}
            />
          </p>
          <div className='grid grid-cols-4 gap-x-2'>
            {Object.entries(i.versions).map(([, value]) => (
              <GemListItem
                item={value}
                key={value.id}
              />
            ))}
          </div>
        </>
      ))}
    </div>
  )
}

export default Corruption
