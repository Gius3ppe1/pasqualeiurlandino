import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import { FaCheck } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

const CoachingOnline = () => {

  const greenStyle = { color: 'green', marginRight: '5px' };
  const redStyle = { color: 'red', marginRight: '5px' };

  const premium = (
    <>
      <br />
      <FaCheck style={greenStyle} /> Anamnesi iniziale <br />
      <FaCheck style={greenStyle} /> Check ogni 2 settimane <br />
      <FaCheck style={greenStyle} /> Allenamento personalizzato <br />
      <FaCheck style={greenStyle} /> Integrazione (se necessaria) <br />
      <FaCheck style={greenStyle} /> Consigli Alimentari <br />
      <FaCheck style={greenStyle} /> Assistenza in chat <br />
      <FaCheck style={greenStyle} /> App con video tutorial <br />
      <FaCheck style={greenStyle} /> App con diario di allenamento <br />

    </>
  );

  const base = (
    <>
      <br />
      <FaCheck style={greenStyle} /> Anamnesi iniziale <br />
      <FaCheck style={greenStyle} /> Check ogni 3 settimane <br />
      <FaCheck style={greenStyle} /> Allenamento personalizzato <br />
      <FaCheck style={greenStyle} /> Integrazione (se necessaria) <br />
      <FaCheck style={greenStyle} /> Assistenza in chat <br />
      <FaCheck style={greenStyle} /> App con video tutorial <br />
      <FaCheck style={greenStyle} /> App con diario di allenamento <br />
      <FaTimes style={redStyle} /> Consigli Alimentari <br />

    </>
  );

  const base2 = (
    <>
      <br />
      <FaCheck style={greenStyle} /> Anamnesi iniziale <br />
      <FaCheck style={greenStyle} /> Check ogni 3 settimane <br />
      <FaCheck style={greenStyle} /> Consigli Alimentari <br />
      <FaCheck style={greenStyle} /> Integrazione (se necessaria) <br />
      <FaCheck style={greenStyle} /> Assistenza in chat <br />
      <FaCheck style={greenStyle} /> App per monitorare i progressi <br />
      <FaTimes style={redStyle} /> App con video tutorial <br />
      <FaTimes style={redStyle} /> App con diario di allenamento <br />
      <FaTimes style={redStyle} /> Allenamento personalizzato <br />

    </>
  );


  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Coaching <strong className="yellow">Online </strong>
        </h1>
        <p style={{ color: "white", fontSize: "18px", paddingTop: "2%"}}>
          Il mio obiettivo è fornirti un allenamento su misura, adattato alle tue esigenze e obiettivi specifici. Avrai accesso a un'app dedicata, arricchita da video tutorial degli esercizi e una chat integrata per una comunicazione costante.
          La mia missione è aiutarti a raggiungere i tuoi obiettivi di fitness e migliorare la tua forma fisica. Creerò una strategia completa che include allenamento, nutrizione e, se necessario, integrazione, il tutto personalizzato alle tue esigenze. L'app dedicata con diario di allenamento e chat integrata ti garantirà un'esperienza altamente personalizzata.
          <br/><br/>
          Per quanto riguarda la nutrizione, creerò un piano alimentare su misura, eventualmente integrato, soddisfacendo le tue esigenze. Utilizzeremo un'app di diario alimentare o invierò consigli tramite WhatsApp, garantendoti assistenza continua attraverso la chat.
          Il nostro approccio completo e personalizzato ti accompagnerà in tutto il percorso di raggiungimento dei tuoi obiettivi, fornendoti le risorse e il supporto necessari per ottenere i migliori risultati.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Coaching Online Base"
              subtitle="Allenamento + Eventuale integrazione"
              description={base2}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Coaching Online Medium"
              subtitle="Alimentazione + Eventuale integrazione"
              description={base}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Coaching Online Premium"
              subtitle="Allenamento + Alimentazione + Eventuale integrazione"
              description={premium}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default CoachingOnline