import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useRef } from "react";
import  emailjs, { sendForm } from "emailjs-com";

export const Contact = () => { 
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});      

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      setButtonText("Sending...");      
      emailjs
        .sendForm(
          "service_8x8zqgm",
          "template_av5jiio",
          form.current,
          "ei5ESvQ3CVOQXbFuL"
        )
        .then(
          function (response) {
            setStatus({ succes: true, message: "Message sent successfully" });
            setButtonText("Send");
            e.target.reset();
          },
          function (error) {
            setStatus({
              succes: false,
              message: "Something went wrong, please try again later.",
            });
          }
        );            
  }
      
  return (
    <section className="contact" id="contacts">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={sendEmail} >
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="name"
                          placeholder="First Name"                          
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="name"
                          placeholder="Last Name"                          
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"                          
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone No."                          
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          name="message"
                          placeholder="Message"                          
                        ></textarea>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p
                            className={
                              status.success === false ? "danger" : "success"
                            }
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  ); 
}