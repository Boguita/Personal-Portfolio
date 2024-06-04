import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import uatre from "../assets/img/uatre.webp";
import heybon from "../assets/img/heybon.png";
import projImg3 from "../assets/img/project-img3.png";
import aromas from "../assets/img/aromas.png";
import conectados from "../assets/img/conectados.png";
import latin from "../assets/img/latin.png";
import art from "../assets/img/art.png";
import branded from "../assets/img/branded.png";
import invoiceapp from "../assets/img/invoice-app.png";
import tictactoe from "../assets/img/Tic-tac-toe.png";
import evolveGym from "../assets/img/evolve-gym.png";
import travelweb from "../assets/img/travel-web.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import uatreSystem from "../assets/img/UatreSystem.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "UATRE System FullStack",
      description: "Design & Leader Development",
      credentials: "User: guido.gurfinka@hotmail.com Pass: 123",
      imgUrl: uatreSystem,
      url: "https://beneficiosuatre.com.ar",
    },
    {
      title: "UATRE App (Flutter)",
      description: "Design & Development",
      imgUrl: uatre,
      url: "https://play.google.com/store/apps/details?id=com.galgo.uatre&hl=es_AR&gl=US",
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
      url: "https://travel-web-efpk.vercel.app/",
    },
    {
      title: "Funny Game",
      description: "Design & Development",
      imgUrl: tictactoe,
      url: "https://tic-tac-toe-zeta-lemon.vercel.app/",
    },
    {
      title: "Invoice App",
      description: "Development. Status: In progress",
      imgUrl: invoiceapp,
      url: "https://github.com/nsdonato/front-invoices",
    },
  ];

    const wordpress = [
      {
        title: "Agency Website",
        description: "Design & Development",
        imgUrl: branded,
        url: "https://brandedstrong.com/",
      },
      {
        title: "Agency Website",
        description: "Design & Development",
        imgUrl: latin,
        url: "https://latinbranding.com/",
      },
      {
        title: "Conectados Coaching Website",
        description: "Design & Development",
        credentials: "Responsive in progress",
        imgUrl: conectados,
        url: "https://www.coachvocacionalonline.com/",
      },
      {
        title: "Art Mutual Rural Website",
        description: "Development",
        imgUrl: art,
        url: "https://artmutualrural.org.ar/",
      },
      {
        title: "Aromas de Campo Website",
        description: "Development",
        imgUrl: aromas,
        url: "https://aromasdecamporio3.com.ar/",
      },
      {
        title: "Heybon E-commerce",
        description: "Development",
        imgUrl: heybon,
        url: "https://heybon.com.ar/",
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
                        <Nav.Link eventKey="first">FullStack Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Wordpress & Others</Nav.Link>
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
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {wordpress.map((wordpress, index) => {
                            return <ProjectCard key={index} {...wordpress} />;
                          })}
                        </Row>
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