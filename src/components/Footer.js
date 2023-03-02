import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
const logo = process.env.PUBLIC_URL + "/logo.png";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/heberd%C3%A9nisgomez/">
                <img src={navIcon1} alt="Icon-linkedin" />
              </a>
              <a href="https://www.facebook.com/heber.gomezcab/">
                <img src={navIcon2} alt="Icon-facebook" />
              </a>
              <a href="https://www.instagram.com/hebergomezz/">
                <img src={navIcon3} alt="Icon-instagram" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
