import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/bitsOfCode.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/editor.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Location Detection and Route Planning"
              description="an interactive desktop application that combines modern technologies and open-source tools to address location and route planning needs effectively."
              ghLink="https://github.com/BELLAfatimazohra/projet_detection_localisations"
              demoLink="https://www.linkedin.com/posts/fatima-zohra-bella-556990296_java-javafx-openstreetmap-activity-7285041917971558401-1e_o?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              
              title="E-service Website"
              description="Creation of a website to manage students, teachers, coordinators, and department heads in a school using HTML, CSS, JavaScript, AJAX, PHP, and PHP Mailer."
              ghLink="https://github.com/BELLAfatimazohra/e_service"
              demoLink="https://drive.google.com/drive/folders/1TOt2V0zJs5lLdp3M6GmcdZgZekqDi-oA?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="رفيق الإيمان"
              description="An extension built with JavaScript that offers multiple features such as reading the Quran, a digital tasbih (prayer counter), prayer times, the 99 names of Allah, daily Azkar (remembrances), and locating the nearest mosques."
              ghLink="https://github.com/BELLAfatimazohra/extention_google"
              demoLink="https://www.linkedin.com/posts/fatima-zohra-bella-556990296_%D8%A8%D8%B3%D9%85-%D8%A7%D9%84%D9%84%D9%87-%D8%A7%D9%84%D8%B1%D8%AD%D9%85%D9%86-%D8%A7%D9%84%D8%B1%D8%AD%D9%8A%D9%85-%D9%88%D9%85%D9%86-activity-7286901921909489665-JXSD?utm_source=share&utm_medium=member_desktop"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="LIBRARY MANAGEMENT"
              description="Development of a library management application using C++, Qt, and SQLite."
              ghLink="https://github.com/BELLAfatimazohra/QT_PROJECT"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Classification System for E-Commerce Using Python and Modern Frameworks"
              description="Development of an Image Classification System using Python, TensorFlow, Keras, ResNet, React, and NumPy in an E-Commerce Application.."
              ghLink="https://github.com/BELLAfatimazohra/python_RESNET"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="BANK ACCOUNT MANAGEMENT"
              description="Development of a bank account management application using the C programming language."
              ghLink="https://github.com/BELLAfatimazohra/-Bank-account-managementt"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
