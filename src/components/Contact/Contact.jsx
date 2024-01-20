import React, { useState, useRef } from 'react'
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Contact.css'

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false)
  const [notDone, setNotDone] = useState(false)
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setDone(false)
    setNotDone(false)
  }

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.from_name || !formData.reply_to || !formData.message) {
      setNotDone(true)
    } else {

      //  Please use your own credentials from emailjs or i will recive your email

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
            setDone(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };


  return (
    <Container className="contact">
      <Row >
        <Col md={6} className="c-left" >
          <h1 className="yellow">Contattami</h1>
          <p className="description">Se sei pronto per iniziare il tuo viaggio verso uno stile di vita più sano, contattami oggi stesso.<br/>
            Sarò entusiasta di essere il tuo partner di fiducia nel raggiungere i tuoi obiettivi di fitness e benessere.</p>
        </Col>
        <Col md={6} className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="from_name" className="user" placeholder="Nome" onChange={handleChange} />
            <input type="text" name="from_surname" className="user" placeholder="Cognome" onChange={handleChange} />
            <input type="email" name="reply_to" className="user" placeholder="Email" onChange={handleChange} />
            <textarea name="message" className="user" placeholder="Messaggio" onChange={handleChange} />
            <span className='not-done' >{notDone && "Per favore, riempi tutti i campi"}</span>
            <Button type="submit" className="button" disabled={done}>Invia</Button>
            <span className='done'>{done && "Grazie per avermi contattato! Ti risponderò al più presto."}</span>
          </form>
        </Col>
      </Row>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Row className='r-maps'>
        <Col className='c-maps'>
          <iframe
            className='maps'
            title="google-maps"
            src="https://maps.google.com/maps?width=100%25&amp;height=450&amp;hl=en&amp;q=40.8285595,16.5527314+(Altamura)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
      </Col>
    </Row>
    </Container >
  )
}

export default Contact