import "../css/About.css";
import design from "../images/design.svg";
import html from "../images/html.svg";
import react from "../images/react.svg";
import photo from "../images/image1.jpg";
const About = () => {
  return (
    <div>
      <div className="about" id="about">
        <h2>About me</h2>

        <div className="line"></div>
      </div>

      <div className="main">
        {/* section1 */}
        <div className="about-me">
          <img src={photo} />
          <div className="about-right">
            <h1>SAISHA VEERABHADRA</h1>
            <p>
            Hi!!👋 I'm Saisha, a software developer and can also work aiml building and 
            working with models and also have a good knowledge in web development also.
            </p>{" "}
            <br></br>
            <p>
              {" "}
              Java is the main programming language which I love to do. 
              I can also adapt to any programming language and also I have knowledge in Python.
            </p>{" "}
            <br></br>
            <p>
            I've channeled my passion for coding into a dynamic and impactful career. With a commitment to creative problem-solving and a 
            dedication to lifelong learning, I've crafted innovative solutions and contributed to real-world projects. My code 
            reflects my pursuit of efficiency and elegant solutions, and my engagement within the coding community underscores my collaborative spirit.
            </p>
          </div>
        </div>
{/* section2 */}
        <div className="cards">
          <div className="card ">
            <img src={design} />
            <div className="line"></div>
            <div className="card-content">
              <h6>Software Development</h6>
              <p>Transforming ideas into digital solutions</p>
            </div>
          </div>
          <div className="card ">
            <img src={html} />
            <div className="line"></div>
            <div className="card-content">
              <h6>Model Building</h6>
              <p>Predictive algorithms for data analysis.</p>
            </div>
          </div>
          <div className="card ">
            <img src={react} />
            <div className="line"></div>
            <div className="card-content">
              <h6>Web Development</h6>
              <p>Websites with fast loading.</p>
            </div>
          </div>
        </div>
{/* section3 */}
        <div className="boxes">
          <div className="box">
            <div className="line2"></div>
            <div className="study-text">
              <h6>I work and study about</h6>
              <p>Coding Java</p>
              <p>Coding Python</p>
              <p>Coding Frontend Development</p>
              <p>Studying MySQL Database</p>
              <p>Studying User Experience</p>
            </div>
          </div>
          <div className="box">
            <div className="line2"></div>
            <div className="study-text">
              <h6>I've had experiences with</h6>
              <p>MySQL Database</p>
              <p>Coding Python</p>
              <p>Coding Web</p>
              <p>Coding Java</p>
              <p>GIT, GitHub</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;