type HeaderProps = {
  title: string
  subtitle: string
  userName: string
}

function Header({ title, subtitle, userName }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-glow" aria-hidden="true" />
      <p className="header-eyebrow">React with TypeScript</p>
      <p className="header-greeting">
        Welcome, <strong>{userName}</strong> 👋
      </p>
      <h1>{title}</h1>
      <p className="header-subtitle">{subtitle}</p>
    </header>
  )
}

export default Header
