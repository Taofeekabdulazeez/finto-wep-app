function Testimonials() {
  return (
    <section className="py-[9rem]">
      <div className="w-[90%] max-w-[100rem] mx-auto">
        <div className="media-scroller">
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
    <div className="relative p-4 shadow-md rounded-lg before:content-['\201C'] before:text-primary-tint before:text-[3rem] before:absolute before:top-0">
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
        <div>
          <p className="text-stone-900 font-medium text-sm">Alex bergwin</p>
          <p className="text-stone-700 text-xs">Account at McDonald</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
