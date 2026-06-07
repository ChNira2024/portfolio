// import React from "react";
// import projects from "../data/projectsData";
// import ProjectCard from "../components/ProjectCard";

// function Projects() {
//   return (
//     <section id="projects" className="section">
//       <h2>Projects</h2>

//       {projects.map((proj, index) => (
//         <ProjectCard key={index} project={proj} />
//       ))}
//     </section>
//   );
// }

// export default Projects;

import React from "react";
import projects from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Key Projects</h2>

      {projects.map((proj, index) => (
        <ProjectCard key={index} project={proj} />
      ))}
    </section>
  );
}

export default Projects;