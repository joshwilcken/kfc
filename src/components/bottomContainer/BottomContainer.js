import React, { Component } from 'react';
import LandingCarousel from '../LandingCarousel/LandingCarousel'
import Search from '../Search/Search'
import './BottomContainer.css'

class BottomContainer extends Component {
    render() {
        return (
            <div className='bottomContainer'>
                <Search className='search'/>
                <LandingCarousel className='landing'/>
            </div>
        );
    }
}

export default BottomContainer;