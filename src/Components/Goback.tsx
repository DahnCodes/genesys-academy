import { HiArrowNarrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Goback = () => {
const navigate = useNavigate()

const handleGoBack = () => {
    navigate("/")
}

  return (
    <>
      <button className="back" onClick={handleGoBack}>
        <HiArrowNarrowLeft className="left" />
      </button>
    </>
  );
};

export default Goback;
