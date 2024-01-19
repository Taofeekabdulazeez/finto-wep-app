function Testimonials() {
  return (
    <section className="py-[9rem]">
      <div className="w-[90%] max-w-[100rem] mx-auto">
        <div className="mb-8">
          <span className="inline-block text-sm font-semibold uppercase tracking-wide text-primary-tint mb-4">
            Testimonials
          </span>
          <h2 className="text-[2rem] font-semibold mb-6">What customer says</h2>
        </div>
        <div className="media-scroller mask-gradient">
          <Quote />
          <Quote />
          <Quote />
          <Quote />
          <Quote />
          <Quote />
        </div>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <div className="relative p-4 shadow-md rounded-lg before:content-['\201C'] before:text-primary-tint before:text-[4rem] before:absolute before:top-0">
      <p className="mb-8 mt-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        veniam obcaecati quam, tenetur similique in atque unde sit et cumque
        reprehenderit quo est eos nisi! Illum eius ipsa quo expedita.
      </p>
      <div className="flex items-center gap-6">
        <div className="h-9 w-9 rounded-full bg-primary-50 overflow-hidden relative">
          <img
            src="customer-1.png"
            alt="customer img"
            className="block w-[85%] mx-auto absolute bottom-0 translate-x-[10%]"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-stone-900 font-medium text-sm">Alex bergwin</p>
          <p className="text-stone-700 text-xs">Account at McDonald</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
