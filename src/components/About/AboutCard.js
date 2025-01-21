import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">BELLA FATIMA ZOHRA </span>
            from <span className="purple"> Morroco.</span>
            <br />
            I am currently Computer Science science student At ENSA AL HOCEIMA.
            <br />
            I am passionate about coding and love finding creative solutions to challenging problems.
            <br />
            <br />
            My enthusiasm for technology drives me to constantly learn and explore new tools and techniques to improve my skills.
           
          </p>
          
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">BELLA FATIMA ZOHRA</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
