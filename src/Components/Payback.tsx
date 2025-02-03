import { HiArrowNarrowLeft } from "react-icons/hi"
import { useNavigate } from "react-router-dom"
import "../Styles/goback.css"


const Payback = () => {

    const navigate = useNavigate()

const handleGoBack = () => {
    navigate("/")
}
  return (
    <>
        <button className="backs" onClick={handleGoBack}>
          <HiArrowNarrowLeft className="lefter" />
        </button>
      </>
  )
}

export default Payback