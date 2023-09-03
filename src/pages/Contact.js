import linkedin from "../assets/linkedin.png";
import email from "../assets/email.png"

export const Contact = () => {
  return (
    <section id="contact">
      <p class="section__text__p1">Get in Touch</p>
      <h1 class="title">Contact Me</h1>
      <div class="contact-info-upper-container">
        <div class="contact-info-container">
          <img
            src={email}
            alt="Email icon"
            class="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:jeck.elequin@gmail.com">jeck.elequin@gmail.com</a>
          </p>
        </div>
        <div class="contact-info-container">
          <img
            src={linkedin}
            alt="LinkedIn icon"
            class="icon contact-icon"
          />
          <p>
            <a href="https://www.linkedin.com">LinkedIn</a>
          </p>
        </div>
      </div>
    </section>
  );
};
