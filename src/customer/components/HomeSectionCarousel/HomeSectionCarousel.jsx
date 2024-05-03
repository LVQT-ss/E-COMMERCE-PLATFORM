import React, { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";

const HomeSectionCarousel = ({data}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef();
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1040: { items: 5.5 },
  };
  const sildePrev = () => {
    carouselRef.current?.slidePrev();
    setActiveIndex(carouselRef.current.slidePrev());
  }

  const sildeNext = () => {
    carouselRef.current?.slideNext();
    setActiveIndex(carouselRef.current.slideNext());
  }
  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data.slice(0, 10).map((item) => <HomeSectionCard product={item} />);
  return (
    <div className="border">
      <div className="relative p-5  ">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          ref={carouselRef}
        />

        { activeIndex !== items.length-5 && 
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={sildeNext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        }

       {activeIndex !== 0 && <Button
          variant="contained"
          className="z-50 bg-white"
          onClick={sildePrev}
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(-90deg)", color: "black" }}
          />
        </Button>
}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
