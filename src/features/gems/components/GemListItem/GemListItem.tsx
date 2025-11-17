import type {IGemDetails} from '../../gemsData.types'
import Tag from '../../../../shared/UI/Tag/Tag'
import priceConvertion from '../../priceConvertion'
import {useNavigate} from 'react-router'
import {
  currencyIconStyle,
  iconStyle,
  itemContainer,
  nameStyle,
  priceStyle,
} from './GemListItem.styles'

type GemsListProps = {item: IGemDetails}

function GemListItem({
  item: {divinePrice, icon, name, price, gemIsCorrupted, gemLevel, gemQuality},
}: GemsListProps) {
  const {price: displayPrice, image} = priceConvertion(price, divinePrice)
  const navigate = useNavigate()
  const path = `/gems/` + name.split(' ').join('-')
  const handleClick = () => {
    navigate(path)
  }

  return (
    <div
      className={itemContainer()}
      onClick={handleClick}>
      <div>
        <div className='flex'>
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

export default GemListItem
