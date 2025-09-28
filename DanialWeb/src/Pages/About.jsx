import '../css/About.css';
import cvimage from '../Images/cv.webp';

function About() {
  return (
    <section className="about-container">
      <header>
        <h1>About Me</h1>
      </header>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hi, I'm <strong>Danial Abu Yamn</strong>. Welcome to my personal website! Here you'll find information about my projects, skills, and interests.<br /><br />
            I'm a 21-year-old software engineering student passionate about creating innovative solutions and learning new technologies.<br /><br />
            I have experience with ESP32 and Python projects, and I've created multiple websites using HTML, JavaScript, and recently React.<br /><br />
            <span className="cv-note">Click Here to download my CV.</span>
          </p>
        </div>
        <a href="/cv.pdf" download>
          <img src={cvimage} alt="Danial Abu Yamn CV" className="profile-pic" />
        </a>
      </div>
    </section>
  );
}

export default About;