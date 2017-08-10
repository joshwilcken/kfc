import React, { Component } from 'react';
import './Search.css'

class Search extends Component {
    render() {
        return (
                <div className='searchContainer'>
                    <input placeholder='ENTER YOUR ZIP OR CITY' />
                    <div className='locationIconContainer'>
                        <img src={require('../../images/ic_location_on_white_24px.svg')} alt='Location'/>
                    </div>
                </div>
        );
    }
}

export default Search;