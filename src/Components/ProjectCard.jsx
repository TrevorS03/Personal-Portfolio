export default function ProjectCard({ name, description, link }) {
  return (
    <div
      style={{
        border: '1px solid white',
        padding: '5px',
        margin: '5px',
        width: '300px',
        height: '250px',
        backgroundColor: '#ff00002f',
      }}
    >
      <a
        style={{
          textDecoration: 'underline',
          color: 'white',
          textAlign: 'left',
        }}
        href={link}
        target='_blank'
        rel='noopener noreferrer'
      >
        <h3>{name}</h3>
      </a>
      <p style={{ textAlign: 'left' }}>{description}</p>
    </div>
  )
}
