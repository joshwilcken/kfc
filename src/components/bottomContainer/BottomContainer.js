import React, { Component } from 'react';
import './BottomContainer.css'

class BottomContainer extends Component {
    render() {
        return (
            <div className='bottomContainer'>
                <div className='search-container'>
                    <img src={require("../../images/colonelsclub.jpg")} />
                    <h2>JOIN THE COLONEL'S CLUB</h2>
                    <div className='findStore'>
                        <p>FIND A KFC STORE NEAR YOU</p>
                        <img src={require('../../images/ic_location_on_white_24px.svg')} alt='Location'/>
                    </div>
                </div>
            </div>
    );
}
}

export default BottomContainer;