import { Link, useLocation } from "react-router-dom";
import "../Styles/cards.css";
import front from "../assets/front.png";
const Frontcard = () => {
  const location = useLocation();
  return (
    <>
      <div className="card">
        <img src={front} alt="product" className="product" />

        <div className="content">
          <h4 className="title">Front End Development </h4>
          <p className="desc">
            Learn JavaScript design pattern and how to use React to develop
            interactive websites and web apps.
          </p>
          <Link
            to="/frontend"
            className="links"
            state={{ from: location.pathname }}
          >
            <p className="true"> View Curriculum →</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Frontcard;
