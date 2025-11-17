import {Switch, TextField} from '@mui/material'
import {getFilter} from '../../../filters/filters.selectors'
import {
  setGemIsCorrupted,
  setGemLevel,
  setGemQuality,
} from '../../../filters/filtersSlice'
import FilterSelect from './FilterSelect'
import {formatLevel, formatQuality} from './formatters'
import {useAppDispatch, useAppSelector} from '../../../../app/hooks/storeHooks'

interface IProps {
  onChange: (obj: string) => void
  searchParams: string | null
}

function Filter({onChange, searchParams}: IProps) {
  const {gemIsCorrupted, gemLevel, gemQuality} = useAppSelector(getFilter)
  const dispatch = useAppDispatch()

  const qualityOptions = formatQuality(gemIsCorrupted)
  const levelOptions = formatLevel(gemIsCorrupted)
  return (
    <div className='bg-blue-200 flex rounded-md justify-around items-center my-2 sticky z-10 top-0 max-w-3/4 mx-auto'>
      <div className='text-black flex mx-4'>
        <label
          htmlFor='corruption'
          className='hover:cursor-pointer'>
          Corruption
        </label>
        <Switch
          id='corruption'
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
          onChange(e.target.value)
        }}
      />
    </div>
  )
}
export default Filter
