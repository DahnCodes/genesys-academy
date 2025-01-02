import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/testimony.css";
import quote from "../assets/quote.png";

interface CardProps {
  title: string;
  role: string;
  description: string;
}

const testimonials: CardProps[] = [
  {
    title: "John Doe",
    role: "Software Engineer",
    description:
      "Genesys Academy gave me the skills and confidence to excel in my career.",
  },
  {
    title: "Jane Smith",
    role: "UI/UX Designer",
    description:
      "The mentorship program was exceptional and invaluable to my journey.",
  },
  {
    title: "Samuel Lee",
    role: "Data Scientist",
    description:
      "The learning environment and curriculum were truly world-class.",
  },
];

// Custom Previous Button
const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button className="slick-prev" onClick={onClick}>
    &#x2190; {/* Left Arrow */}
  </button>
);

// Custom Next Button
const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button className="slick-next" onClick={onClick}>
    &#8594; {/* Right Arrow */}
  </button>
);

const TestimonialCarousel: React.FC = () => {
  const settings = {
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    prevArrow: <PrevArrow />, // Custom previous button
    nextArrow: <NextArrow />, // Custom next button
    centerMode: true,
    centerPadding: "5",
  };

  return (
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <div key={index}>
          <div className="testimony-container">
            <img src={quote} alt="Quote" className="quote" />
            <div className="testimonials">
              <h2>{testimonial.title}</h2>
              <p>{testimonial.role}</p>
              <p className="description">{testimonial.description}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialCarousel;
