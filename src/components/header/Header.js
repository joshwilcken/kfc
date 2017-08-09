import React, { Component } from 'react';
import './Header.css'


class Header extends Component {
    constructor() {
        super();
        this.state = {
            className: 'hamburger'
        }
        this.hamburgerTransform = this.hamburgerTransform.bind(this)
    }
    
    hamburgerTransform() {
        this.setState({
            className: 'burger'
        })
    }

    render() {
        return (
            <div className='navbar'>
                <div className={this.state.className} onClick={this.hamburgerTransform}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <img src={require('../../images/kfc-logo.png')} alt='KFC Logo'/>
                <div className='icons'>
                    <i className="fa fa-facebook fa-lg" aria-hidden="true"></i>
                    <i className="fa fa-twitter fa-lg" aria-hidden="true"></i>
                    <i className="fa fa-instagram fa-lg" aria-hidden="true"></i>
                    <i className="fa fa-youtube-play fa-lg" aria-hidden="true"></i>
                </div>
            </div>
        );
    }
}

export default Header;