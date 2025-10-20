import {memo} from 'react'
import type {IGemDetails} from '../features/gemsData/gemsData.types'
import Tag from './UI/Tag/Tag'
import priceConvertion from '../utils/price/priceConvertion'
import {useNavigate} from 'react-router'

type GemsListProps = {item: IGemDetails}

function GemListItem({
  item: {
    divinePrice,
    icon,
    id,
    name,
    price,
    gemIsCorrupted,
    gemLevel,
    gemQuality,
  },
}: GemsListProps) {
  const {price: displayPrice, image} = priceConvertion(price, divinePrice)
  const navigate = useNavigate()
  return (
    <div
      onClick={() => {
        const path = `/gems/` + name.split(' ').join('-')
        navigate(path)
      }}
      key={id}
      className={
        'px-2 pt-2 pb-0.5 m-1 rounded-sm h-fit min-h-20 bg-blue-300 flex justify-between hover:bg-blue-400 cursor-pointer '
      }>
      <div>
        <div className='flex '>
          <h4 className='text-black text-left'>{name}</h4>
          <Tag type={gemIsCorrupted ? 'corrupted' : 'normal'}>
            {gemLevel}/{gemQuality}
          </Tag>
        </div>
        <div>
          <p className='flex text-sm text-black'>
            {displayPrice}
            <img
              loading='lazy'
              src={image}
              className='w-4 h-4 mt-0.5 '
            />
          </p>
        </div>
      </div>
      <img
        className='h-8 w-8'
        src={icon}
      />
    </div>
  )
}

export default memo(GemListItem)
