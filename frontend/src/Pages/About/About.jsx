import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "./About.css";
// import MetaData from "../MetaData";

const About = () => {
  const visitInstagram = () => {
    window.location = "NO Instagram URL";
  };
  document.title = "About Us";
  return (
    <>
      <Header />

      <div className="about-section-container">
        <h1 className="Heading">
          About <span>Us</span>
        </h1>
        {/* <MetaData title={'About Us'} /> */}

        <div className="about">
          <div className="about-section-box">
              <div>
                <img
                  style={{ width: "", height: "15rem", margin: "2rem 0" }}
                  src="https://franciskadtt.github.io/women-in-tech-hackathon/assets/images/tim-avataaar.png"
                  alt="Co-Founder"
                />
                <h1>Sujeet Mourya</h1>
                <br />
              </div>
            </div>
            <div className="about-section-box">
              <div>
                <img
                  style={{ width: "15rem", height: "15rem", margin: "2rem 0" }}
                  src="https://franciskadtt.github.io/women-in-tech-hackathon/assets/images/tim-avataaar.png"
                  alt="Co-Founder"
                />
                <h1>Ankit Pal</h1>
                <br />
              </div>
            </div>
            <div className="about-section-box">
              <div>
                <img
                  style={{ width: "15rem", height: "15rem", margin: "2rem 0" }}
                  src="https://franciskadtt.github.io/women-in-tech-hackathon/assets/images/tim-avataaar.png"
                  alt="Co-Founder"
                />
                <h1>Sai Sampath</h1>
                <br />
              </div>
            </div>
            <div className="about-section-box">
              <div>
                <img
                  style={{ width: "15rem", height: "15rem", margin: "2rem 0" }}
                  src="https://franciskadtt.github.io/women-in-tech-hackathon/assets/images/isabelle.png"
                  alt="Co-Founder"
                />
                <h1>Priya Jha</h1>
                <br />
              </div>
            </div>
            <div className="about-section-box">
              <div>
                <img
                  style={{ width: "15rem", height: "15rem", margin: "2rem 0" }}
                  src="https://franciskadtt.github.io/women-in-tech-hackathon/assets/images/tim-avataaar.png"
                  alt="Co-Founder"
                />
                <h1>Adarsh Pandey</h1>
                <br />
              </div>
            </div>
        </div>
        
      </div>
      <Footer />
    </>
  );
};

export default About;
