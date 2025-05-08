import { Link, useLocation } from "react-router-dom";
import "../Styles/cards.css";
import data from "../assets/data.png";
const Datacard = () => {
  const location = useLocation();
  return (
    <>
      <div className="card-container">
        <div className="card">
          <img src={data} alt="product" className="product" />
          <div className="content">
            <h4 className="title">Data Analysis </h4>
            <p className="desc">
              Learn to use statistical techniques, data visualization and
              advanced analytics to make real-world impact.
            </p>
            <Link
              to="/dataanalysis"
              className="links"
              state={{ from: location.pathname }}
            >
              <p className="true"> View Curriculum →</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Datacard;
