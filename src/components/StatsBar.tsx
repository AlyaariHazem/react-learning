import { useMemo } from 'react'
import type { Lesson } from '../types'
import ProgressBar from './ProgressBar'

type StatsBarProps = {
  lessons: Lesson[]
  studentCount: number
  practiceCount: number
}

function StatsBar({ lessons, studentCount, practiceCount }: StatsBarProps) {
  const stats = useMemo(() => {
    const completed = lessons.filter((lesson) => lesson.completed).length
    const progress = lessons.length === 0 ? 0 : Math.round((completed / lessons.length) * 100)
    const minutesLeft = lessons
      .filter((lesson) => !lesson.completed)
      .reduce((total, lesson) => total + lesson.minutes, 0)

    return { completed, total: lessons.length, progress, minutesLeft }
  }, [lessons])

  return (
    <div className="stats-panel">
      <div className="stats-bar">
        <div className="stat stat-lessons">
          <span className="stat-icon" aria-hidden="true">📚</span>
          <span className="stat-value">{stats.completed}/{stats.total}</span>
          <span className="stat-label">Lessons done</span>
        </div>
        <div className="stat stat-progress">
          <span className="stat-icon" aria-hidden="true">📈</span>
          <span className="stat-value">{stats.progress}%</span>
          <span className="stat-label">Progress</span>
        </div>
        <div className="stat stat-students">
          <span className="stat-icon" aria-hidden="true">👥</span>
          <span className="stat-value">{studentCount}</span>
          <span className="stat-label">Students</span>
        </div>
        <div className="stat stat-counter">
          <span className="stat-icon" aria-hidden="true">🔢</span>
          <span className="stat-value">{practiceCount}</span>
          <span className="stat-label">Counter clicks</span>
        </div>
      </div>

      <ProgressBar
        value={stats.progress}
        label={`${stats.progress}% complete · ~${stats.minutesLeft} min remaining`}
      />
    </div>
  )
}

export default StatsBar
