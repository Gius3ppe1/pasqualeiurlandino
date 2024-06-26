import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/Logo/LogoDefinitivo2.svg";
import pasquale from "../../assets/PrimaDopo/pasquale2.jpg";
import piccolo from "../../assets/PrimaDopo/piccolo.jpg";
import prima from "../../assets/gallery/prima.jpg";
import seconda from "../../assets/gallery/seconda.jpg";
import terza from "../../assets/gallery/terza.jpg";
import quarta from "../../assets/gallery/quarta.jpg";
import quinta from "../../assets/gallery/quinta.jpg";
import sesta from "../../assets/gallery/sesta.jpg";
import settima from "../../assets/gallery/settima.jpg";
import ottava from "../../assets/gallery/ottava.jpg";
import nona from "../../assets/gallery/nona.jpg";
import decima from "../../assets/gallery/decima.jpg";
import undicesima from "../../assets/gallery/undicesima.jpg";
import dodicesima from "../../assets/gallery/dodicesima.jpg";
import tredicesima from "../../assets/gallery/tredicesima.jpg";
import quattordicesima from "../../assets/gallery/quattordicesima.jpg";
import quindicesima from "../../assets/gallery/15.jpg";
import sedicesima from "../../assets/gallery/16.jpg";
import diciasettesima from "../../assets/gallery/17.jpg";
import Tilt from "react-parallax-tilt";
import { Link } from 'react-router-dom';

import {
  AiOutlineWhatsApp,
  AiFillInstagram,
  AiFillMail
} from "react-icons/ai";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Particle from "../Particles";

const images = [
  {
    original: prima,
    thumbnail: prima,
  },
  {
    original: seconda,
    thumbnail: seconda,
  },
  {
    original: terza,
    thumbnail: terza,
  },
  {
    original: quarta,
    thumbnail: quarta,
  },
  {
    original: quinta,
    thumbnail: quinta,
  },
  {
    original: sesta,
  },
  {
    original: settima,
  },
  {
    original: ottava,
  },
  {
    original: nona,
  },
  {
    original: decima,
  },
  {
    original: undicesima,
  },
  {
    original: dodicesima,
  },
  {
    original: tredicesima,
  },
  {
    original: quattordicesima,
  },
  {
    original: quindicesima,
  },
  {
    original: sedicesima,
  },
  {
    original: diciasettesima,
  },
];

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Particle/>
      <Container>
        <Row className="r-about">
          <Col md={8} className="home-about-description">
            <h1 className="titleI">
              PICCOLA <span className="yellow"> INTRODUZIONE </span> DI ME STESSO
            </h1>
            <p className="home-about-body">
              Ciao, mi chiamo <b className="yellow">Pasquale Iurlandino </b>e vengo da <span className="yellow"> Altamura, Bari.</span>
              <br />
              <br />
              Molti non mi conosceranno, ma purtroppo o per fortuna, ho un passato da ex sovrappeso, ma grazie al mio passato mi ha portato dove sono oggi. Al fine di voler aiutare le persone a non commettere i mie stessi sbagli, cerco di far intraprendere la strada migliore per loro stessi.
              <br />
              <br />
              In qualità di esperto certificato nel mondo del fitness, la mia passione da anni, cerco di motivare e guidare le persone verso il raggiungimento dei loro
              <b className="yellow"> obiettivi. </b>
              <br />
              <br />
              Attraverso programmi di allenamento <b className="yellow"> personalizzati</b>, consigli nutrizionali e sedute di personal, ti motiverò continuamente e renderò il tuo percorso un'esperienza ricca di risultati.
              <br />
              <br />Il mio scopo è quello di aiutarti a raggiungere i tuoi obiettivi in modo professionale e guidarti verso il<b className="yellow"> successo. </b>
              <br />
              <br />
              <br />

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={logo} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <h1 className="titleE">
              LA MIA<span className="yellow"> EVOLUZIONE </span>
          </h1>
          <div className="wrapper">

            <div className="item">
              <div className="polaroid"><img src={piccolo} alt="prima"/>
                <div className="caption">PRIMA</div>
              </div>
            </div>

            <div className="item">
              <div className="polaroid"><img src={pasquale} alt="dopo"/>
                <div className="caption">DOPO</div>
              </div>
            </div>

          </div>
        </Row>

        <Row className="gallery">
          <h1 className= "titleG"><span className="yellow">PROGRESSI</span> E MIGLIORAMENTI</h1>
          <p className="descp">Alcuni dei miei clienti, che con <b className="yellow">sacrificio e dedizione</b>, cercano di fare del loro meglio per essere la miglior versione di sé stessi.
            <br/>E tu che aspetti? <b className="yellow">Contattami</b> per migliorarti e avere qualcuno al tuo fianco che ti segua costantemente</p>
          <ImageGallery
            items={images}
            showPlayButton={true}
            showFullscreenButton={false}
            showIndex={true}
            autoPlay={true}
          />;
        </Row>

        <Row className="switch">
          <p className="switch-p">Clicca qui per maggiori informazioni</p><br/>
          <div className="links-container">
          <Link to="/personaltrainer" className="switch-link">Personal Trainer</Link>
          <span className="link-space"></span>
          <Link to="/coachingonline" className="switch-link">Coaching Online</Link>
          </div>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <Link to="/contact" className="link-c"><h1>CONTATTAMI</h1></Link>
            <p>
              Inizia questa nuova avventura con me, non te ne <span className="yellow">pentirai!</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://api.whatsapp.com/send?phone=+393935730196&text=Ciao Pasquale, vorrei un informazione"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="whatsapp"
                >
                  <AiOutlineWhatsApp />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/pasqualeiurlandino/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:team.pasquale.pt@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="mail"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );

}

export default About