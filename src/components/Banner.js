import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/header-img.svg';
import TrackVisibility from "react-on-screen";
import pdf from "../assets/download/Heber Dénis Gomez.pdf";
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [ "Full Stack Developer"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);  
  const period = 2000;
  
const onClick = () => {
  // using Java Script method to get PDF file
  fetch("SamplePDF.pdf").then((response) => {
    response.blob().then((blob) => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob);
      // Setting various property values
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "SamplePDF.pdf";
      alink.click();
    });
  });
};

useEffect(() => {
  let ticker = setInterval(() => {
    tick();
  }, delta)

  return () => {clearInterval(ticker)};
}, [text])

const tick = () => {
  let i = loopNum % toRotate.length;
  let fullText = toRotate[i];
  let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
  
  setText(updatedText);
    if (isDeleting) {
      setDelta(prevDetla => prevDetla /2)
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }
  return (
    <section className="banner" id="home">
      <Container>
        <TrackVisibility partialVisibility>
          {({ isVisible }) => (
            <div
              className={isVisible ? "animate__animated animate__fadeIn" : ""}
            >
              <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi, i'm Heber, `}
                    <span className="wrap">{text}</span>
                  </h1>
                  <p>
                    I am a Systems Engineering student with 2 years of
                    experience programming and working on various freelance
                    projects. During this time, I have gained valuable
                    experience and developed several personal projects. I am
                    excited to take the next step in my professional career. I
                    hope you enjoy my portfolio, which was made with a lot of
                    love!
                  </p>
                  <a href={pdf} download>
                    <button>
                      Download My CV
                      <ArrowRightCircle size={25} />
                    </button>
                  </a>
                </Col>
                <Col xs={12} md={6} xl={5}>
                  <img src={headerImg} alt={"Header Img"} />
                </Col>
              </Row>
            </div>
          )}
        </TrackVisibility>
      </Container>
    </section>
  );
}
