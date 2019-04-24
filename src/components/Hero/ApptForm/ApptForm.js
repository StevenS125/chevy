import React, { Component } from 'react';
import './ApptForm.scss';
import Form from 'react-bootstrap/Form';

export default class ApptForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }


  render() {
    return (
      <div>
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="email" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="email" placeholder="Enter Phone Number" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>What Time would you like to Request</Form.Label>
                <Form.Control type="email" placeholder="Time?" />
            </Form.Group>

            
        </Form>
      </div>
    );
  }
}
