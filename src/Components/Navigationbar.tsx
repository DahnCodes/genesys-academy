import { FaArrowRightLong } from "react-icons/fa6";
import logo from "../assets/Logo.png";
import "../Styles/navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navigationbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSectionClick = (sectionId: string) => {
    navigate("/");

    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const toggleHome = () => {
    navigate("/");
  };
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);

    // Add or remove the no-scroll class on the body
    const burger: HTMLInputElement | null = document.getElementById(
      "burger"
    ) as HTMLInputElement;

    if (burger) {
      burger.addEventListener("change", () => {
        if (burger.checked) {
          document.body.classList.add("no-scroll");
        } else {
          document.body.classList.remove("no-scroll");
        }
      });
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <img src={logo} alt="" className="logo" />
        </Link>
        <ul className="navlinks">
          <a
            href="#pathways"
            className="link"
            onClick={() => handleSectionClick("pathways")}
          >
            <li className="navs">Pathways</li>
          </a>
          <a
            href="#testimonies"
            className="link"
            onClick={() => handleSectionClick("testimonies")}
          >
            <li className="navs">Testimonies</li>
          </a>
          <Link to="/contactus" className="links">
            <li className="navs">Contact Us</li>
          </Link>
          <Link to="/faq" className="links">
            <li className="navs">FAQs</li>
          </Link>
        </ul>

        <Link to="/personaldata" className="opp">
          <button className="btn1">
            Get Started
            <FaArrowRightLong className="arrow1" />
          </button>
        </Link>

        <label className="burger">
          <input type="checkbox" id="burger" onClick={handleMenuToggle} />
          <span></span>
          <span></span>
          <span></span>
        </label>

        {/* Dimming Overlay */}
        {isMenuOpen && (
          <div className="overlay" onClick={handleMenuToggle}></div>
        )}

        {isMenuOpen && (
          <>
            <ul className={`navlink-active ${isMenuOpen ? "show" : ""}`}>
              <a href="#pathways" className="link" onClick={toggleHome}>
                <li
                  className="navs"
                  onClick={() => handleSectionClick("pathways")}
                >
                  Pathways
                </li>
              </a>
              <a href="#testimonies" className="link">
                <li
                  className="navs"
                  onClick={() => handleSectionClick("testimony")}
                >
                  Testimonies
                </li>
              </a>
              <Link to="/contactus" className="links">
                <li className="navs">Contact Us</li>
              </Link>
              <Link to="/faq" className="links">
                <li className="navs">FAQs</li>
              </Link>
              <Link to="/personaldata" className="links">
                <button className="btn0">
                  Get Started
                  <FaArrowRightLong className="arrow1" />
                </button>
              </Link>
            </ul>
          </>
        )}
      </nav>
    </>
  );
};

export default Navigationbar;
