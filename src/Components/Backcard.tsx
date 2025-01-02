import { Link, useLocation } from "react-router-dom";
import "../Styles/cards.css";
import back from "../assets/back.png";
const Backcard = () => {
  const location = useLocation();
  return (
    <>
      <div className="card">
        <img src={back} alt="product" className="product" />
        <div className="content">
          <h4 className="title">Back End Development </h4>
          <p className="desc">
            Get educated on JavaScript advanced topics: RegExp, design patterns,
            OOP and APIs.
          </p>
          <Link
            to="/backend"
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

export default Backcard;
