import React, { Component } from 'react';
import Slider from 'react-slick'
import './LandingCarousel.css'

class LandingCarousel extends Component {
    constructor(){
        super();
    } 
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            adaptiveHeight: true
        }
        return (
                <div className='carouselContainer'>
                    <Slider {...settings}>
                        <div><img src={require('../../images/slickCarouselImages/girl-with-pillow.jpg')} alt=''/></div>
                        <div><img src={require('../../images/slickCarouselImages/WoodsKFC.jpg')} alt=''/></div>
                        <div><img src={require('../../images/slickCarouselImages/Sweater.jpg')} alt=''/></div>
                        <div><img src={require('../../images/slickCarouselImages/multiple-arms.jpg')} alt=''/></div>
                        <div><img src={require('../../images/slickCarouselImages/chicken-Chattin.jpg')} alt=''/></div>
                    </Slider>
                </div>
        );
    }
}

export default LandingCarousel;



