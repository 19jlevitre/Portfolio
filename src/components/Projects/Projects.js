import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import potluck from "../../Assets/Projects/potluck.png";
import coderheroes from "../../Assets/Projects/coderheroes.png";
import anywhere from "../../Assets/Projects/anywhere.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coderheroes}
              isBlog={false}
              title="CoderHeroes"
              description="Worked as a Technical Project Manager, overseeing the work of many engineers. CoderHeroes specializes in givin children an opportunity to learn programming skills from an early age."
              link="https://a.coderheroes.dev/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={anywhere}
              isBlog={false}
              title="Anywhere Fitness"
              description="An application for both instructors and students to track and sign up for fitness courses. Served as a Sr.FrontEnd Dev, connecting the front-end to the back. Ensuring all CRUD operations ran cleanly."
              link="https://anywhere-fitness-2-kappa.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={potluck}
              isBlog={false}
              title="Potluck Planner"
              description="Platform to host potlucks. Users can create events, invite others, and list needed items. I personally created the back-end and designed all tables."
              link="https://github.com/19jlevitre/unit4buildweek"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
