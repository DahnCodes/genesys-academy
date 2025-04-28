import Emptynav from "../Components/Emptynav";
import Goback from "../Components/Goback";
import Productcard from "../Components/Productcard";
import design from "../assets/Design.png";
import "../Styles/productdesign.css";
import be from "../assets/be.png";
import be2 from "../assets/be2.png";
import Footer from "../Components/Footer";
import Frontcard from "../Components/Frontcard";
import Qualitycard from "../Components/Qualitycard";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Backend = () => {

  const location = useLocation();

  useEffect(() => {
   
      window.scrollTo({ top: 0, behavior: 'smooth' }); 
   
  }, [location]); 
  return (
    <div className="body-container">
    <div>
      <Emptynav />

      <Goback />
      <section className="about">
        <div className="about-pd">
          <img src={be} alt="" className="pd" />

          <div className="about-text">
            <h1>About this pathway</h1>
            <p>
              <b>Backend Development (BE) </b>in software engineering is the art of
              building and maintaining the server- <br />side of applications. It
              involves mastering programming languages like Python or Node.js
              and <br />database management with SQL or NoSQL databases.
            </p>
            <p>
              Backend developers focus on data storage, retrieval, API design,
              and ensuring application security <br />and scalability. They work
              behind the scenes, making them essential for any software or web <br />
              application's functionality and performance.
            </p>
          </div>
        </div>
      </section>

      <section className="learn">
        <div className="learn-wrap">
          <div className="learn-point">
            <h2>What you’ll learn</h2>
            <ul className="list">
              <li>
                Server-Side Programming: Dive into server-side technologies and
                languages like <br />Node.js, Python, or Ruby.
              </li>
              <li>
                Databases: Learn how to work with databases, both SQL and NoSQL,
                for data <br />management
              </li>
              <li>
                API Development: Build RESTful APIs to enable communication
                between the front <br />and back ends.
              </li>
              <li>
                Security: Understand security practices and measures to protect
                data and <br />applications
              </li>
              <li>
                Scalability: Discover techniques for handling large-scale
                applications and <br />optimising performance.
              </li>
              {/* <li>
                Collaboration: Work effectively with cross-functional teams to
                turn design <br />
                concepts into real products.
              </li> */}
            </ul>
          </div>
          <div className="require">
            <h2>Requirements</h2>
            <ul className="lists">
              <li>A fully functional laptop</li>
              <li>A working mobile phone.</li>
              <li>A learning attitude; and</li>
              <li>A desire to achieve excellence.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="curri">
        <h2>Curriculum</h2>
        <p>
          This program is designed to provide you with in-depth knowledge on the
          following:
        </p>
        <div className="learn-wrapper">
          <div className="first-list">
            <ul className="backend-list">
              <li>Introduction to Programming</li>
              <li>Git & Version Control</li>
              <li>JavaScript Fundamentals</li>
              <li>Object Oriented JavaScript</li>
              {/* <li>UI Design Elements and Components</li> */}
            </ul>
          </div>
          <div className="second-list">
            <ul className="second-backend">
              <li>Regular Expressions</li>
              <li>JavaScript Design Patterns</li>
              <li>Developing APIs with Node</li>
              {/* <li>Blockchain/Web3</li>
              <li>Multi Device Design and Responsive Design</li> */}
            </ul>
          </div>
        </div>
        <img src={be2} alt="" className="pd2" />
        <img src={design} alt="" className="design" />
      </section>

      <section className="others">
        <h2>Other Learning Pathways</h2>
        <div className="other-paths">
          <Frontcard />
          <Qualitycard />
          <Productcard />
        </div>
      </section>

      <Footer />
    </div>

    </div>
  );
};

export default Backend;
