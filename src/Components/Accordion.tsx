import { useState } from "react";
import "../Styles/accordion.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <h4>
        {title}
        <span className="icon" onClick={toggleAccordion}>
          {isOpen ? (
            <FaChevronUp className="dn" />
          ) : (
            <FaChevronDown className="dn" />
          )}
        </span>
      </h4>
      {isOpen && (
        <div className="content-wrapper">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
