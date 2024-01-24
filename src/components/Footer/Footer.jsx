import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillMail
} from "react-icons/ai";

const Footer = () => {
    let date = new Date();
    return (
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
          <span>Copyright 2024 © Giuseppe Moramarco, Pasquale Iurlandino</span>
          </Col>
          <Col md="4" className="footer-copywright">
            <span>Svilippato da Giuseppe Moramarco</span>
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/giuseppe-moramarco-0995a9216"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="linkedin"
                >
                  <AiFillLinkedin />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/giuse_mora01/"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:giuseppemoramarco01@gmail.com"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="mail"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    );  
}

export default Footer