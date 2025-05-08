import { Link, useLocation } from "react-router-dom";
import "../Styles/paysmallsmall.css";
import Payback from "../Components/Payback";
import hands from "../assets/handmoney.png";
import illustration from "../assets/illustration.png";
import shapes from "../assets/shapes 1.png";
import steps2 from "../assets/bigsteps.png";
import stepgirl from "../assets/Stepper-girl.png";
import stepping from "../assets/stepper2.png";
import Footer from "../Components/Footer";
import Whitenav from "../Components/Whitenav";
import { useEffect } from "react";

const Paysmallsmall = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);
  return (
    <>
      <Whitenav />
      <div className="pays-container">
        <img src={illustration} alt="" className="illustrationer" />

        <div className="home">
          <Payback />

          <div className="plan-text">
            <h1>Our Flexible Payment Plan</h1>

            <p>
              At our Academy, we understand that investing in your education is
              a significant importance to you.We're thrilled to introduce the
              "Easy Payment plan". This plan enables you to pay the program fee
              in a more manageable installments, empowering you to chase your
              aspirations with ease.
            </p>
            <Link to="/personaldata">
              <button className="btn12">Begin Application</button>
            </Link>

            <img src={hands} alt="" className="hand" />
          </div>
        </div>

        <section className="how-it-works">
          <h1>How does “Pay small small” Work? </h1>
          {/* <img src={vectorr} alt="" className="vectorr"/> */}
          <div className="line-container">
            <div className="first-line">
              <div className="first-pointer">
                <h4>1.</h4>
                <h3>Total Program Fee</h3>
                <p>The total cost for the program is 550,000</p>
              </div>
              <div className="first-pointer">
                <h4>2.</h4>
                <h3>Minimum Enrollment Payment</h3>
                <p>
                  To secure a spot in the next cohort of Genesys Academy, you
                  must first pay at least 60% of total fee (N330,000) before the
                  start of the program.
                </p>
              </div>
              <div className="first-pointer">
                <h4>3.</h4>
                <h3>Payment Duration</h3>
                <p>
                  You can spread the payment through the duration of the cohort
                  session.
                </p>
              </div>
            </div>

            <div className="second-line">
              <div className="fourth-pointer">
                <h4>4.</h4>
                <h3>Cohort Selection</h3>
                <p>
                  At the time of registration, you will choose the cohort you
                  aim to join. We offer two cohorts each year, so you can plan
                  your payments accordingly.
                </p>
              </div>
              <div className="fourth-pointer">
                <h4>5.</h4>
                <h3>Flexible Payment</h3>
                <p>
                  Start paying in bits towards your selected cohort as soon as
                  you register.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="benefits">
          <div className="card-benefit">
            <img src={shapes} alt="" className="shapes" />
            <div className="benefit-text">
              <h1>Benefits of “Pay small small”</h1>
              <p>
                <span>Planning:</span> &nbsp;&nbsp;Choose the cohort that fits
                your schedule and financial planning
              </p>
              <p>
                <span>Flexibility:</span> &nbsp;&nbsp;Pay at your own pace
                within 1 year period
              </p>
              <p>
                <span>Affordability:</span> &nbsp;&nbsp;Spread the cost over a
                year to ease financial pressure
              </p>
              <p>
                <span>Accountability:</span> &nbsp;&nbsp;Enhances clarity in the
                payment structure from both parties, keeping clean records
              </p>
            </div>
          </div>
        </section>

        <section className="get-started">
          <div className="steps">
            <img src={steps2} alt="" className="stepsz" />
          </div>
          <div className="get-title">
            <h1>Steps To Get Started</h1>
          </div>

          <div className="stepper-container">
            <div className="steppers">
              <img src={stepping} alt="" className="stepping" />
              <div className="step-list-container">
                <div className="stepper-list">
                  <h4>Register</h4>
                  <p>
                    Complete the registration form on our website and choose
                    your target cohort.
                  </p>
                </div>
                <div className="stepper-list">
                  <h4>Payment Plan</h4>
                  <p>Opt for the “pay small small” plan during registration.</p>
                </div>
                <div className="stepper-list">
                  <h4>Start Paying</h4>
                  <p>Begin making payments in bits that fit your Budget.</p>
                </div>
                <div className="stepper-list">
                  <h4>Secure your spot</h4>
                  <p>
                    Ensure you have paid at least 60% (330,000) before the
                    cohort starts to confirm your enrolment
                  </p>
                </div>
                <div className="stepper-list">
                  <h4>Complete Payment</h4>
                  <p>
                    Continue paying the remaining balance while you are enrolled
                    in the program.
                  </p>
                </div>
              </div>
            </div>

            <div className="image-step">
              <img src={stepgirl} alt="" className="stepgirl" />
            </div>
          </div>
          <Link to="/personaldata">
            <button className="btn14">Begin Application</button>
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Paysmallsmall;
