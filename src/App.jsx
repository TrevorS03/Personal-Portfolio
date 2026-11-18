import './App.css'
import ProjectSection from './Components/ProjectSection.jsx'
import Headers from './Components/Headers.jsx'
import Info from './Components/Info.jsx'
function App() {
  return (
    <div className='App'>
      <h1 className='site-title'>Trevor Small</h1>
      <p className='site-subtitle'>Software Development • IT • Game Development</p>
      <div className='social-links'>
        <a
          href='https://github.com/YOUR_USERNAME'
          target='_blank'
          rel='noopener noreferrer'
        >
          GitHub
        </a>

        <a
          href='https://linkedin.com/in/YOUR_USERNAME'
          target='_blank'
          rel='noopener noreferrer'
        >
          LinkedIn
        </a>

        <a href='/resume.pdf' target='_blank' rel='noopener noreferrer'>
          Resume
        </a>

        <a href='mailto:trevorsmall0818@gmail.com'>Email</a>
      </div>
      <Info />
      <ProjectSection />
    </div>
  )
}

export default App
