import { Link, useLocation } from "react-router-dom";
import "../Styles/cards.css";
import quality from "../assets/quality.png";
const Qualitycard = () => {
  const location = useLocation();
  return (
    <>
      <div className="card">
        <img src={quality} alt="product" className="product" />
        <div className="content">
          <h4 className="title">Quality Assurance </h4>
          <p className="desc">
            Develop skills in testing methodologies, defect tracking, and
            ensuring industry standard products of top quality.
          </p>
          <Link
            to="qualityassurance"
            className="links"
            state={{ from: location.pathname }}
          >
            <p className="true">View Curriculum →</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Qualitycard;
