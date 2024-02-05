import React, { useState, useRef } from 'react';
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Contact.css';
import Particle from '../Particles';

const CustomModal = ({ show, handleClose, message, title }) => {
  return (
    <Modal show={show} onHide={handleClose} className="custom-modal">
      <div className="custom-modal-content">
        <Modal.Header closeButton className='custom-modal-header'>
          <Modal.Title className="custom-modal-title">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="custom-modal-body">
          <p>{message}</p>
        </Modal.Body>
        <Modal.Footer className="custom-modal-footer">
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
};

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);
  const [formData, setFormData] = useState({});
  const [showNotDonePopup, setShowNotDonePopup] = useState(false);
  const [showDonePopup, setShowDonePopup] = useState(false);

  const handleCloseNotDone = () => setShowNotDonePopup(false);
  const handleCloseDone = () => setShowDonePopup(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setDone(false);
    setNotDone(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.from_name || !formData.reply_to || !formData.message) {
      setShowNotDonePopup(true);
    } else {
      emailjs
        .sendForm(
          "service_c9m17te",
          "template_9eshz6s",
          form.current,
          "43pbPyH7ACie6iV8o"
        )
        .then(
          (result) => {
            console.log(result.text);
            setShowDonePopup(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <Container className="contact">
      <Particle />
      <Row className='r-contact'>
        <Col md={6} className="c-left" >
          <h1 className="yellow">Contattami</h1>
          <p className="description">Se sei pronto per iniziare il tuo viaggio verso uno stile di vita più sano, contattami al più presto.<br />
            Sarò entusiasta di essere il tuo partner di fiducia nel raggiungere i tuoi obiettivi di fitness e benessere.</p>
        </Col>
        <Col md={6} className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="from_name" className="user" placeholder="Nome" onChange={handleChange} />
            <input type="text" name="from_surname" className="user" placeholder="Cognome" onChange={handleChange} />
            <input type="email" name="reply_to" className="user" placeholder="Email" onChange={handleChange} />
            <textarea name="message" className="user" placeholder="Messaggio" onChange={handleChange} />
            <Button type="submit" className="button" disabled={done}>Invia</Button>
          </form>
          <CustomModal show={showNotDonePopup} handleClose={handleCloseNotDone} message="Per favore, riempi tutti i campi!" title="Attenzione!" />
          <CustomModal show={showDonePopup} handleClose={handleCloseDone} message="Grazie per avermi contattato! Ti risponderò al più presto." title="Perfetto!" />
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Row className='r-maps'>
        <Col className='c-maps'>
          <iframe
            className='maps'
            title="google-maps"
            src="https://maps.google.com/maps?width=100%25&amp;height=450&amp;hl=en&amp;q=40.8285595,16.5527314+(Altamura)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
