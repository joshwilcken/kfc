import React, { Component } from 'react';
import './Header.css'
import { fallDown as Menu } from 'react-burger-menu'



class Header extends Component {

    render() {
        
        return (
            <div className='navbar'>
                <div className='hamburger'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <img src={require('../../images/kfc-logo.png')} />
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