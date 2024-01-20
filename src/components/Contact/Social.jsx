import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {
  AiOutlineWhatsApp,
  AiFillMail,
  AiFillInstagram
} from "react-icons/ai";
import './Social.css'

const Social = () => {
  return (
    <Container style={{padding: '30px'}}>
    <Row>
              <Col md={12} className="contact-social">
                <div className='contact-text'>
                <h1>CONTATTAMI</h1>
                <p>
                Non esistare a visitare la mia pagina e <span className="yellow">contattami.</span>
                </p>
                </div>
                <ul className="contact-social-links">
                  <li className="contact-icons">
                    <a
                      href="https://api.whatsapp.com/send?phone=+393935730196&text=Ciao Pasquale, vorrei un informazione"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <AiOutlineWhatsApp />
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                      href="https://www.instagram.com/pasqualeiurlandino/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                      href="mailto:team.pasquale.pt@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <AiFillMail />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
  )
}

export default Social