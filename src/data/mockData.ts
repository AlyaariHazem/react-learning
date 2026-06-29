import type { Lesson, Student } from '../types'

export const currentUser = {
  name: 'Hazem',
}

export const initialLessons: Lesson[] = [
  {
    id: 1,
    title: 'Components & JSX',
    topic: 'Building blocks of React UI',
    difficulty: 'beginner',
    completed: true,
    minutes: 25,
  },
  {
    id: 2,
    title: 'Props & State',
    topic: 'Passing data and managing changes',
    difficulty: 'beginner',
    completed: false,
    minutes: 30,
  },
  {
    id: 3,
    title: 'Lists & Events',
    topic: 'Rendering arrays and handling clicks',
    difficulty: 'intermediate',
    completed: false,
    minutes: 35,
  },
  {
    id: 4,
    title: 'Custom Hooks',
    topic: 'Reusable stateful logic across components',
    difficulty: 'intermediate',
    completed: false,
    minutes: 40,
  },
  {
    id: 5,
    title: 'Context & Composition',
    topic: 'Sharing state without prop drilling',
    difficulty: 'advanced',
    completed: false,
    minutes: 45,
  },
]

export const students: Student[] = [
  { id: 1, name: 'Hazem', course: 'React Basics', grade: 'A', isYou: true },
  { id: 2, name: 'Fatima', course: 'TypeScript Fundamentals', grade: 'B+' },
  { id: 3, name: 'Ahmad', course: 'React Hooks', grade: 'A-' },
  { id: 4, name: 'Nora', course: 'State Management', grade: 'B' },
  { id: 5, name: 'Yusuf', course: 'Testing React', grade: 'A+' },
]
