import { useState } from "react";
import Navigationbar from "../Components/Navigationbar";
import banner from "../assets/banner.png";
import "../Styles/contact.css";
import { IoMdSend } from "react-icons/io";
import Footer from "../Components/Footer";
import location from "../assets/location.png";
import tele from "../assets/phone.png";
import mail from "../assets/mail.png";
import hours from "../assets/hours.png";
import axios from "axios";

// Import Toastify for notifications
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  // Step 1: Define state for form inputs
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Step 2: Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form fields with specific error messages
    if (!fullName) {
      toast.error("Full Name is required. Example: John Doe.");
      return;
    }

    if (!email) {
      toast.error("Email Address is required. Example: johndoe@example.com.");
      return;
    }

    // Simple email validation regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      toast.error(
        "Please provide a valid email address. Example: johndoe@example.com."
      );
      return;
    }

    if (!message) {
      toast.error("Message is required. Please type in your message.");
      return;
    }

    setIsSubmitting(true); // Disable submit button during API request

    try {
      // Make a POST request to the API
      const response = await axios.post(
        "https://genesys-web-app-revamp.onrender.com/api/v1/contact-message/",
        {
          fullName,
          email,
          message,
        }
      );

      if (response.data.success) {
        toast.success(response.data.message); // Success message from API
        // Optionally, reset form fields after success
        setFullName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.error("Error submitting message:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false); // Re-enable submit button
    }
  };

  const address =
    "Kilometer 7, Enugu/Port Harcourt Expressway, Centenary City, Enugu, Nigeria";
  const googleMapsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    address
  )}`;

  return (
    <>
      <Navigationbar />
      <img src={banner} alt="" className="banner" />
      <div className="contact-section">
        <div className="contact-us">
          <h1 className="hear">Let’s hear from you!</h1>
          <p>
            Do you have any questions or in need of assistance? Reach out to our
            committed support team. We value your feedback and inquiry. We are
            just a click or call away and ready to help.
          </p>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <label htmlFor="fname">Full Name</label>
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="Enter Full Name"
                className="fname"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email Address"
                className="fname"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Type in your message"
                className="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className="butn">
                <button type="submit" className="btn7" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send"}
                  <IoMdSend className="send" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="details-section">
          <div className="locations">
            <div className="location-container">
              <div className="loc-img">
                <img src={location} alt="" />
              </div>
              <div className="detail-text">
                <h3 className="info_location">Location</h3>
                <p>
                  <a
                    href={googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {address}
                  </a>
                </p>
              </div>
            </div>
            <div className="location-container">
              <div className="loc-img">
                <img src={tele} alt="" />
              </div>
              <div className="detail-text">
                <h3 className="info_location">Phone</h3>
                <a href="tel:+234 814 012 0539">
                  <p>+234 814 012 0539</p>
                </a>
              </div>
            </div>
            <div className="location-container">
              <div className="loc-img">
                <img src={mail} alt="" />
              </div>
              <div className="detail-text">
                <h3 className="info_location">Mail</h3>
                <a href="mailto:academy@genesystechhub.com">
                  <p>academy@genesystechhub.com</p>
                </a>
              </div>
            </div>
            <div className="location-container">
              <div className="loc-img">
                <img src={hours} alt="" />
              </div>
              <div className="detail-text">
                <h3 className="info_location">Business Hours</h3>
                <div className="hours">
                  <p>Monday - Friday </p>
                  <div className="hourline"></div>
                  <p>8am - 5pm</p>
                </div>
                <div className="hours">
                  <p>Saturday - Sunday</p>
                  <div className="hourline"></div>
                  <p>Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      {/* ToastContainer to display the notifications */}
      <ToastContainer />
    </>
  );
};

export default Contact;
