import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import invoiceapp from "../assets/img/invoice-app.png";
import tictactoe from "../assets/img/Tic-tac-toe.png";
import evolveGym from "../assets/img/evolve-gym.png";
import travelweb from "../assets/img/travel-web.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Invoice App",
      description: "Development. Status: In progress",
      imgUrl: invoiceapp,
      url: "https://github.com/nsdonato/front-invoices",
    },
    {
      title: "Gym Project",
      description: "Design & Development",
      imgUrl: evolveGym,
      url: "https://evolve-gym.vercel.app/",
    },
    {
      title: "Travel web",
      description: "Design & Development",
      imgUrl: travelweb,
      url: "https://travel-web-efpk.vercel.app/"
    },
    {
      title: "Funny Game",
      description: "Design & Development",
      imgUrl: tictactoe,
      url: "https://tic-tac-toe-zeta-lemon.vercel.app/"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];
 
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility partialVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>Most recent projects</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__fadeIn" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              <ProjectCard                           
                                key={index}
                                {...project}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Coming soon...</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Coming soon...</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
}