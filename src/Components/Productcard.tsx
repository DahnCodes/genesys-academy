import { Link, useLocation } from "react-router-dom";
// import { useEffect } from "react";
import "../Styles/cards.css";
import product from "../assets/product.png";

const Productcard = () => {
  const location = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0); 
  // }, []);

  return (
    <>
      <div className="card-container">
        <div className="card">
          <img src={product} alt="product" className="product" />

          <div className="content">
            <h4 className="title">Product Design</h4>

            <p className="desc">
              Learn to build brands and transform ideas into digital solutions
              with good marketing strategies.
            </p>
            <Link
              to="/productdesign"
              state={{ from: location.pathname }}
              className="links"
            >
              <p className="true">View Curriculum →</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productcard;
