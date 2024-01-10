import { useState } from "react";
import Slide from "./Slide";
import { slides } from "../data/data";

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [startPosition, setStartPosition] = useState(null);
  const [slideDistance, setSlideDistance] = useState(null);
  const minSlide = 0;
  const maxSlide = slides.length - 1; // 0 based

  const nextSlide = function () {
    setSlideIndex((slideIndex) =>
      slideIndex === maxSlide ? maxSlide : slideIndex + 1,
    );
  };

  const prevSlide = function () {
    setSlideIndex((slideIndex) =>
      slideIndex === minSlide ? minSlide : slideIndex - 1,
    );
  };

  return (
    <>
      <div
        className={`flex flex-wrap sm:gap-6 relative sm:static h-[24rem] [&>*]:flex-1`}
        onTouchStart={(event) => {
          setStartPosition(event.touches[0].pageX);
        }}
        onTouchMove={(event) => {
          setSlideDistance(event.touches[0].pageX);
        }}
        onTouchEnd={() => {
          if (startPosition > 200 && slideDistance < 280) nextSlide();
          if (startPosition < 200 && slideDistance > 200) prevSlide();
        }}
      >
        {slides.map((data, index) => (
          <Slide
            index={index}
            slideIndex={slideIndex}
            data={data}
            key={index}
          />
        ))}
      </div>

      <div className="flex items-center justify-center gap-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`sm:hidden h-1.5 w-1.5 mt-12 rounded-full bg-stone-400 transition-all duration-300 ${
              slideIndex === index ? "!bg-stone-600 scale-125" : ""
            }`}
          ></span>
        ))}
      </div>
    </>
  );
}

export default Slider;
