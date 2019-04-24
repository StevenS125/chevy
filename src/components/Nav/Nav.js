import React, { Component } from 'react';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <nav>
        <a className="chevLogo" href="/" title="Home">
        <img src="/chevIcon.png" alt="Chevrolet Logo"></img>
        </a>
        <a className="cadLogo" href="/" title="Home">
        <img src="/cadLogo.png" alt="Cadillac Logo"></img>
        </a>
        <div className="navHead">Expert Salesmen Steve Snyder</div>
        <ul>
          <li><a href="news.asp">News</a></li>
          <li><a href="contact.asp">Contact</a></li>
          <li><a href="about.asp">About</a></li>
          <li><a href="about.asp">Blog</a></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;