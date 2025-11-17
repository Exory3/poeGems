// import {useEffect, useState} from 'react'
// import {getAllGems} from '../utils/API'
import {useAppSelector} from '../../../app/hooks/storeHooks'
import {makeGetFilteredByColor} from '../../filters/filters.selectors'
import {sortByDescPrice} from '../../filters/filters.utils'
import GemColorList from './GemColorList'
import {getStatus} from '../../gems/gemsDataSlice'
import ErrorComponent from '../../../shared/UI/Error/ErrorComponent'
import Spinner from '../../../shared/UI/Spinner/Spinner'
import {labPageHeader, labPageInfo, labPageBody} from './Lab.styles'

const LabPage = () => {
  // const [isLoading, setIsLoading] = useState(false)
  // const [error, setError] = useState(false)
  // const [gemsList, setGemsList] = useState(null)
  // useEffect(() => {
  //   async function fetchGems() {
  //     try{
  //       setIsLoading(true)
  //       const gems = getAllGems()
  //        setGemsList(gems)
  //     } catch (err){
  //      setError(err.message)
  //    }
  //    setIsLoading(false)
  //   }
  // }, [])
  const status = useAppSelector(getStatus)
  const error = useAppSelector((state) => state.gemsData.error)

  const red = sortByDescPrice(useAppSelector(makeGetFilteredByColor('red')))
  const green = sortByDescPrice(useAppSelector(makeGetFilteredByColor('green')))
  const blue = sortByDescPrice(useAppSelector(makeGetFilteredByColor('blue')))
  const content = red.length > 0 || green.length > 0 || blue.length > 0
  return (
    <>
      <div>
        <h3 className={labPageHeader()}>
          This is page created to assist you in picking right gem type for your
          lab font
        </h3>
        <p className={labPageInfo()}>
          Math behind it is the sum of each gem’s price multiplied by its odds
          of being the highest pick (3 choose N). Since all variants have equal
          odds, what matters is how often each gem ends up as the max in 3
          random draws. Instead of computing exact combinatorics, we simulate
          this many times to approximate those odds and get the expected value
          (EV).
        </p>
      </div>
      {status === 'failed' && (
        <ErrorComponent
          message={error}
          title='Fetch error'
        />
      )}
      {(status === 'idle' || status === 'loading') && <Spinner />}
      {content && (
        <div className={labPageBody()}>
          <GemColorList
            key={'red'}
            color='red'
            gems={red}
            title='Strength Gems'
          />
          <GemColorList
            color='green'
            key='green'
            gems={green}
            title='Dexterity Gems'
          />
          <GemColorList
            color='blue'
            key='blue'
            gems={blue}
            title='Intelligence Gems'
          />
        </div>
      )}
      {!content && (
        <ErrorComponent message={'failed to fetch gem list from server'} />
      )}
    </>
  )
}
export default LabPage
