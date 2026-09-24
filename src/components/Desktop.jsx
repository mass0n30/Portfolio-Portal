
import { X, Minus, Square } from "lucide-react";
import { useState } from 'react';

export default function Desktop() {
  const [toggled, setToggled] = useState(null);
  const [maximized, setMaximized] = useState(false);
  const [minimized, setMinimized] = useState(false);

  const openWindow = (id) => {
    setToggled(id);
    setMinimized(false);
    setMaximized(false);
  };

  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="min-h-screen bg-desktop px-2 py-4 font-sans text-ink sm:px-6 lg:py-8">

      <div className="flex flex-col gap-8">
        <button onClick={() => openWindow('recycle')} className="flex flex-col items-center w-18">
          <img src="/windows-98/trash.png" alt="" className="w-12 h-12" />
          <span className="text-center">Recycle Bin</span>
        </button>

        <button onClick={() => openWindow('projects')} className="flex flex-col items-center w-18">
          <img src="/windows-98/folder.png" alt="" className="w-12 h-12" />
          <span className="text-center">My Projects</span>
        </button>

        <button onClick={() => openWindow('about')} className="flex flex-col items-center w-18">
          <img src="/windows-98/pad.png" alt="" className="w-12 h-12" />
          <span className="text-center">About Me</span>
        </button>

        <button onClick={() => openWindow('resume')} className="flex flex-col items-center w-18">
          <img src="/windows-98/resources.png" alt="" className="w-12 h-12" />
          <span className="text-center">My Resume</span>
        </button>
      </div>

      {toggled && !minimized && (
        <Window
          title={
            toggled === 'resume' ? 'Resume.pdf' :
            toggled === 'projects' ? 'My Projects' :
            toggled === 'about' ? 'About Me' :
            'Recycle Bin'
          }
          maximized={maximized}
          setMaximized={setMaximized}
          onMinimize={() => setMinimized(true)}
          onClose={() => { setToggled(null); setMaximized(false); }}
        >
          {toggled === 'projects' && <Projects />}
          {toggled === 'about' && <About />}
          {toggled === 'resume' && <Resume />}
          {toggled === 'recycle' && <div className="p-4">Recycle Bin is empty.</div>}
        </Window>
      )}

      <footer className="taskbar fixed bottom-0 left-0 right-0 bg-window border-t border-border p-2 flex items-center gap-2">
        <button className="taskbar-button bg-button py-2">
          <img src="/windows-98/windows.png" alt="" className="inline-block w-10 h-8 mr-2" />
          <span className="font-bold">Start</span>
        </button>

        {toggled && (
          <span
            onClick={() => setMinimized(!minimized)}
            className="taskbar-button bg-button text-button-text px-4 py-2"
          >
            {toggled === 'resume' ? 'My Resume' :
             toggled === 'projects' ? 'My Projects' :
             toggled === 'about' ? 'About Me' :
             'Recycle Bin'}
          </span>
        )}

        <div className="ml-auto">
          <span className="taskbar-button bg-button text-button-text px-4 py-2">
            {currentTime}
          </span>
        </div>
      </footer>

    </div>
  );
}

function Window({ title, children, maximized, setMaximized, onMinimize, onClose }) {
  return (
    <div className={`window fixed z-10 flex flex-col bg-window p-1 border border-border shadow-xl ${
      maximized
        ? 'top-0 left-0 w-full h-full'
        : 'top-[10%] left-[5%] w-[90%] h-[75%] sm:top-[12%] sm:left-[15%] sm:w-[70%]'
    }`}>

      <div className="titlebar flex justify-between items-center bg-blue-900 text-white p-1 shrink-0">
        <span className="font-bold px-1">{title}</span>

        <div className="controls flex gap-1">
          <button onClick={onMinimize} aria-label="Minimize"><Minus size={14} /></button>
          <button onClick={() => setMaximized(!maximized)} aria-label="Maximize or restore"><Square size={14} /></button>
          <button onClick={onClose} aria-label="Close"><X size={14} /></button>
        </div>
      </div>

      <div className="content flex-1 min-h-0 overflow-auto bg-white">
        {children}
      </div>

    </div>
  );
}

function About() {
  return (
    <div className="p-4 sm:p-8 mx-auto">


      <div className="flex items-center text-3xl font-bold mt-2 mb-6">
        <span className="ml-2 mr-2 mb-4"> ~ Hello World</span>
        <img src="/windows-98/world.png" className="w-12 h-12 rounded-full mb-6" />
      </div>

      <div className="space-y-5 leading-relaxed">
        <p>
          I'm a self-taught software developer based in Columbus, Indiana.
          I enjoy solving problems, building useful tools, and orchestrating systems together. Over the past few years,
          I've focused on full-stack development, working with technologies
          like React, Node.js, Express, and PostgreSQL.
        </p>

        <p>
          My approach to development is rooted in solving real problems.
          I built ShelterLedger after recognizing an opportunity to improve
          everyday workflows at a homeless shelter where I work. Projects
          like this have strengthened my interest in system design,
          automation, and building software that provides meaningful value
          to the people using it. 
        </p>

        <p>
          I'm always interested in learning new technologies, improving
          my understanding of complex systems, and finding opportunities
          to put my skills to work.
        </p>
        <p>
          I am looking to continue to grow as a developer and contribute to projects that make a difference. I believe that my breadth of experience, problem-solving skills, and passion for development would make me a valuable addition to any team. ~ Masson Corlette
        </p>
      </div>

      <div className="border-t border-border-dark mt-8 pt-4 flex flex-wrap gap-3">
        {['React', 'Node.js', 'PostgreSQL', 'REST APIs', 'Prisma', 'TypeScript', 'Git', 'JavaScript', 'HTML', 'CSS', 'Tailwind', 'Systems Design', 'Authentication', 'CI/CD'].map(tech => (
          <span key={tech} className="bg-window px-3 py-1 border border-border">
            {tech}
          </span>
        ))}
      </div>

    </div>
  );
}

function Projects() {

  const projects = [
    {
      name: 'RetroGamingAtlas',
      description: 'Explore thousands of video games, discover game details, and track your collection. Leveraging RAWG, EBAY, YouTube, and Twitch APIs for a comprehensive experience viewing video game information, speedrun and listing data.',
      image: '/game-app.png',
      stack: ['React', 'Node.js', 'PostgreSQL'],
      link: ''
    },
    {
      name: 'Messaging App',
      description: 'A full-stack messaging application with group chats, direct messages, and file sharing. Initial development owning the full stack, developing the backend with Node.js and PostgreSQL, and the frontend with React. Later development focused on the frontend.',
      image: '/message-app.png',
      stack: ['React', 'Node.js', 'PostgreSQL'],
      link: ''
    }
  ];

  return (
    <div className=" mx-auto p-3 sm:p-6 space-y-4">

      <div className="flex justify-between items-center flex-wrap gap-4">
        <div className="pb-4">
          <span className="text-xs font-mono font-bold text-text-muted">
            MY WORK
          </span>

          <h1 className="text-2xl font-bold mt-1">
            Featured Projects
          </h1>

          <p className="text-sm text-text-muted mt-2">
            A selection of applications I've designed and developed.
          </p>
        </div>
        <div>
          <a href="https://github.com/mass0n30" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
            <img src="/github-black.png" alt="Projects banner" className="w-10 h-auto mt-4" />
            <span className="text-xs text-text-muted block mt-1">View more on GitHub →</span>
          </a>
        </div>
      </div>

      <div className="border border-window-dark p-4 sm:p-5">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

          <div className="space-y-4">

            <span className="text-xs font-mono text-text-muted">
              FEATURED PROJECT
            </span>

            <h2 className="text-3xl font-bold">
              ShelterLedger
            </h2>

            <p className="text-text-muted text-sm leading-relaxed">
              A case-management platform designed to simplify homeless
              shelter operations. Built to help staff manage client
              information, track services, automate workflows, and
              organize daily responsibilities.
            </p>

            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'PostgreSQL', 'Prisma'].map(tech => (
                <span key={tech} className="bg-window px-3 py-1 text-sm">
                  {tech}
                </span>
              ))}
            </div>

            <a
              href="https://youtu.be/66jynkZKCOo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[12px] text-link underline hover:text-link-hover"
            >
              Watch Demo →
            </a>

          </div>

          <div className="border border-border-dark p-1 bg-window">
            <img
              src="/shelter-app.png"
              alt="ShelterLedger dashboard"
              className="w-full h-auto"
            />
          </div>

        </div>

      </div>

      <div className="space-y-3">

        {projects.map(project => (
          <div
            key={project.name}
            className="border border-window-dark bg-white p-3 flex flex-col sm:flex-row sm:items-center gap-4"
          >

            <img
              src={project.image}
              alt={`${project.name} screenshot`}
              className="w-full sm:w-40 h-28 object-cover border border-border-dark"
            />

            <div className="flex-1 space-y-1">

              <h3 className="text-lg font-bold">
                {project.name}
              </h3>

              <p className="text-sm text-text-muted">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.stack.map(tech => (
                  <span key={tech} className="bg-window text-xs px-2 py-1">
                    {tech}
                  </span>
                ))}
              </div>

            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link underline hover:text-link-hover whitespace-nowrap"
              >
                View Project →
              </a>
            )}

          </div>
        ))}

      </div>

    </div>
  );
}

function Resume() {
  return (
    <div className="flex h-full flex-col">

      <div className="flex gap-4 border-b border-border-dark p-3 shrink-0">
        <a
          href="/Masson_Corlette_Full_Stack_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link underline hover:text-link-hover"
        >
          View PDF
        </a>

        <a
          href="/Masson_Corlette_Full_Stack_Resume.pdf"
          download="Masson-Corlette-Resume.pdf"
          className="text-link underline hover:text-link-hover"
        >
          Download
        </a>
      </div>

      <iframe
        src="/Masson_Corlette_Full_Stack_Resume.pdf"
        title="My Resume"
        className="w-full flex-1 min-h-0 bg-white"
      />

    </div>
  );
}
