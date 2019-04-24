import React, { Component } from 'react';
import './Questions.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class Questions extends Component {
  render() {
    return (
<div>
      <main className="QMain">
        <section className="QLeft">
        <img src='./linkedin.jpg' className="Qpic" alt='Some Crazy MF from Upstate'></img>
        <div className="QDescription"> 
        I am a motherfuckin boss of all bosses
        I am a motherfuckin boss of all bosses
        I am a motherfuckin boss of all bosses
        I am a motherfuckin boss of all bosses
        I am a motherfuckin boss of all bosses
        I am a motherfuckin boss of all bosses
        I am a motherfuckin boss of all bosses
        </div>
        </section>

        <section className="QForm">
        <h2>Questions For Me?</h2>
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="email" placeholder="Name" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="email" placeholder="Phone" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>How Can I Help You?</Form.Label>
    <Form.Control as="textarea" rows="3" placeholder="Type your message to me" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </section>

      </main>
</div>
    )
  }
}
