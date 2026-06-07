import React from "react";

function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>

      <p>
        Email:{" "}
        <a href="mailto:niranjanacharty2013@gmail.com">
          niranjanacharty2013@gmail.com
        </a>
      </p>

      <p>Phone: <a href="tel:+919583172160">+91 9583172160</a></p>

      <p>
        GitHub:{" "}
        <a
          href="https://github.com/ChNira2024"
          target="_blank"
          rel="noreferrer"
        >
          github.com/ChNira2024
        </a>
      </p>

      <p>
        LinkedIn:{" "}
        <a
          href="https://linkedin.com/in/niranjana-charty-88922a104"
          target="_blank"
          rel="noreferrer"
        >
          linkedin.com/in/niranjana-charty
        </a>
      </p>
    </section>
  );
}

export default Contact;