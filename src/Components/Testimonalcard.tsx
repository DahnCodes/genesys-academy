import "../Styles/testimony.css";
import quote from "../assets/quote.png";

interface CardProps {
  title: string;
  role: string;
  description: string;
  //   image: string;
}
const Testimonalcard: React.FC<CardProps> = ({ title, role, description }) => {
  return (
    <>
      <div className="testimony-container">
        <img src={quote} alt="" className="quote" />

        <div className="testimonials">
          {/* <img src={image} alt={title} /> */}
          <h2>{title}</h2>
          <p>{role}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Testimonalcard;
