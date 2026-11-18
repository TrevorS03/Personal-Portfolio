import ProjectCard from './ProjectCard.jsx'
import Headers from './Headers.jsx'
export default function ProjectSection() {
  return (
    <div style={{ maxWidth: '90%', margin: '0 auto', textAlign: 'left' }}>
      <Headers name='Projects' />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '20px',
        }}
      >
        <ProjectCard
          name='Personal Site'
          status='Work In Progress'
          technology='React, CSS, Javascript'
          description='Both my personal and professional site. It exists to showcase my work
          and provide an easy way to contact me, see my resume, and view my projects.'
          link='#'
        />
        <ProjectCard
          name='Dungeons and Dragons Combat Tracker'
          status='Work In Progress'
          technology='React, CSS, Flask, Python'
          description='A web app using Flask to import and Track Dungeons and Dragons combat encounters with 
          Player character information. This is a work in progress and is not yet complete.'
          link='#'
        />
        <ProjectCard
          name='Boiler Room'
          status='Completed'
          technology='React, Express.js, Typescript, Python, Steam API'
          description='Implemented the Steamworks API to allow users to link their steam account to get personalized
          game recommendations based on their library. This was a group project for my Software Engineering class.'
          link='https://boiler-room-481.onrender.com/'
        />
        <ProjectCard
          name='No Souls Cross'
          status='Work In Progress'
          technology='Unity, C#, Blender'
          description='A game inspired by the Souls series and my own DND campaign. Currently working on releasing a demo.
          This is a work in progress and is not yet complete.'
          link='https://trevtrev.itch.io/no-souls-cross'
        />
        <ProjectCard
          name='Special Interest Project'
          status='Completed'
          technology='Unity, C#'
          description='A small 2d platform game developed by me and a small group in my
          High School programming class. Version 1.0 was released in 2020 and is available on itch.io.'
          link='https://trevtrev.itch.io/special-interest-project'
        />
      </div>
    </div>
  )
}
