import type { LessonFilter } from '../types'

type FilterTabsProps = {
  active: LessonFilter
  onChange: (filter: LessonFilter) => void
}

const filters: { value: LessonFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'completed', label: 'Completed' },
  { value: 'pending', label: 'In progress' },
]

function FilterTabs({ active, onChange }: FilterTabsProps) {
  return (
    <div className="filter-tabs" role="tablist" aria-label="Filter lessons">
      {filters.map((filter) => (
        <button
          key={filter.value}
          type="button"
          role="tab"
          aria-selected={active === filter.value}
          className={active === filter.value ? 'tab active' : 'tab'}
          onClick={() => onChange(filter.value)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}

export default FilterTabs
