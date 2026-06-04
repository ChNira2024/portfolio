// import React from "react";

// function ProjectCard({ project }) {
//   return (
//     <div className="card">
//       <h3>{project.title}</h3>
//       <p>{project.description}</p>

//       <p><b>Tech:</b> {project.tech}</p>

//       <a href={project.github} target="_blank" rel="noreferrer">
//         GitHub
//       </a>
//     </div>
//   );
// }

export default ProjectCard;
function ProjectCard({ project }) {
  return (
    <div className="card">
      <h3 style={{ color: "#38bdf8" }}>{project.title}</h3>

      <p>{project.description}</p>

      <p style={{ color: "#94a3b8" }}>
        <b>Tech:</b> {project.tech}
      </p>

      <a href={project.github} target="_blank" rel="noreferrer">
        🔗 View Code
      </a>
    </div>
  );
}