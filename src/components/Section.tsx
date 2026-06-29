import type { ReactNode } from 'react'

// children lets you compose markup — like <ng-content> in Angular.

type SectionProps = {
  title: string
  children: ReactNode
  actions?: ReactNode
}

function Section({ title, children, actions }: SectionProps) {
  return (
    <section className="section">
      <div className="section-header">
        <h2>{title}</h2>
        {actions && <div className="section-actions">{actions}</div>}
      </div>
      {children}
    </section>
  )
}

export default Section
