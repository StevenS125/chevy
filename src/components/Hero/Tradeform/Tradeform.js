import React, { Component } from 'react';
import './Tradeform.scss';
import Form from 'react-bootstrap/Form';

export default class Tradeform extends Component {


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
                <Form.Label>Vin</Form.Label>
                <Form.Control type="email" placeholder="Enter Vin#" />
                <Form.Text className="text-muted">
                Must be 17 digits
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Make</Form.Label>
                <Form.Control type="email" placeholder="Enter Make" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Model</Form.Label>
                <Form.Control type="email" placeholder="Enter Model" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Style/Trim</Form.Label>
                <Form.Control type="email" placeholder="Enter Style/Trim" />
                <Form.Text className="text-muted">
                Ex. premium 1, premium 2, Nav pkg, Performance pkg
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Mileage</Form.Label>
                <Form.Control type="email" placeholder="Enter Mileage" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control type="email" placeholder="Zip Code" />
            </Form.Group>
            
        </Form>
      </div>
    );
  }
}
