import React from "react";

function Resume() {
  return (
    <section id="resume" className="section">
      <h2>Resume</h2>

      <a
        href={`${process.env.PUBLIC_URL}/Niranjan_Charty_Java_Developer.pdf`}
        target="_blank"
        rel="noreferrer"
      >
        View Resume
      </a>

      <br /><br />

      <a
        href={`${process.env.PUBLIC_URL}/Niranjan_Charty_Java_Developer.pdf`}
        download
      >
        Download Resume
      </a>
    </section>
  );
}

export default Resume;