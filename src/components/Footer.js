import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by BELLA FATIMA ZOHRA</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} FB</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/BELLAfatimazohra"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li> 
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/fatima-zohra-bella-556990296/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3BYjwM0PVfTr2m%2Bq0lM9Nz5A%3D%3D"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li> 
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
