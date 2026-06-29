import { useCallback } from 'react'

type CounterProps = {
  count: number
  onIncrement: () => void
  onDecrement: () => void
  onReset: () => void
}

function Counter({ count, onIncrement, onDecrement, onReset }: CounterProps) {
  const handleIncrement = useCallback(() => onIncrement(), [onIncrement])
  const handleDecrement = useCallback(() => onDecrement(), [onDecrement])
  const handleReset = useCallback(() => onReset(), [onReset])

  return (
    <section className="counter-section">
      <div className="counter-header">
        <h2>Practice Counter</h2>
        <span className="counter-badge">useState + localStorage</span>
      </div>
      <p className="counter-value">{count}</p>
      <p className="counter-hint">Persists between visits via a custom hook.</p>
      <div className="counter-buttons">
        <button type="button" className="btn-counter" onClick={handleDecrement} aria-label="Decrease count">
          −
        </button>
        <button type="button" className="btn-counter btn-reset" onClick={handleReset}>
          Reset
        </button>
        <button type="button" className="btn-counter" onClick={handleIncrement} aria-label="Increase count">
          +
        </button>
      </div>
    </section>
  )
}

export default Counter
