import ProjectCard from './ProjectCard.jsx'

export default function ProjectSection() {
  return (
    <div style={{ maxWidth: '90%', margin: '0 auto', textAlign: 'left' }}>
      <h2>My Projects</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
        }}
      >
        <ProjectCard
          name='Personal Site'
          description='The site you are currently viewing.'
          link='#'
        />
        <ProjectCard
          name='Dungeons and Dragons Tracker'
          description='A helper app for tracking Dungeons and Dragons games. This app is still in development and is not yet complete.'
          link='#'
        />
        <ProjectCard
          name='Boiler Room'
          description='A Steam-linked app for getting game information and recommendations from your library.'
          link='https://boiler-room-481.onrender.com/'
        />
        <ProjectCard
          name='No Souls Cross'
          description='A game inspired by the Souls series. This is a work in progress and is not yet complete.'
          link='https://trevtrev.itch.io/no-souls-cross'
        />
        <ProjectCard
          name='Special Interest Project'
          description='A game developed by a small group in my High School programming class.'
          link='https://trevtrev.itch.io/special-interest-project'
        />
      </div>
    </div>
  )
}
