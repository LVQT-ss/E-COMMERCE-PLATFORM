import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData';

const MainCarousel = () => {

    const items = MainCarouselData.map((item) =>
        <img className='cursor-pointer -z-10' style={{ width: "1500px", height: "500px" }} role="presentation" src={item.image} alt="" />)

    return (

        <AliceCarousel
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={2000}
            infinite
        />

    )
};
export default MainCarousel;