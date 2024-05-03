import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomSectionCard/HomeSectionCard';

const HomeSectionCarousel = () => {
    const responsive = {
        0: { items: 1 },
        720: { items: 2 },
        1040: { items: 4 },
    };

    const items = [1, 1, 1, 1, 1].map((item) => <HomeSectionCard />)
    return (

        <div>

            <AliceCarousel
                items={items}
                disableButtonsControls
                autoPlay
                autoPlayInterval={1000}
                infinite
                responsive={responsive}
            />
        </div>
    )
}

export default HomeSectionCarousel
