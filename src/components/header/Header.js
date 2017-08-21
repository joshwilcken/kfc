import React, { Component } from 'react';
import './Header.css'



class Header extends Component {
    constructor() {
        super();
        this.state = {
            className: ''
        }
        this.hamburgerTransform = this.hamburgerTransform.bind(this)
    }
    
    hamburgerTransform() {
        this.setState({
            className: 'change'
        })
        console.log('hello')
    }

    render() {
        return (
            <div className='navbar'>
                <button className="hamburger hamburger--squeeze is-active" type="button">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
                <img src={require('../../images/kfc-logo.png')} alt='KFC Logo'/>
                <div className='icons'>
                    <i className="fa fa-facebook fa-lg" aria-hidden="true"></i>
                    <i className="fa fa-twitter fa-lg" aria-hidden="true"></i>
                    <i className="fa fa-instagram fa-lg" aria-hidden="true"></i>
                    <i className="fa fa-youtube-play fa-lg" aria-hidden="true"></i>
                    <i className="fa fa-envelope-o fa-lg" aria-hidden="true"></i>
                </div>
            </div>
        );
    }
}

export default Header;