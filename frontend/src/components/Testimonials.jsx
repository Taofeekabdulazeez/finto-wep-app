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
    <div className="p-4 shadow-md rounded-lg">
      <p className="mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        veniam obcaecati quam, tenetur similique in atque unde sit et cumque
        reprehenderit quo est eos nisi! Illum eius ipsa quo expedita.
      </p>
      <div className="flex items-center gap-6">
        <div className="h-8 w-8 rounded-full bg-primary-tint"></div>
        <div>
          <p className="text-stone-900 font-medium text-sm">Alex bergwin</p>
          <p className="text-stone-700 text-xs">Account at McDonald</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
