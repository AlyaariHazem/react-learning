import { useCallback, useMemo, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Section from './components/Section'
import StatsBar from './components/StatsBar'
import FilterTabs from './components/FilterTabs'
import SearchBar from './components/SearchBar'
import LessonCard from './components/LessonCard'
import StudentCard from './components/StudentCard'
import Counter from './components/Counter'
import EmptyState from './components/EmptyState'
import { currentUser, initialLessons, students } from './data/mockData'
import { useLocalStorage } from './hooks/useLocalStorage'
import type { Lesson, LessonFilter } from './types'

function matchesStudentSearch(text: string, query: string) {
  const trimmed = query.trim()
  if (!trimmed) return true
  return text.includes(trimmed) || text.toLowerCase().includes(trimmed.toLowerCase())
}

function App() {
  const [lessons, setLessons] = useLocalStorage<Lesson[]>('lesson-progress-v2', initialLessons)
  const [lessonFilter, setLessonFilter] = useState<LessonFilter>('all')
  const [studentSearch, setStudentSearch] = useState('')
  const [count, setCount] = useLocalStorage('practice-counter', 0)

  const filteredLessons = useMemo(() => {
    return lessons.filter((lesson) => {
      if (lessonFilter === 'completed') return lesson.completed
      if (lessonFilter === 'pending') return !lesson.completed
      return true
    })
  }, [lessons, lessonFilter])

  const filteredStudents = useMemo(() => {
    const query = studentSearch.trim()
    if (!query) return students

    return students.filter(
      (student) =>
        matchesStudentSearch(student.name, query) ||
        matchesStudentSearch(student.course, query),
    )
  }, [studentSearch])

  const toggleLesson = useCallback((id: number) => {
    setLessons((current) =>
      current.map((lesson) =>
        lesson.id === id ? { ...lesson, completed: !lesson.completed } : lesson,
      ),
    )
  }, [setLessons])

  const increment = useCallback(() => setCount((value) => value + 1), [setCount])
  const decrement = useCallback(() => setCount((value) => value - 1), [setCount])
  const reset = useCallback(() => setCount(0), [setCount])

  return (
    <div className="dashboard">
      <Header
        title="Learning React with TypeScript"
        subtitle="Hooks, derived state, custom hooks, and composition — patterns you already know from Angular, expressed the React way."
        userName={currentUser.name}
      />

      <StatsBar lessons={lessons} studentCount={students.length} practiceCount={count} />

      <main className="dashboard-main">
        <Section
          title="Lessons"
          actions={<FilterTabs active={lessonFilter} onChange={setLessonFilter} />}
        >
          {filteredLessons.length === 0 ? (
            <EmptyState message="No lessons match this filter." />
          ) : (
            <div className="card-grid card-grid-lessons">
              {filteredLessons.map((lesson) => (
                <LessonCard key={lesson.id} lesson={lesson} onToggle={toggleLesson} />
              ))}
            </div>
          )}
        </Section>

        <div className="dashboard-split">
          <Section
            title="Students"
            actions={
              <SearchBar
                label="Search students"
                value={studentSearch}
                onChange={setStudentSearch}
                placeholder="Hazem or React…"
              />
            }
          >
            {filteredStudents.length === 0 ? (
              <EmptyState message="No students match your search." />
            ) : (
              <div className="card-grid card-grid-students">
                {filteredStudents.map((student) => (
                  <StudentCard
                    key={student.id}
                    student={student}
                    highlight={studentSearch}
                  />
                ))}
              </div>
            )}
          </Section>

          <Counter
            count={count}
            onIncrement={increment}
            onDecrement={decrement}
            onReset={reset}
          />
        </div>
      </main>
    </div>
  )
}

export default App
