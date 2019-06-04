import React, { Component } from 'react';
import './App.css';

// Components
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Questions from './components/QuestionsForm/Questions';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

class Dashboard extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Hero />
        <Questions />
        <About />
        <Footer />
      </div>


    );
  }
}

export default Dashboard;

