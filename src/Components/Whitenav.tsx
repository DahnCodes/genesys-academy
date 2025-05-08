import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import "../Styles/navbar.css";

const Whitenav = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <img src={logo} alt="" className="logo" />
        </Link>
      </nav>
    </>
  );
};

export default Whitenav;
