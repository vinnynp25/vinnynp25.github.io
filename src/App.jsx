const sections = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
]

function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Portfolio navigation">
      <a className="sidebar-name" href="#home" aria-label="Back to top">VN</a>
      <nav>
        <ul>
          {sections.map(({ id, label }) => (
            <li key={id}><a href={`#${id}`}>{label}</a></li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

function GithubIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.37 0 0 5.5 0 12.3c0 5.43 3.44 10.03 8.2 11.65.6.11.82-.27.82-.59v-2.1c-3.34.74-4.04-1.65-4.04-1.65-.55-1.42-1.33-1.8-1.33-1.8-1.09-.76.08-.75.08-.75 1.2.09 1.84 1.27 1.84 1.27 1.07 1.88 2.8 1.34 3.49 1.02.11-.8.42-1.34.76-1.65-2.67-.31-5.47-1.37-5.47-6.08 0-1.34.47-2.44 1.24-3.3-.12-.31-.54-1.56.12-3.25 0 0 1.01-.33 3.3 1.26A11.2 11.2 0 0 1 12 5.92c1.02.01 2.04.14 3 .42 2.29-1.59 3.3-1.26 3.3-1.26.66 1.69.24 2.94.12 3.25.77.86 1.24 1.96 1.24 3.3 0 4.72-2.81 5.76-5.49 6.07.43.38.81 1.13.81 2.28v3.38c0 .32.22.7.83.59A12.25 12.25 0 0 0 24 12.3C24 5.5 18.63 0 12 0Z" /></svg>
}

function LinkedinIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.38 4.27 5.47v6.28ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.04H3.54V8.98H7.1v11.47ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" /></svg>
}

function App() {
  return (
    <>
      <Sidebar />
      <main>
        <div className="content">
          <header className="intro" id="home">
            <h1 className="name" title="Vincent Nguyen"><span className="typing">Vincent Nguyen</span></h1>
            <p className="title">Software Engineer</p>
            <div className="social-links" aria-label="Social links">
              <a href="https://github.com/vinnynp25" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon /></a>
              <a href="https://www.linkedin.com/in/vpnguye" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
            </div>
          </header>

          <section id="experience">
            <h2>Experience</h2>
            <p>Software Engineer Intern (June 2025 – August 2025)</p>
          </section>
          <section id="projects">
            <h2>Projects</h2>
            <p className="placeholder">Selected work coming soon.</p>
          </section>
          <section id="skills">
            <h2>Skills</h2>
            <p className="placeholder">Technical skills coming soon.</p>
          </section>
        </div>
      </main>
    </>
  )
}

export default App
