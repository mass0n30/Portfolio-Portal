const skills = [
 "React",
 "JavaScript",
 "Responsive Design",
 "Node.js",
 "API Integration",
 "UI Prototyping",
];

const projects = [
 {
   title: "Portfolio Portal",
   description:
     "A polished personal site for introducing my work, technical strengths, and contact points.",
 },
 {
   title: "Project Tracker",
   description:
     "A dashboard that organizes active builds, milestones, and next steps for client-friendly updates.",
 },
 {
   title: "Component Library",
   description:
     "Reusable interface pieces focused on accessibility, consistency, and quick iteration.",
 },
];

function HomePage() {
 return (
   <div className="portfolio-page">
     <section className="hero-section">
       <img
         className="hero-headshot"
         src="/headshot.svg"
         alt="Headshot illustration for Masson"
       />
       <div className="hero-copy">
         <p className="eyebrow">Personal Portfolio</p>
         <h1>Masson | Full-Stack Developer</h1>
         <p className="hero-summary">
           I build modern web experiences that showcase thoughtful design,
           clean frontend architecture, and practical product thinking.
         </p>
         <div className="hero-skill-list" aria-label="Top skills">
           {skills.slice(0, 3).map((skill) => (
             <span key={skill} className="skill-pill">
               {skill}
             </span>
           ))}
         </div>
       </div>
     </section>

     <section className="content-section" aria-labelledby="skills-heading">
       <h2 id="skills-heading">Skills</h2>
       <ul className="skills-grid">
         {skills.map((skill) => (
           <li key={skill} className="card">
             {skill}
           </li>
         ))}
       </ul>
     </section>

     <section className="content-section" aria-labelledby="projects-heading">
       <h2 id="projects-heading">Featured Projects</h2>
       <div className="projects-grid">
         {projects.map((project) => (
           <article key={project.title} className="card project-card">
             <h3>{project.title}</h3>
             <p>{project.description}</p>
           </article>
         ))}
       </div>
     </section>
   </div>
 );
}

export default HomePage;