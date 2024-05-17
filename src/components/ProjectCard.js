import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, credentials, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <a href={url} target="blank">
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <p>{credentials}</p>
          </div>
        </a>
      </div>
    </Col>
  );
}