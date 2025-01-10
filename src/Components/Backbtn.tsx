import { HiArrowNarrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import "../Styles/backbtn.css"

const Goback = () => {
const navigate = useNavigate()

const handleGoBack = () => {
    navigate("/personaldata")
}

  return (
    <>
      <button className="backII" onClick={handleGoBack}>
        <HiArrowNarrowLeft className="leftII" />
      </button>
    </>
  );
};

export default Goback;
