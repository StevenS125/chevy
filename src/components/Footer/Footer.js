import React, { Component } from 'react';
import './Footer.scss';
import { FaLinkedin, FaFacebookSquare } from 'react-icons/fa';



class Footer extends Component {
    constructor(props) {
            super(props);
            this.state = {}
    }


render() {
    const myDate = new Date()

    return (
<div>
    <div className='footContainer'>
<div className='socialLinks'>
<div><a className='icons' href="https://www.facebook.com/stevensnyderisthebest" target="blank"><FaFacebookSquare size='2em' /></a></div>
<div><a className='icons' href="https://www.linkedin.com/in/steven-snyder/" target="blank"><FaLinkedin size='2em' /></a></div> 
</div>
<div className='footName'>Steve Snyder &copy; {myDate.getFullYear()}</div>
</div>
</div>
    )
}
}

export default Footer