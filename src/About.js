import React, { useState, useEffect } from "react";
import "../src/Component/Style.css";

const About = () => {
  const [text, setText] = useState("");
  const sentence =
    " I am Ha Van Huy born in 2001 from Hai Duong, currently I am a final year student at Hanoi University of Mining and Geology, majoring in Software Engineering.";
  const delay = 100;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMoreAbout, setShowMoreAbout] = useState(false);

  useEffect(() => {
    if (currentIndex < sentence.length) {
      const timer = setTimeout(() => {
        setText((prevText) => prevText + sentence[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => {
        clearTimeout(timer);
      };
    } else {
      setShowMoreAbout(true);
    }
  }, [currentIndex]);

  return (
    <>
      <div className="container">
        <div className="in4">
          <p className="download">Download my cv</p>
          <p className="contact">Get in touch</p>
        </div>
        <div className="main-content-right">
          <p className="title-main">About me</p>
          <p className="sayings">
            "In the field of information technology, continuous learning and
            keeping up with knowledge updates is the key to success. Technology
            is always advancing rapidly, and only through constant learning and
            improvement can we achieve something extraordinary."
          </p>
          <p className="content-title">
            Hi!
            <span className="muliText">{text}</span>
          </p>
          {showMoreAbout && <p className="contact more">MORE ABOUT ME</p>}
        </div>
      </div>
    </>
  );
};

export default About;
