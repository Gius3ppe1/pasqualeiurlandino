import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import paky from '../assets/buona4.4.svg'
import About from '../components/Home/About';
import Type from '../components/Home/Type';
import Particles from 'react-tsparticles';

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Ciao!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                </span>
              </h1>

              <h1 className="heading-name">
                Sono
                <strong className="main-name"> Pasquale Iurlandino</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={paky}
                alt="home pic"
                className="img-pasquale"
                style={{ maxHeight: "550px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
    </section>
  );
}

export default Home