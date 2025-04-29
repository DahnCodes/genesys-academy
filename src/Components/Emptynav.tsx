import { FaArrowRightLong } from "react-icons/fa6";
import logo from "../assets/Logo.png";
import "../Styles/navbar.css";
import { Link } from "react-router-dom";

const Emptynav = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <img src={logo} alt="" className="logo" />
        </Link>

        <Link to="/personaldata" className="links">
          <button className="btn1">
            Get Started
            <FaArrowRightLong className="arrow1" />
          </button>
        </Link>
      </nav>
    </>
  );
};

export default Emptynav;
