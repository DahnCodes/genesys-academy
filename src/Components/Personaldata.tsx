import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "../Styles/personaldata.css";
import { useState } from "react";
import infoeclipse from "../assets/Ellipse 3.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OnlineAndOfflineOption from "../Components/OnlineAndOfflineOption";
import { InternDataResFromPersonalData } from "../types/sharedtypes";
import axios from "axios";

interface FormData {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  email: string;
  address: string;
  learningPath: string;
  howDidYouHear: string;
  referrerName?: string;
}

const Personaldata = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    address: "",
    learningPath: "",
    howDidYouHear: "",
    referrerName: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [personalDataResponse, setPersonalDataResponse] =
    useState<InternDataResFromPersonalData>(
      {} as InternDataResFromPersonalData
    );
  const [submitting, setSubmitting] = useState(false); // Track submission state

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePageSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      mobileNumber,
      email,
      address,
      learningPath,
      howDidYouHear,
      referrerName,
    } = formData;

    if (
      !firstName ||
      !lastName ||
      !mobileNumber ||
      !email ||
      !address ||
      !learningPath ||
      !howDidYouHear
    ) {
      toast.error("Please fill in all fields before submitting.");
      return;
    }

    if (howDidYouHear === "Genesys Staff" && !referrerName) {
      toast.error("Please provide the name of the Genesys staff member.");
      return;
    }

    setSubmitting(true); // Set submitting to true to disable button

    try {
      const response = await axios.post(
        "https://genesys-web-app-revamp.onrender.com/api/v1/intern/",
        {
          firstName,
          lastName,
          phoneNumber: mobileNumber,
          email,
          address,
          learningPath,
          medium: howDidYouHear,
          referrerName: referrerName || undefined,
        }
      );

      if (response.data.success) {
        setPersonalDataResponse(response.data.data); // Store the response data
        setShowModal(true); // Show the modal
        toast.success("Form submitted successfully!");
      } else {
        const apiErrorMessage =
          response.data.message || "Something went wrong, please try again.";
        toast.error(apiErrorMessage);
      }
    } catch (error: any) {
      console.error("Error submitting form:", error);

      const errorMessage =
        error.response && error.response.data
          ? error.response.data.message ||
            "An error occurred, please try again."
          : "An unknown error occurred.";

      toast.error(errorMessage);
    } finally {
      setSubmitting(false); // Reset submitting flag after the request
    }
  };

  const handleBackButtonClick = () => {
    window.location.href = "/";
  };

  const handleModalClose = () => {
    // Close the modal
    setShowModal(false);
  };

  return (
    <div className="personaldatawrapper">
      <div className="pagnition">
        <button className="startpersonal" onClick={handleBackButtonClick}>
          <FontAwesomeIcon icon={faArrowLeft} className="farrowleft" />
        </button>
      </div>
      <div>
        <div className="pdpad">
          <div className="pdspaceinfo">
            <h2 className="pinfo">Personal Data</h2>
            <p className="aboutselfinfo">Tell us a little about yourself.</p>
          </div>
          <div className="formwrapper">
            <form onSubmit={handlePageSubmit} className="personal-data-form">
              <div>
                <label className="pinfofn">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter First Name"
                  className="selectinfo"
                />
              </div>

              <div>
                <label className="pinfofn">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter Last Name"
                  className="selectinfo"
                />
              </div>

              <div>
                <label className="pinfofn">Mobile Number</label>
                <input
                  type="text"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  placeholder="Enter Mobile Number"
                  className="selectinfo"
                />
              </div>

              <div>
                <label className="pinfofn">
                  What is your desired Learning Path?
                </label>
                <select
                  name="learningPath"
                  value={formData.learningPath}
                  onChange={handleChange}
                  className="selectinfo"
                >
                  <option value="">Select Option</option>
                  <option value="Product Design">Product Design</option>
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                  <option value="Data Analysis">Data Analysis</option>
                  <option value="Quality Assurance">Quality Assurance</option>
                </select>
              </div>
            </form>

            <form onSubmit={handlePageSubmit} className="personal-data-form">
              <div>
                <label className="pinfofn">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Email Address"
                  className="selectinfo"
                />
              </div>

              <div>
                <label className="pinfofn">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter Address"
                  className="selectinfo"
                />
              </div>

              <div>
                <label className="pinfofn">
                  How did you hear about Genesys Academy?
                </label>
                <select
                  name="howDidYouHear"
                  value={formData.howDidYouHear}
                  onChange={handleChange}
                  className="selectinfo"
                >
                  <option value="">Select Option</option>
                  <option value="Instagram">Instagram</option>
                  <option value="X">X</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Youtube">Youtube</option>
                  <option value="Genesys Staff">Genesys Staff</option>
                  <option value="Family/Friend">Family/Friend</option>
                </select>
              </div>

              {formData.howDidYouHear === "Genesys Staff" && (
                <div>
                  <label className="pinfofn">Staff Name</label>
                  <input
                    type="text"
                    name="referrerName"
                    value={formData.referrerName || ""}
                    onChange={handleChange}
                    placeholder="Enter Staff Name"
                    className="selectinfo"
                  />
                </div>
              )}

              <div className="btninformationsentence">
                <button
                  className="btnsubmitinfo"
                  type="submit"
                  disabled={submitting} // Disable the button when submitting
                >
                  {submitting ? (
                    <div className="spinner"></div> // Loading spinner
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="disappearmobile">
          <img src={infoeclipse} alt="" />
        </div>
      </div>

      {showModal && (
        <OnlineAndOfflineOption
          open={showModal}
          onClose={handleModalClose}
          personalDataResponse={personalDataResponse}
        />
      )}

      <ToastContainer
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeButton
        className="custom-toast-container"
      />
    </div>
  );
};

export default Personaldata;
