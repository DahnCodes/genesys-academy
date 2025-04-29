import { LuPhone } from "react-icons/lu";
import logo from "../assets/Logo.png";
import { MdOutlineEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FiFacebook } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import "../Styles/footer.css";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Footer = () => {
  const navigate = useNavigate();
  const handleSectionClick = (sectionId: string) => {
    navigate("/", { state: { scrollTo: sectionId } });
    

  };
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="footer-container">
        <div className="footer-king">
          <div className="footer-one">
            <img src={logo} alt="" className="logo1" />
            <p className="gets">
              Kilometer 7, Enugu/Port Harcourt Expressway, Centenary City,
              Enugu, Nigeria.
            </p>
            <a
              className="get"
              href="https://www.google.com/maps/dir/?api=1&destination=Kilometer+7,+Enugu/Port+Harcourt+Expressway,+Centenary+City,+Enugu,+Nigeria"
              target="_blank"
            >
              <p className="get">Get Direction</p>
            </a>
            <a className="direction" href="tel:+2348001234567">
              <LuPhone className="phone" />
              <p>+234 814 012 0539</p>
            </a>

            <a href="mailto:info@genesys.com" className="email">
              <MdOutlineEmail className="phone" />
              <p>academy@genesystechhub.com</p>
            </a>
          </div>
          <div className="footer-two">
            <h4>Quick Links</h4>
            <p onClick={() => handleSectionClick("home")}>Home</p>
            <p onClick={() => handleSectionClick("pathways")}>Pathways</p>
            <p onClick={() => handleSectionClick("testimonies")}>Testimonies</p>
            <Link to="/contactus" className="links">
              <p>Contact Us</p>
            </Link>
            <Link to="/faq" className="links">
              <p>FAQs</p>
            </Link>
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
              <a
                href="https://www.facebook.com/share/15PEx2fSYP/?mibextid=wwXIfr"
                className="navlinktags1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiFacebook className="icon" />
              </a>

              <a
                href="https://www.instagram.com/genesystechhub?igsh=b2x0OWgyanB5M3Nu"
                className="navlinktags1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoInstagram className="icon" />
              </a>

              <a
                href="https://x.com/genesystechhub"
                className="navlinktags1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="icon" />
              </a>

              <a
                href="https://ng.linkedin.com/company/genesystechhub?trk=similar-pages"
                className="navlinktags1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SlSocialLinkedin className="icon" />
              </a>

              <a
                href="https://youtu.be/Sazn07nmdh8?si=BbaPsuHF8hKX_Gce"
                className="navlinktags1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PiYoutubeLogoLight className="icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p> &copy; {currentYear} Gensys Tech Hub</p>
          <p>Powered By Hubly </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
