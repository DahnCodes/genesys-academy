import { HiArrowNarrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import "../Styles/backbtn.css";

const Goback = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // This will take the user back to the previous page in history
  };

  return (
    <button className="backII" onClick={handleGoBack}>
      <HiArrowNarrowLeft className="leftII" />
    </button>
  );
};

export default Goback;
