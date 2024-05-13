import React from "react";
import Navbar from "../components/Navbar";
import "./Home.css";
import { VscCheck } from "react-icons/vsc";
import Footer from "../components/Footer";
import NewFigures from "../components/Numbers-section";
import FAQ from "../components/FAQ";

const Home = () => {
  const cardData = [
    {
      title: "Biometrics",
      desc: `Academia-backed & In-house researched State-of-the-Art Face, Fingerprint, and Iris Recognition SDKs. Enable real-time automated Biometric applications on edge devices even without an active internet connection.`,
    },
    {
      title: "Image Analysis",
      desc: `Outsource the overly complex image analysis work to our intelligent machines that adaptively learn, so you can focus on making the best decisions for your business.`,
    },
    {
      title: "Cross-Media Translation",
      desc: `Will something like Siri or Alexa enhance your business? We can deliver text-to-speech, text-to-image, speech-to-text, speech-to-image, speech-to-image, image-to-text and image-to-speech solutions for maximum convenience.`,
    },
    {
      title: "3D Modelling and Design.",
      desc: `We offer services for automated generation of 3D assets with realistic shapes and textures. We animate the 3D models with voice and videos with an aim to retarget voice and/or expressions with pose from a single Image/video.`,
    },
  ];

  const whyOptions = [
    "State-of-the-art solutions",
    "Lifetime support & upgrades",
    "Fast & Efficient",
    "Plug-and-Play",
    "No extra computation fee",
    "24x7 Progress Monitoring",
    "No licensing fee",
    "Incremental Updates",
  ];

  const solutionsCards = [
    {
      title: "Exclusive Rights",
      img: "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgreen.e71c8735.png&w=640&q=75",
      desc: "Our mission is to make an impact in empowering human society with AI. Hence, all Intellectual Property Rights belongs to you.",
    },
    {
      title: "Research Driven",
      img: "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblue.f22859fe.png&w=384&q=75",
      desc: "We regularly benchmark our solutions via comparing industry-vide evaluations so our partners only get the best that AI can offer.",
    },
    {
      title: "Exclusive Rights",
      img: "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fred.a7efdb29.png&w=256&q=75",
      desc: "We provide AI-driven solutions into businesses where they can bring tangible value. Each solution is customized as per your needs and deployed on any computing device of your choice.",
    },
    {
      title: "Exclusive Rights",
      img: "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyellow.d937d179.png&w=384&q=75",
      desc: "Should you face any issues, we are always at your service. We provide lifetime technical support & upgrade options.",
    },
  ];

  const visionData = [
    {
      title: "Diversity & Fairness",
      desc: "When training our AI models, we consider ethical and social implications of algorithm-based decision making. Our solutions use high-quality and fairly-represented data sets to eliminate human cognitive biases.",
    },
    {
      title: "Regulatory Compliance",
      desc: "Working with clients globally, LENS acknowledges applicable data privacy regulations, such as the GDPR, HIPAA and others, in all our solutions handling sensitive data. We also ensure our algorithms allow for the required level of decision-making transparency and explainability.",
    },
    {
      title: "Code of Ethics",
      desc: "LENS believes in a just, non-violent world of equality and fairness. We prize democratic values, civil liberties and open and informed debate. When used to further these values, algorithm-based decision-making models can continue to make the world a safer, better place for everyone.",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="main-container">
        <div
          style={{
            width: "55%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 className="main-container-text">We are at the forefront of AI</h1>
          <h3 className="main-container-sub-text">
            From Conserving Wildlife to Automatically Generating Caricatures– We
            Do It All
          </h3>

          <div class="button-container" align="center">
            <a class="main-btn" href="add-website-here" target="_blank">
              Learn More
            </a>
          </div>
        </div>
      </div>
      {/* about section */}
      <div className="about-container">
        <div className="about-us-container">
          <h1 className="about-us">About Us</h1>
          <div className="underline"></div>
        </div>
        <div className="welcome-container">
          <div className="left-container">
            <div className="welcome-lens">
              <h1>Welcome To LENS</h1>
            </div>
            <div>
              <p className="welcome-sub-text">
                We put our hearts, souls and sweat into designing and developing
                custom AI - powered solutions for your business so you don't
                have to.
              </p>
            </div>
            <div class="button-container" align="center">
              <a class="example_a" href="add-website-here" target="_blank">
                Learn More
              </a>
            </div>
          </div>
          <div className="right-container">
            <img
              src="https://lenscorp.ai/_next/image?url=%2FImages%2FaboutLatest.webp&w=640&q=75"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* services section */}

      <div className="services-container">
        <div className="services-top-container">
          <h1>Services</h1>
          <div className="under-line"></div>
          <p>We provide Artificial Intelligence Services</p>
        </div>

        <div className="services-card-container">
          {cardData.map((item, i) => {
            console.log(item, i);
            return (
              <div
                className="services-card"
                style={{
                  color:
                    i === 0
                      ? "rgb(1, 201, 155)"
                      : i == 1
                      ? "color: #73dade;"
                      : i == 2
                      ? "red"
                      : "#ff8c32",
                }}
              >
                <div className="service-box-header">
                  <h1 className="numeric">0</h1>
                  <h1 className="numeric value-color">{i}</h1>
                  <h1 className="service-name">{item.title}</h1>
                </div>
                <p className="service-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* why us section */}

      <div className="why-container">
        <h1>WHY CHOOSE LENS</h1>
        <div className="under-line"></div>
        <h2>AI-driven solutions backed by science</h2>
        <p>
          Every piece of AI technology shipped from LENS is thoroughly
          benchmarked via rigorous evaluations. With a global network of experts
          and academicians, we guarantee the most accurate and robust solutions
          in the market.
        </p>

        <div className="why-options-container">
          {whyOptions.map((item, i) => {
            return (
              <div
                className="why-options"
                style={{ display: "flex", alignItems: "center" }}
              >
                <VscCheck style={{ marginRight: "14px", height: "25px" }} />
                {item}
              </div>
            );
          })}
        </div>
      </div>

      {/* solutions section */}

      <div className="solution-card-container">
        {solutionsCards.map((item, i) => {
          return (
            <div className="card card1">
              <div className="card-name">{item.title}</div>
              <img className="card-image" src={item.img} alt="" />
              <div className="card-desc">{item.desc}</div>
            </div>
          );
        })}
      </div>

      <NewFigures />
      <FAQ />

      {/* Get in touch container */}
      <div className="contact-container">
        <div className="contact-left">
          <h2>Get in touch with us</h2>
          <p>Send your enquiry now!</p>
          <form>
            <input type="text" placeholder="Enter email address" />
            <button>Request Demo</button>
          </form>
        </div>
        <div className="contact-right">
          <img
            src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmap_2_white.1bdb3808.png&w=750&q=75"
            alt="Country"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
