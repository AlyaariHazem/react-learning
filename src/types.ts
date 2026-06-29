// Shared types keep models in one place — similar to Angular interfaces in a models/ folder.

export type Lesson = {
  id: number
  title: string
  topic: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  completed: boolean
  minutes: number
}

export type Student = {
  id: number
  name: string
  course: string
  grade: string
  isYou?: boolean
}

export type LessonFilter = 'all' | 'completed' | 'pending'
