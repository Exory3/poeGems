import {memo} from 'react'
import type {IGemDetails} from '../../../features/gemsData/gemsData.types'
import Tag from '../Tag/Tag'
import priceConvertion from '../../../utils/priceConvertion'
import {useNavigate} from 'react-router'
import {
  currencyIconStyle,
  iconStyle,
  itemContainer,
  nameStyle,
  priceStyle,
} from './GemListItem.style'

type GemsListProps = {item: IGemDetails}

function GemListItem({
  item: {divinePrice, icon, name, price, gemIsCorrupted, gemLevel, gemQuality},
}: GemsListProps) {
  const {price: displayPrice, image} = priceConvertion(price, divinePrice)
  const navigate = useNavigate()
  return (
    <div
      onClick={() => {
        const path = `/gems/` + name.split(' ').join('-')
        navigate(path)
      }}
      className={itemContainer()}>
      <div>
        <div className='flex '>
          <h4 className={nameStyle()}>{name}</h4>
          <Tag type={gemIsCorrupted ? 'corrupted' : 'normal'}>
            {gemLevel}/{gemQuality}
          </Tag>
        </div>
        <div>
          <p className={priceStyle()}>
            {displayPrice}
            <img
              loading='lazy'
              src={image}
              className={currencyIconStyle()}
            />
          </p>
        </div>
      </div>
      <img
        className={iconStyle()}
        src={icon}
      />
    </div>
  )
}

export default memo(GemListItem)
