import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import { FaCheck } from 'react-icons/fa';
import Particle from "../components/Particles";

const PersonalTrainer = () => {

  const greenStyle = { color: 'green', marginRight: '5px' };

  const one = (
    <>
      <br />
      <FaCheck style={greenStyle} /> Supporto durante il workout<br />
      <FaCheck style={greenStyle} /> Spiegazioni degli esercizi <br />
      <FaCheck style={greenStyle} /> Allenamento personalizzato <br />
      <FaCheck style={greenStyle} /> Collaborazione con Gym ben attrezzata <br />
      <br />
      Ti aiuterò durante il workout, insieme cercheremo di eseguire al meglio gli esercizi per imparare le tecniche adatte, e avere il massimo dei risultati.
    </>
  );

  const sed = (
    <>
    1 Seduta 29€<br/>
    5 Sedute 99€<br/>
    10 Sedute 179€
    </>
  )


  return (
    <Container fluid className="project-section">
      <Particle/>
      <Container>
        <h1 className="project-heading">
        <strong className="yellow">Personal </strong>Trainer
        </h1>
        <p style={{ color: "white", fontSize: "18px", paddingTop: "2%"}}>
        Ti offro un servizio di allenamento fisico altamente personalizzato, adattato alle tue esigenze e obiettivi specifici. Le sessioni si svolgono di persona, offrendoti un'esperienza diretta e mirata. <br/>Oltre agli allenamenti, riceverai consigli costanti sulla corretta esecuzione degli esercizi, la postura e l'intensità. <br/><br/>La mia missione è aiutarti a raggiungere i tuoi obiettivi di fitness attraverso sessioni mirate e un sostegno diretto. Lavoreremo insieme per creare una strategia completa, includendo anche eventuali modifiche al piano in base ai tuoi progressi. Con il mio approccio dedicato, ti guiderò verso il successo fisico che desideri raggiungere.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Coaching Live"
              subtitle="One to One"
              description={one}
              /*footer={sed}*/
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default PersonalTrainer