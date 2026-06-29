import { useCallback } from 'react'
import type { Lesson } from '../types'

type LessonCardProps = {
  lesson: Lesson
  onToggle: (id: number) => void
}

function LessonCard({ lesson, onToggle }: LessonCardProps) {
  const handleToggle = useCallback(() => {
    onToggle(lesson.id)
  }, [lesson.id, onToggle])

  const { id, title, topic, difficulty, completed, minutes } = lesson

  return (
    <article className={`card lesson-card ${completed ? 'card-done' : ''}`}>
      <div className="lesson-number" aria-hidden="true">
        {String(id).padStart(2, '0')}
      </div>

      <div className="card-top">
        <h3>{title}</h3>
        <span className={`badge badge-${difficulty}`}>{difficulty}</span>
      </div>

      <p className="card-topic">{topic}</p>
      <p className="lesson-meta">~{minutes} min</p>

      <div className="lesson-status-row">
        {completed && <span className="badge badge-done">✓ Completed</span>}
        {!completed && <span className="badge badge-pending">In progress</span>}
      </div>

      <button type="button" className="card-action" onClick={handleToggle}>
        {completed ? 'Mark incomplete' : 'Mark complete'}
      </button>
    </article>
  )
}

export default LessonCard
