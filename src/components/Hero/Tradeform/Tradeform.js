import React, { Component } from 'react';
import './Tradeform.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class Tradeform extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          tradeShow: null,
          formData: null
        };
      }

      sendinIt = (e) => {

         let fData = 
          {
            "email": e.target.form.elements.email.value,
            "name": e.target.form.elements.name.value,
            "phone": e.target.form.elements.pNumber.value,
            "vin": e.target.form.elements.vin.value,
            "year": e.target.form.elements.year.value,
            "make": e.target.form.elements.make.value,
            "model": e.target.form.elements.model.value,
            "style": e.target.form.elements.style.value,
            "mileage": e.target.form.elements.miles.value,
            "zip": e.target.form.elements.zip.value,            
        };
        console.log(fData)

        fetch("https://chevyapp.herokuapp.com/add/trade",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(
        fData
    )
})
.then(function(res){ console.log(res) })
.catch(function(res){ console.log(res) })
    }

  render() {
    return (
      <div>
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" type="email" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control name="pNumber" type="email" placeholder="Enter Phone Number" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Vin</Form.Label>
                <Form.Control name="vin" type="email" placeholder="Enter Vin#" />
                <Form.Text className="text-muted">
                Must be 17 digits
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Year</Form.Label>
                <Form.Control name="year" type="email" placeholder="Enter Year" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Make</Form.Label>
                <Form.Control name="make" type="email" placeholder="Enter Make" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Model</Form.Label>
                <Form.Control name="model" type="email" placeholder="Enter Model" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Style/Trim</Form.Label>
                <Form.Control name="style" type="email" placeholder="Enter Style/Trim" />
                <Form.Text className="text-muted">
                Ex. premium 1, premium 2, Nav pkg, Performance pkg
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Mileage</Form.Label>
                <Form.Control name="miles" type="email" placeholder="Enter Mileage" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control name="zip" type="email" placeholder="Zip Code" />
            </Form.Group>
            <Button variant="primary" onClick={this.sendinIt}>
              Submit
            </Button>
            
        </Form>
      </div>
    );
  }
}
