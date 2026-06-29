import { useEffect, useState } from 'react'

// Custom hooks extract reusable logic — think of them like small Angular services
// that components can call. React hooks must start with "use".

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const stored = localStorage.getItem(key)
      return stored ? (JSON.parse(stored) as T) : initialValue
    } catch {
      return initialValue
    }
  })

  // useEffect runs after render — similar to ngOnInit or lifecycle hooks in Angular.
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as const
}
