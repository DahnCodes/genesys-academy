import heroimg from "../assets/hero2.png";
import gen from "../assets/Vector.png";
import man1 from "../assets/man1.png";
import Navigationbar from "../Components/Navigationbar";
import Productcard from "../Components/Productcard";
import Frontcard from "../Components/Frontcard";
import Backcard from "../Components/Backcard";
import Datacard from "../Components/Datacard";
import Qualitycard from "../Components/Qualitycard";
import illustration from "../assets/illustration.png";
import group1 from "../assets/group1.png";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import group2 from "../assets/group2.png";
import four from "../assets/four.png";
import five from "../assets/five.png";
import six from "../assets/six.png";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import curve from "../assets/curve.png";
import wifi from "../assets/wifi.png";
// import Testimonycarousel from "../Components/Carousel";
import paul from "../assets/paul.png";
import Footer from "../Components/Footer";
// import Testimonalcard from "../Components/Testimonalcard";
// import Carousel from "../Components/Carousel";
import CardCarousel from "../Components/Cardcarousel";
import { Link } from "react-router-dom";
import OfflineModal from "../Components/OfflineModal";
import { useState } from "react";

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://genesys-web-app-revamp.onrender.com/api/v1/subscriber/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        setSuccess(true);
        setEmail("");
        setError(null);
      } else {
        const errorData = await response.json();
        setError(
          errorData.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      setError("There was an issue with the subscription. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navigationbar />
      <header className="hero-container">
        <div className="hero-writeup">
          <h1>
            Get Skilled To Excel, <br /> Begin Your Tech Journey.{" "}
          </h1>
          <p>
            Interested in getting comprehensive, hands-on-training in software{" "}
            development career? Then Genesys Academy is your best bet to gain{" "}
            the skills you need to excel!
          </p>
          <div className="btns">
            <Link to="/personaldata">
              <button className="btn2">Begin Application</button>
            </Link>
            <button className="btn3" onClick={openModal}>
              Validate Offline Payment
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroimg} alt="" className="heroimg" />
        </div>

        {isModalOpen && <OfflineModal closeModal={closeModal} />}
      </header>

      <section className="whoweare">
        <img src={gen} alt="" className="gen" />
        <div className="weare">
          <img src={man1} alt="" className="man1" />
          <div className="weare-text">
            <h1>Who We Are</h1>
            <p>
              Genesys Academy is a Software Development Institute with certified
              experts as trainers, a well-structured curriculum and a
              world-class learning environment to give students an exceptional
              learning experience.
            </p>
          </div>
        </div>
      </section>

      <section className="pathways" id="pathways">
        <div className="pathway-header">
          <h1>Program Pathways</h1>
          <p>
            This program is designed to provide you with in-depth knowledge in
            any of these pathways as we aim to equip you with the necessary
            skills to excel in the tech space.
          </p>
        </div>
        <div className="pathway-cards">
          <Productcard />
          <Frontcard />
          <Backcard />
        </div>

        <div className="second-cards">
          <Datacard />
          <Qualitycard />
        </div>
      </section>

      <div className="illustration">
        <img src={illustration} alt="" className="illustration" />
      </div>

      <section className="stand-out">
        <h1>Why We Stand Out</h1>

        <div className="point-container">
          <img src={group1} alt="" className="group1" />
          <div className="point-lists">
            <div className="point1">
              <img src={one} alt="" className="one" />
              <div className="point-p">
                <h2>One-on-One Mentorship</h2>
                <p>
                  Our commitment to mentorship with our interns is immeasurable,
                  with close guidance and support making the learning experience
                  favourable.
                </p>
              </div>
            </div>
            <div className="point1">
              <img src={two} alt="" className="one" />
              <div className="point-p">
                <h2>Friendly Learning Environment</h2>
                <p>
                  We have a friendly atmospheric environment that suits our
                  interns enabling them to feel the comfort of learning.
                </p>
              </div>
            </div>
            <div className="point1">
              <img src={three} alt="" className="one" />
              <div className="point-p">
                <h2>Our Community</h2>
                <p>
                  Our community has some of the best minds in the world of tech,
                  stand a chance to learn and be amongst them.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="second-point">
          <img src={group2} alt="" className="group2" />
          <div className="point-lists">
            <div className="point2">
              <img src={four} alt="" className="one" />
              <div className="point-p">
                <h2>Gain Real Work Experience</h2>
                <p>
                  Our curriculum is spiced up with an implementation phase where
                  our interns are expose to real work experience.
                </p>
              </div>
            </div>
            <div className="point2">
              <img src={five} alt="" className="one" />
              <div className="point-p">
                <h2>Personal Growth</h2>
                <p>
                  We help our interns inculcate a growth mindset enabling them
                  become one of the best in their respective career pathways and
                  so much more.
                </p>
              </div>
            </div>
            <div className="point2">
              <img src={six} alt="" className="one" />
              <div className="point-p">
                <h2>Get Job Placement</h2>
                <p>
                  We fix our interns in job positions to showcase their work
                  experience in real time at tech firms to give them further
                  career opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="meet-interns">
        <h1>Meet Our Past Interns</h1>

        <div className="first-team">
          <img src={team1} alt="" className="team1" />
          <div className="icons">
            <img src={curve} alt="" className="curve" />
            <img src={wifi} alt="" className="wifi" />
            <div className="core">
              <p>
                We believe that Excellence is a culture and we are committed to
                a philosophy of consistent Improvement in everything we do, we
                are Passionate and Candid we trust in the power of
                Collaboration.
              </p>
            </div>
          </div>
        </div>

        <div className="second-team">
          <img src={team2} alt="" className="team1" />
          <div className="icons">
            <img src={curve} alt="" className="curve" />
            <img src={wifi} alt="" className="wifi" />
            <div className="core">
              <p>
                We believe that Excellence is a culture and we are committed to
                a philosophy of consistent Improvement in everything we do, we
                are Passionate and Candid we trust in the power of
                Collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonies" id="testimonies">
        <h1>Testimonies Of Past Interns</h1>

        <div className="testimony-card">
          <CardCarousel />
        </div>
      </section>

      <section className="cohort">
        <h1>Join The Next Cohort</h1>

        <div className="cohort-wrap">
          <img src={paul} alt="" className="paul" />

          <div className="cohort-text">
            <h2>Apply Online</h2>
            <p>
              Complete the application process by filling the forms, follow the{" "}
              steps required of you in order for you to secure a spot for the{" "}
              next cohort. After a successful application online, your Tech
              journey can Begin.
            </p>
            <Link to="/personaldata">
              <button className="btn4">Apply Now</button>
            </Link>
          </div>
        </div>
      </section>

      <div className="stay-connected">
        <h1>Stay Connected</h1>
        <p>
          Join our mailing list to receive information about our work and new
          learning opportunities.
        </p>
        <div className="subscribe">
          <form onSubmit={handleSubmit} className="btnsubscribe">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="subs"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <button
              type="submit"
              className="btn5"
              disabled={loading}
            >
              {loading ? "SUBSCRIBING..." : "SUBSCRIBE"}
            </button>
          </form>
          {success && (
            <p className="success-message">Thank you for subscribing!</p>
          )}
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LandingPage;
