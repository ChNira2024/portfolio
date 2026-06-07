// import React from "react";
// import skills from "../data/skillsData";

// function Skills() {
//   return (
//     <section id="skills" className="section">
//       <h2>Technical Skills</h2>

//       {skills.map((skill, index) => (
//         <p key={index}>
//           <b>{skill.category}:</b> {skill.items}
//         </p>
//       ))}
//     </section>
//   );
// }

// export default Skills;

import React from "react";
import skills from "../data/skillsData";

function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Core Technical Skills</h2>

      {skills.map((skill, index) => (
        <p key={index}>
          <b>{skill.category}:</b> {skill.items}
        </p>
      ))}
    </section>
  );
}

export default Skills;