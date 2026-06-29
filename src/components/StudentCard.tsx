import type { Student } from '../types'

type StudentCardProps = {
  student: Student
  highlight?: string
}

function highlightText(text: string, query: string) {
  const trimmed = query.trim()
  if (!trimmed) return text

  let index = text.indexOf(trimmed)
  let matchLength = trimmed.length

  if (index === -1) {
    const lowerIndex = text.toLowerCase().indexOf(trimmed.toLowerCase())
    if (lowerIndex === -1) return text
    index = lowerIndex
    matchLength = trimmed.length
  }

  const before = text.slice(0, index)
  const match = text.slice(index, index + matchLength)
  const after = text.slice(index + matchLength)

  return (
    <>
      {before}
      <mark>{match}</mark>
      {after}
    </>
  )
}

function gradeClass(grade: string) {
  if (grade.startsWith('A')) return 'grade-a'
  if (grade.startsWith('B')) return 'grade-b'
  return 'grade-c'
}

function StudentCard({ student, highlight = '' }: StudentCardProps) {
  const { name, course, grade, isYou } = student

  return (
    <article className={`card student-card ${isYou ? 'student-card-you' : ''}`}>
      <div className="student-card-header">
        <span className="avatar" aria-hidden="true">
          {name.charAt(0)}
        </span>
        <div className="student-info">
          <h3>{highlightText(name, highlight)}</h3>
          {isYou && <span className="badge badge-you">You</span>}
        </div>
      </div>

      <p>
        <strong>Course:</strong> {highlightText(course, highlight)}
      </p>
      <p>
        <strong>Grade:</strong>{' '}
        <span className={`grade-pill ${gradeClass(grade)}`}>{grade}</span>
      </p>
    </article>
  )
}

export default StudentCard
