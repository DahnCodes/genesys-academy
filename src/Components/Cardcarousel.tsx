import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/testimony.css";
import quote from "../assets/quote.png";

// Interface for data structure
interface TestimonialData {
  _id: string;
  name: string;
  comment: string;
  designation: string;
  createdAt: string;
  updatedAt: string;
  imageUrl: string;
}

const TestimonialCarousel: React.FC = () => {
  const [testimonials, setTestimonials] = useState<TestimonialData[]>([]);

  // Fetch the testimonials from the API
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          "https://genesys-web-app-revamp.onrender.com/api/v1/review/"
        ); // Replace with your endpoint
        // const response = await fetch(
        //   "https://genesys-web-app-revamp.onrender.com/api/v1/review/"
        // ); // Replace with your endpoint
        const data = await response.json();
        if (data.success) {
          setTestimonials(data.data); // Set the response data to state
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

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

  const settings = {
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    prevArrow: <PrevArrow />, // Custom previous button
    nextArrow: <NextArrow />, // Custom next button
    centerMode: true,
    centerPadding: "10",
  
  };

  return (
    <Slider {...settings}>
      {testimonials.map((testimonial) => (
        <div key={testimonial._id}>
          <div className="testimony-container">
            <img src={quote} alt="Quote" className="quote" />
            <div className="testimonials">
              <img src={testimonial.imageUrl} alt="" className="past-interns" />
              <div className="testimonial-text">
                <h3>{testimonial.name}</h3>
                <p className="role">{testimonial.designation}</p>
                <p className="description">{testimonial.comment}</p>
              </div>
              {/* <img src={testimonial.imageUrl} alt="" className="past-intern"/> */}
              {/* <h3>{testimonial.name}</h3>
              <p className="role">{testimonial.designation}</p>
              <p className="description">{testimonial.comment}</p> */}
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialCarousel;
