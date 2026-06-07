import React from "react";

function Home() {
  return (
    <section id="home" className="section">
      <h1>Hi, I'm Niranjan Charty 👋</h1>

      <h3>
        Java Backend Developer | Spring Boot | Microservices | AWS | DevOps
      </h3>

      <p>
        Software Engineer with 2.9 years of experience in designing, developing,
        and deploying scalable backend systems using Java, Spring Boot, and
        Microservices architecture. Strong focus on performance optimization,
        system reliability, and cloud-based deployments.
      </p>

      <p className="highlights">
        ✔ Improved API performance by 30% using Redis caching <br />
        ✔ Built and maintained RESTful microservices <br />
        ✔ Worked on CI/CD pipelines and AWS deployments <br />
        ✔ Implemented secure authentication using JWT <br />
      </p>

      <p>
        <b>📍 Hyderabad | Open to Backend / Full Stack opportunities</b>
      </p>

      {/* Resume Buttons */}
      <div className="btn-group">
        <a
          href={`${process.env.PUBLIC_URL}/Niranjan_Charty_Java_Developer.pdf`}
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          📄 View Resume
        </a>

        <a
          href={`${process.env.PUBLIC_URL}/Niranjan_Charty_Java_Developer.pdf`}
          download
          className="btn-outline"
        >
          ⬇️ Download Resume
        </a>
      </div>
    </section>
  );
}

export default Home;