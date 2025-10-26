import {useAppSelector} from '../app/hooks/storeHooks'
import GemListItem from '../Components/GemListItem'
import {getGroupedWithEV} from '../features/filters/filters.selectors'
import Divine from 'assets/images/Divine.png'

function Corruption() {
  const corruptionList = useAppSelector(getGroupedWithEV)

  if (!corruptionList)
    return <p>Something wrong, please refresh page or contact our support </p>

  const sortedCorruptionList = corruptionList.sort((a, b) => b.ev - a.ev)

  return (
    <div className='max-w-8/10 m-auto'>
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
