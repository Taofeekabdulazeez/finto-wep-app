import { useState } from "react";
import Slider from "./Slider";
import Proptypes from "prop-types";
import { slides } from "../data/data";

function Operations() {
  const [interchange] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const handleScrollX = function (event) {
    console.log(event.target.scrollLeft);
    if (event.target.scrollLeft === 0) setSlideIndex(0);
    else if (event.target.scrollLeft === 606 || event.target.scrollLeft > 400)
      setSlideIndex(2);
    else setSlideIndex(1);
  };

  return (
    <section className="py-[8rem]">
      <div className="w-[90%] max-w-[100rem] mx-auto">
        <div className="mb-8">
          <span className="inline-block text-sm font-semibold uppercase tracking-wide text-primary-tint mb-4">
            Built for growth
          </span>
          <h2 className="text-[2rem] font-semibold mb-6">
            Take your system faster
          </h2>
          <p className="text-[1.1rem] text-stone-600 font-medium">
            Amet lacus ipsum morbi nisl ac. Vel morbi turpis vitae nulla
            lobortis integer purus consectetur. Parturient ut tempor massa mi
          </p>
        </div>
        {interchange && <Slider />}

        <div className="media-scroller-2" onScroll={handleScrollX}>
          {slides.map((slide, index) => (
            <Operation
              image={slide.image}
              description={slide.description}
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
      </div>
    </section>
  );
}

function Operation({ image, description }) {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <div className="">
        <img className="w-[100%]" src={image} alt="Artificial Intelligence" />
      </div>
      <div className="p-4">
        <h4 className="font-semibold mb-3 text-lg capitalize">{description}</h4>
        <p className="text-sm text-stone-700 opacity-[0.8] font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          doloremque quia aliquam atque
        </p>
      </div>
    </div>
  );
}

Operation.propTypes = {
  image: Proptypes.string,
  description: Proptypes.string,
};

export default Operations;
