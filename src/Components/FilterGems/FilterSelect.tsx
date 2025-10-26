import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectProps,
} from '@mui/material'

export type Option<T> = {
  label: string
  value: T
}

type FilterSelectProps<T> = Omit<SelectProps<T>, 'onChange'> & {
  label: string
  options: Option<T>[]
  onChange: (value: T) => void
}

function FilterSelect<T extends string | number>({
  label,
  options,
  onChange,
  value,
  ...rest
}: FilterSelectProps<T>) {
  return (
    <FormControl
      sx={{m: 1, minWidth: 80}}
      size='small'>
      <InputLabel id={label}>{label}</InputLabel>
      <Select
        labelId={label}
        sx={{m: 1, minWidth: 120}}
        value={value}
        label={label}
        onChange={(e) => onChange(e.target.value as T)}
        {...rest}>
        {options.map((opt) => (
          <MenuItem
            key={opt.value.toString()}
            value={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
export default FilterSelect
