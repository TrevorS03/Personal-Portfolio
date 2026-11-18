export default function Headers({ name = 'Trevor Small' }) {
  return (
    <header
      style={{
        fontFamily: 'var(--heading)',
      }}
    >
      <h1>{name}</h1>
    </header>
  )
}
