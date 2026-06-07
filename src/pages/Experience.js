import React from "react";

function Experience() {
  return (
    <section id="experience" className="section">
      <h2>Professional Experience</h2>

      <p>
        Below are key project experiences demonstrating my work in backend
        development, system design, and deployment.
      </p>

      <div className="card">
        <h3>Java Backend Development Experience</h3>
        <ul>
          <li>Designed and developed REST APIs using Spring Boot</li>
          <li>Worked on authentication using JWT and Spring Security</li>
          <li>Optimized database queries for better performance</li>
          <li>Integrated third-party APIs and payment systems</li>
        </ul>
      </div>

      <div className="card">
        <h3>System & Deployment Experience</h3>
        <ul>
          <li>Worked with CI/CD pipelines for automated deployments</li>
          <li>Deployed applications using Docker and cloud environments</li>
          <li>Handled logging and monitoring for backend services</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;