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

  return (
    <Container fluid className="project-section">
      <Particle/>
      <Container>
        <h1 className="project-heading">
        <strong className="yellow">Personal </strong>Trainer
        </h1>
        <p style={{ color: "white", fontSize: "18px", paddingTop: "2%"}}>
        Benvenuto nella mia pagina dedicata alle sedute fisiche personalizzate! <br/>Ti offro un servizio di allenamento fisico altamente personalizzato, in base alle tue esigenze e obiettivi specifici. Le sessioni si svolgono di face to face, in una palestra ben attrezzata, offrendoti un'esperienza diretta e mirata. <br/>Oltre agli allenamenti, riceverai consigli costanti sulla corretta esecuzione degli esercizi, la postura e l'intensità. <br/><br/>
        Perché Scegliere le Mie Sedute Fisiche?<br/>
        <span className="yellow">Personalizzazione Assicurata</span>, Ogni individuo è unico, e le tue esigenze di fitness sono uniche quanto te. Le mie sedute sono completamente personalizzate per adattarsi al tuo livello di forma fisica attuale, ai tuoi obiettivi specifici e alle tue preferenze.<br/>
        <span className="yellow"> Motivazione Costante</span>, mantenersi motivati è fondamentale per il successo nel fitness. Con il mio supporto costante e le sedute stimolanti, ti aiuterò a superare gli ostacoli e a mantenere alta la tua motivazione lungo tutto il percorso.<span className="yellow"> Varietà nell'Allenamento</span>, la noia è il nemico del progresso. Varieremo costantemente il tuo programma di allenamento per mantenerlo interessante e sfidante, evitando la monotonia e massimizzando i risultati.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Coaching Live"
              subtitle="One to One"
              description={one}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default PersonalTrainer