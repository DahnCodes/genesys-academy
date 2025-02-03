import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "../Styles/personaldata.css";
import { useState } from "react";
import one from "../assets/1.png";
import infoeclipse from "../assets/Ellipse 3.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OnlineAndOfflineOption from "../Components/OnlineAndOfflineOption"; // Import the modal component
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
  staffName?: string; // Optional staff name field
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
    staffName: "", // Initial state for staff name
  });

  const [showModal, setShowModal] = useState(false); // For controlling modal visibility
  const [personalDataResponse, setPersonalDataResponse] =
    useState<InternDataResFromPersonalData>(
      {} as InternDataResFromPersonalData
    );

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
      staffName,
    } = formData;

    // Validate form data
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

    // If 'Genesys Staff' is selected, validate that the staff name is filled out
    if (howDidYouHear === "Genesys Staff" && !staffName) {
      toast.error("Please provide the name of the Genesys staff member.");
      return;
    }

    try {
      // Make the POST request to create an intern
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
          staffName: staffName || undefined, // Send staff name only if provided
        }
      );

      if (response.data.success) {
        // If the request is successful, show the modal
        setPersonalDataResponse(response.data.data); // Store the response data
        setShowModal(true); // Show the modal
        toast.success("Form submitted successfully!");
      } else {
        // If there's a failure in the API response, show the error message from the API
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
    }
  };

  const handleBackButtonClick = () => {
    window.location.href = "/"; // Return to the homepage
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
        {/* <div className="no_1">
          <h1 className="personaldatapd">Personal Data</h1>
          <hr className="horizontal" />
          <figure className="pagnition1 active">
            <img src={one} alt="" className="pagnationjr1" />
          </figure>
        </div> */}
      </div>

      <div>
        <div className="pdpad">
          <div className="pdspaceinfo">
            <h2 className="pinfo">Personal Data</h2>
            <p className="aboutselfinfo">Tell us a little about yourself.</p>
          </div>
          <div className="formwrapper">
            <form onSubmit={handlePageSubmit} className="personal-data-form">
              {/* First Name */}
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

              {/* Last Name */}
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

              {/* Mobile Number */}
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

              {/* Learning Path */}
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
                  <option value="Quality Assurance">Qualiy Assurance</option>
                </select>
              </div>
              </form>
              
              <form onSubmit={handlePageSubmit} className="personal-data-form">
              {/* Email */}
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

              {/* Address */}
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

              {/* How did you hear about Genesys Academy */}
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

              {/* Conditionally render input for staff name if "Genesys Staff" is selected */}
              {formData.howDidYouHear === "Genesys Staff" && (
                <div>
                  <label className="pinfofn">Staff Name</label>
                  <input
                    type="text"
                    name="staffName"
                    value={formData.staffName || ""}
                    onChange={handleChange}
                    placeholder="Enter Staff Name"
                    className="selectinfo"
                  />
                </div>
              )}

              {/* Submit Button */}
              <div className="btninformationsentence">
                <button className="btnsubmitinfo">Submit</button>
              </div>
            </form>
          </div>
        </div>

        <div className="disappearmobile">
          <img src={infoeclipse} alt="" />
        </div>
      </div>

      {/* Render the modal if showModal is true (after successful submission) */}
      {showModal && (
        <OnlineAndOfflineOption
          open={showModal}
          onClose={handleModalClose}
          personalDataResponse={personalDataResponse}
        />
      )}

      {/* Toast Container for displaying notifications */}
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
