import PropTypes from "prop-types";

function Slide({ index, slideIndex, data }) {
  const { image, description } = data;
  return (
    <div
      key={index}
      className={`p-4 top-0 left-0 shadow-sm absolute sm:static sm:!translate-x-[0] transition-all duration-500`}
      style={{
        transform: `translate(${(index - slideIndex) * 105}%)`,
      }}
    >
      <div className="bg-slate-200 mb-4">
        <img className="w-[100%]" src={image} alt="Artificial Intelligence" />
      </div>
      <p className="text-sm font-semibold text-[#5B5675]">{description}</p>
    </div>
  );
}

Slide.propTypes = {
  index: PropTypes.number,
  slideIndex: PropTypes.number,
  data: PropTypes.array,
};

export default Slide;
