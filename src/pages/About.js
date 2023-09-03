import profile2 from "../assets/profile-2.jpg";
import experience from "../assets/experience.png";
import education from "../assets/education.png";
import arrow from "../assets/arrow.png";

export const About = () => {
  return (
    <section id="about">
      <p class="section__text__p1">Get To Know More</p>
      <h1 class="title">About Me</h1>
      <div class="section-container">
        <div class="about-pic-container">
          <img src={profile2} alt="Profile picture" class="about-pic" />
        </div>
        <div class="about-details-container">
          <div class="about-containers">
            <div class="details-container">
              <img src={experience} alt="Experience icon" class="icon" />
              <h3>Experience</h3>
              <p>
                10+ years <br />
                Fullstack (MERN) Development
              </p>
            </div>
            <div class="details-container">
              <img src={education} alt="Education icon" class="icon" />
              <h3>Education</h3>
              <p>
                B.S. Computer Science
                <br />
                Major in Application Development
              </p>
            </div>
          </div>
          <div class="text-container">
            <p>
              As a React developer, I bring a wealth of experience in building
              interactive and responsive web applications. With a strong
              background in front-end development and expertise in React, I am
              passionate about creating engaging user experiences that drive
              business value. Throughout my career, I have collaborated with
              cross-functional teams to deliver high-quality solutions that meet
              the unique needs of each project. I am skilled in implementing
              best practices for application architecture, optimizing
              performance, and ensuring accessibility and usability. My
              technical proficiency includes React, Redux, TypeScript,
              JavaScript, HTML, and CSS, among others. I am always eager to
              learn and stay up-to-date with the latest technologies and
              industry trends. As a self-starter and proactive problem solver, I
              am committed to delivering top-notch results and exceeding client
              expectations. I thrive in dynamic and challenging environments and
              am always ready to take on new opportunities and challenges. If
              you're looking for a skilled React developer to help take your web
              application to the next level, let's connect and explore how I can
              contribute to your team.
            </p>
          </div>
        </div>
      </div>
      <img
        src={arrow}
        alt="Arrow icon"
        class="icon arrow"
        onClick={() => {
          window.location.href = "./#experience";
        }}
      />
    </section>
  );
};
