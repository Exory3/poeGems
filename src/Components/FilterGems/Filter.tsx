import {Switch, TextField} from '@mui/material'
import {useAppDispatch, useAppSelector} from '../../app/hooks/storeHooks'
import {
  allowedLevelValues,
  allowedQualityValues,
  getFilter,
} from '../../features/filters/filters.selectors'
import type {TgemLevel, TgemQuality} from '../../features/filters/filters.types'
import {
  setGemIsCorrupted,
  setGemLevel,
  setGemQuality,
} from '../../features/filters/filtersSlice'
import FilterSelect, {type Option} from './FilterSelect'
import {useMemo} from 'react'

type TSearchParams = {
  name: string
}

interface IProps {
  onChange: (obj: TSearchParams) => void
  searchParams: string | null
}

function Filter({onChange, searchParams}: IProps) {
  const {gemIsCorrupted, gemLevel, gemQuality} = useAppSelector(getFilter)
  const dispatch = useAppDispatch()

  const levelList = allowedLevelValues(gemIsCorrupted)
  const qualityList = allowedQualityValues(gemIsCorrupted)
  const levelOptions: Option<TgemLevel>[] = levelList.map(
    (i) =>
      ({
        label: `Level ${i.toString()}`,
        value: i,
      } as const)
  )
  const qualityOptions: Option<TgemQuality>[] = useMemo(
    () =>
      qualityList.map(
        (i) =>
          ({
            label: `${i.toString()}%`,
            value: i,
          } as const)
      ),
    [qualityList]
  )
  // idk about this
  return (
    <div className='fixed top-5/12 '>
      <div className='bg-blue-200 flex flex-col px-3 rounded-2xl'>
        <div className='text-black flex mx-4'>
          Corruption:
          <Switch
            size='small'
            color='warning'
            checked={gemIsCorrupted}
            onChange={(e) => {
              dispatch(setGemIsCorrupted(e.target.checked))
            }}
          />
        </div>
        <FilterSelect
          label='Level'
          options={levelOptions}
          value={gemLevel}
          onChange={(v) => dispatch(setGemLevel(v))}
        />
        <FilterSelect
          label='Quality'
          options={qualityOptions}
          value={gemQuality}
          onChange={(v) => dispatch(setGemQuality(v))}
        />
        <TextField
          label='search'
          id='standard-size-small'
          size='small'
          variant='standard'
          value={searchParams}
          onChange={(e) => {
            onChange({name: e.target.value})
          }}
        />
      </div>
    </div>
  )
}
export default Filter
