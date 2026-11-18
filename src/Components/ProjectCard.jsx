import './ProjectCard.css'

export default function ProjectCard({ name, technology, status, description, link }) {
  let condition = status === 'Work In Progress' ? true : false
  const statusClass = condition ? 'wip' : 'completed'

  return (
    <div className='project-card'>
      <a
        className='project-card-title'
        href={link}
        target='_blank'
        rel='noopener noreferrer'
      >
        <h3>{name}</h3>
      </a>
      <p className='project-card-technology'>{technology}</p>

      <p className='project-card-description'>{description}</p>
      <p className={statusClass}>{status}</p>
    </div>
  )
}
