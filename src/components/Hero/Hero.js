import React, { Component } from 'react';
import './hero.scss';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tradeform from './Tradeform/Tradeform';
import ApptForm from './ApptForm/ApptForm';

class Hero extends Component {
  constructor(props, context) {
    super(props, context);

    // Trade Modal
    this.handleTradeShow = this.handleTradeShow.bind(this);
    this.handleTradeClose = this.handleTradeClose.bind(this);
    // Appointment Modal
    this.handleApptShow = this.handleApptShow.bind(this);
    this.handleApptClose = this.handleApptClose.bind(this);

    this.state = {
      tradeShow: false,
      apptShow: false,
    };
  }

  handleTradeClose() {
    this.setState({ tradeShow: false });
  }

  handleTradeShow() {
    this.setState({ tradeShow: true });
  }

  handleApptClose() {
    this.setState({ apptShow: false });
  }

  handleApptShow() {
    window.open("https://calendly.com/snydzllc/60min");
  }

  handleShow() {
    window.open("https://www.benmynatt.com/");
  }


  render() {
    return (
      <div>
        <header>
        <div className="slogan">
          <div className="heroHead">Car Buying Made Easy</div>
          <div>
                <Button variant="outline-light" onClick={this.handleTradeShow}>
                  Value Your Trade
                </Button>
                <Button variant="outline-light" onClick={this.handleApptShow}>
                  Set Appointment
                </Button>
                <Button variant="outline-light" onClick={this.handleShow}>
                  Find Your New Car
                </Button>
          </div>
        </div>
        {/* Trade Value Modal */}
        <Modal show={this.state.tradeShow} onHide={this.handleTradeClose}>
          <Modal.Header closeButton>
            <Modal.Title>Value your Trade!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tradeform />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleTradeClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleTradeClose}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
                {/* Appointment set Modal */}
                <Modal show={this.state.apptShow} onHide={this.handleApptClose}>
          <Modal.Header closeButton>
            <Modal.Title>Book Your Appointment!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ApptForm />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleApptClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleApptClose}>
              Book Appointment
            </Button>
          </Modal.Footer>
        </Modal>
            <video autoPlay loop id="myVideo">
                <source src="chevyIntro.mp4" type="video/mp4">
                </source> 
            </video>
        </header>
      </div>
    );
  }
}

export default Hero;