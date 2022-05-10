import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Jonathon LeVitre </span>
            from <span className="purple"> Bountiful, Utah.</span>
            <br />Hi I’m Jonathon, I’m a passionate Software Engineer 
            with a diverse professional background of experiences 
            including roles as a religious volunteer in Kyiv, Ukraine, 
            performing musician, instrument repairman/salesman, 
            and even a professional baker.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Drums
            </li>
            <li className="about-activity">
              <ImPointRight /> Spending Time With those I Love
            </li>
            <li className="about-activity">
              <ImPointRight /> Eating
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Jonathon</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
