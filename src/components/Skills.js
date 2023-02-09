import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap"
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png"
import TrackVisibility from "react-on-screen";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible
                    ? "animate__animated animate__pulse animate__slower"
                    : ""
                }
              >
                <Col>
                  <div className="skill-bx">
                    <h2>Skills</h2>
                    <p>
                      My studies as a Full Stack were in a course taught by
                      ICARO from the National University of Cordoba Argentina, I
                      was also self-taught with the help of some free
                      platforms.
                    </p>
                    <Carousel
                      responsive={responsive}
                      infinite={true}
                      className="skill-slider"
                    >
                      <div className="item">
                        <img src={meter1} alt="image" />
                        <h5>Front-end Languages and Frameworks</h5>
                      </div>
                      <div className="item">
                        <img src={meter2} alt="image" />
                        <h5>Backend Technologies</h5>
                      </div>
                      <div className="item">
                        <img src={meter3} alt="image" />
                        <h5>Database Management Systems</h5>
                      </div>
                      <div className="item">
                        <img src={meter1} alt="image" />
                        <h5>Soft Skills</h5>
                      </div>
                    </Carousel>
                  </div>
                </Col>
              </div>
            )}
          </TrackVisibility>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="image-background"
      />
    </section>
  );
}