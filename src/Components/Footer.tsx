import { LuPhone } from "react-icons/lu";
import logo from "../assets/Logo.png";
import { MdOutlineEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FiFacebook } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import "../Styles/footer.css";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-king">
          <div className="footer-one">
            <img src={logo} alt="" className="logo1" />
            <p className="gets">
              Kilometer 7, Enugu/Port Harcourt <br /> Expressway, Centenary
              City, Enugu, <br /> Nigeria.
            </p>
            <p className="get">Get Direction</p>
            <div className="direction">
              <LuPhone className="phone" />
              <p>+234 814 012 0539</p>
            </div>

            <div className="email">
              <MdOutlineEmail className="phone" />
              <p>academy@genesystechhub.com</p>
            </div>
          </div>
          <div className="footer-two">
            <h4>Quick Links</h4>
            <p>Home</p>
            <p>Pathways</p>
            <p>Testimonies</p>
            <p>Contact Us</p>
            <p>FAQs</p>
          </div>
          <div className="footer-three">
            <h4>Pathways</h4>
            <Link to="/productdesign" className="links">
              <p>Product Design</p>
            </Link>
            <Link to="/frontend" className="links">
              <p>Front End</p>
            </Link>
            <Link to="/backend" className="links">
              <p>Back End</p>
            </Link>
            <Link to="/dataanalysis" className="links">
              <p>Data Analysis</p>
            </Link>
            <Link to="/qualityassurance" className="links">
              <p>Quality Assurance</p>
            </Link>
          </div>
          <div className="footer-four">
            <h4>Follow Us</h4>
            <div className="follow">
              <FiFacebook className="icon" />
              <IoLogoInstagram className="icon" />
              <FaXTwitter className="icon" />
              <SlSocialLinkedin className="icon" />
              <PiYoutubeLogoLight className="icon" />
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>&copy; 2024 Genesys Tech Hub</p>
          <p>Powered By Hubly </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
