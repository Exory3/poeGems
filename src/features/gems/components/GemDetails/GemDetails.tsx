import {useParams} from 'react-router'
import {makeGetFilteredByName} from '../../../filters/filters.selectors'
import {useAppSelector} from '../../../../app/hooks/storeHooks'
import GemListItem from '../GemListItem/GemListItem'
import {
  gemDetailsBody,
  gemDetailsContainer,
  gemDetailsInfo,
} from './GemDetails.styles'

const GemDetails = () => {
  const {gemName} = useParams<{gemName: string}>()
  const searchString = gemName?.split('-').join(' ') ?? ''
  const itemsList = useAppSelector(makeGetFilteredByName(searchString))
  console.log('hey')
  return (
    <>
      {itemsList.length === 0 ||
        (!itemsList && (
          <>
            <p className={gemDetailsInfo()}>
              Seems like something went wrong, empty array found.
            </p>
            <p className={gemDetailsInfo()}>
              Please, consider checking gem name again
            </p>
          </>
        ))}
      <div className={gemDetailsContainer()}>
        <div className={gemDetailsBody()}>
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
export default GemDetails
