import Navigationbar from "../Components/Navigationbar";
import banner from "../assets/banner.png";
import "../Styles/contact.css";
import { IoMdSend } from "react-icons/io";
import Footer from "../Components/Footer";
import location from "../assets/location.png";
import tele from "../assets/phone.png";
import mail from "../assets/mail.png";
import hours from "../assets/hours.png";
const Contact = () => {
  return (
    <>
      <Navigationbar />
      <img src={banner} alt="" className="banner" />
      <div className="contact-section">
        <div className="contact-us">
          <h1>Let’s hear from you!</h1>
          <p>
            Do you have any questions or in need of assistance? Reach out to our
            committed support team. We value your feedback and inquiry. We are
            just a click or call away and ready to help.
          </p>
          <div className="contact-form">
            <form>
              <label htmlFor="">Full Name</label>
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="Enter Full Name"
                className="fname"
              />
              <label htmlFor="">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email Address"
                className="fname"
              />
              <label htmlFor="">Message</label>
              <input
                type="email"
                id="message"
                name="message"
                placeholder="Type in your message"
                className="message"
              />
            </form>
            <div className="butn">
              <button className="btn7">
                Send
                <IoMdSend className="send" />
              </button>
            </div>
          </div>
        </div>

        <div className="details-section">
          <div className="locations">
            <div className="location-container">
              <div className="loc-img">
                <img src={location} alt="" />
              </div>
              <div className="detail-text">
                <h3>Location</h3>
                <p>
                  Kilometer 7, Enugu/Port Harcourt Expressway, Centenary City,
                  Enugu, Nigeria.
                </p>
              </div>
            </div>
            <div className="location-container">
              <div className="loc-img">
                <img src={tele} alt="" />
              </div>
              <div className="detail-text">
                <h3>Phone</h3>
                <p>
                +234 814 012 0539
                </p>
              </div>
            </div>
            <div className="location-container">
              <div className="loc-img">
                <img src={mail} alt="" />
              </div>
              <div className="detail-text">
                <h3>Mail</h3>
                <p>
                academy@genesystechhub.com
                </p>
              </div>
            </div>
            <div className="location-container">
              <div className="loc-img">
                <img src={hours} alt="" />
              </div>
              <div className="detail-text">
                <h3>Business Hours</h3>
                <div className="hours">
                  <p>Monday - Friday </p>
                  <div className="hourline"></div>
                  <p>8am - 5pm</p>
                </div>
                <div className="hours">
                  <p>Saturday - Sunday</p>
                  <div className="hourline"></div>
                  <p>Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
