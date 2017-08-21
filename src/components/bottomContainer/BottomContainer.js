import React, { Component } from 'react';
import Carousel from 'react-bootstrap'
import './BottomContainer.css'

class BottomContainer extends Component {
    render() {
        return (
            <div className='bottomContainer'>
                <div className='searchContainer'>
                    <div className='findStore'>
                        <p>FIND A KFC STORE NEAR YOU</p>
                    </div>
                    <div className='locationIconContainer'>
                        <img src={require('../../images/ic_location_on_white_24px.svg')} alt='Location'/>
                    </div>
                </div>
                <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
                    <Carousel.Item>
                        <img src={require('../../images/slickCarouselImages/girl-with-pillow.jpg')} alt=''/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={require('../../images/slickCarouselImages/WoodsKFC.jpg')} alt=''/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={require('../../images/slickCarouselImages/Sweater.jpg')} alt=''/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={require('../../images/slickCarouselImages/multiple-arms.jpg')} alt=''/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={require('../../images/slickCarouselImages/chicken-Chattin.jpg')} alt=''/>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
}

export default BottomContainer;