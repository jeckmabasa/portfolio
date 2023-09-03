import profile from "../assets/profile.jpg";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import resume from "../assets/Resume_Jeck-Mabasa.pdf";

export const Profile = () => {
  const handleOnClick = () => {
    window.open(resume);
  };
  return (
    <section id="profile">
      <div class="profile-pic">
        <img src={profile} alt="Jeck Mabasa profile" />
      </div>
      <div class="section__text">
        <p class="section__text__p1">Hello, I'm</p>
        <h1 class="title">Jeck Mabasa</h1>
        <p class="section__text__p2">Fullstack Developer</p>
        <div class="btn-container">
          <button class="btn btn-color-2" onClick={handleOnClick}>
            Download CV
          </button>
          <button
            class="btn btn-color-1"
            onClick={() => {
              window.location.href = "./#contact";
            }}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={linkedin}
            alt="My LinkedIn profile"
            class="icon"
            onClick={() => {
              window.location.href =
                "https://www.linkedin.com/in/jeck-mabasa-167a3461/";
            }}
          />
          <img
            src={github}
            alt="My Github profile"
            class="icon"
            onClick={() => {
              window.location.href = "https://github.com/chibijeck";
            }}
          />
        </div>
      </div>
    </section>
  );
};
