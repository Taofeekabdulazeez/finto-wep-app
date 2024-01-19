import PropTypes from "prop-types";

function Slide({ index, slideIndex, data }) {
  const { image, description } = data;
  return (
    <div
      key={index}
      className={`overflow-hidden top-0 left-0 shadow-md absolute sm:static sm:!translate-x-[0] transition-all duration-500 rounded-lg`}
      style={{
        transform: `translate(${(index - slideIndex) * 105}%)`,
      }}
    >
      <div className="bg-slate-200">
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

Slide.propTypes = {
  index: PropTypes.number,
  slideIndex: PropTypes.number,
  data: PropTypes.object,
};

export default Slide;
