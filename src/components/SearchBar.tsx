import type { ChangeEvent } from 'react'

// A controlled input: React owns the value via props + onChange.
// In Angular this is like [(ngModel)] or [value] + (input) on the same field.

type SearchBarProps = {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  label: string
}

function SearchBar({ value, onChange, placeholder, label }: SearchBarProps) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value)
  }

  return (
    <label className="search-bar">
      <span className="search-label">{label}</span>
      <input
        type="search"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        aria-label={label}
      />
    </label>
  )
}

export default SearchBar
