import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/Logo/LogoDef2.svg";
import pasquale from "../../assets/PrimaDopo/pasquale2.svg";
import piccolo from "../../assets/PrimaDopo/piccolo2.svg";
import prima from "../../assets/gallery/prima.jpg";
import seconda from "../../assets/gallery/seconda.jpg";
import terza from "../../assets/gallery/terza.jpg";
import quarta from "../../assets/gallery/quarta.jpg";
import quinta from "../../assets/gallery/quinta.jpg";
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
];

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Particle/>
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 className="titleI">
              PICCOLA <span className="yellow"> INTRODUZIONE </span> DI ME STESSO
            </h1>
            <p className="home-about-body">
              Ciao, mi chiamo <b className="yellow">Pasquale Iurlandino </b>
              e vengo da <span className="yellow"> Altamura, Bari.</span>
              <br />
              <br />
              Molti non mi conosceranno, ma purtroppo o per fortuna, ho un passato da ex sovrappeso, ma grazie  proprio al mio passato mi ha portato dove sono oggi. Nel voler aiutare  le persone  a non commettere i mie stessi  sbagli,  anzi cercando di far intraprendere la strada migliore per se stessi.
              <br />
              <br />
              Sono un esperto certificato nel mondo del fitness, ormai la mia passione da anni, cerco di motivare e guidare le persone verso  il  raggiungimento dei loro
              <b className="yellow"> obiettivi. </b>
              <br />
              <br />
              Attraverso programmi di allemamento <b className="yellow"> personalizzati</b>, consigli nutrizionali e sedute di personal, cercando di motivarti continuamente. Renderò il tuo percorso un'esperienza gratificante e sostenibile.
              <br />
              <br />Il mio scopo è quello di aiutarti a raggiungere i tuoi obiettivi in modo professionale.
              Sia che tu stia cercando di perdere peso , aumentare la massa muscolare, migliorare  la tua composizione corporea, o semplicemente  essere in forma e in salute.
              Sono qui per guidarti verso il<b className="yellow"> successo. </b>
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
          <div className="wrapper">

            <div className="item">
              <div className="polaroid"><img src={piccolo} />
                <div className="caption">PRIMA</div>
              </div>
            </div>

            <div className="item">
              <div className="polaroid"><img src={pasquale} />
                <div className="caption">DOPO</div>
              </div>
            </div>

          </div>
        </Row>

        <Row className="gallery">
          <h1 className= "titleG"><span className="yellow">PROGRESSI</span> E MIGLIORAMENTI</h1>
          <p className="descp">Alcuni dei miei clienti, che con <b className="yellow">sacrificio e dedizione</b>, cercano di fare del loro meglio per essere la miglior versione di sé stessi.
            <br/>E tu che aspetti, <b className="yellow">contattami</b> per migliorarti  e avere qualcuno al tuo fianco che ti segua passo passo</p>
          <ImageGallery
            items={images}
            showPlayButton={true}
            showFullscreenButton={false}
          />;
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <Link to="/contact" className="link-c"><h1>CONTATTAMI</h1></Link>
            <p>
              Non esistare a <span className="yellow">contattarmi.</span>
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