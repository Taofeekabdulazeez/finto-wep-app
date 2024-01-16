import Slider from "./Slider";

function Operations() {
  return (
    <section className="py-[8rem]">
      <div className="w-[90%] max-w-[100rem] mx-auto">
        <div className="mb-8">
          <span className="inline-block text-sm font-semibold uppercase tracking-wide text-primary-tint mb-4">
            Built for growth
          </span>
          <h2 className="text-[2rem] font-bold mb-6">
            Take your system faster
          </h2>
          <p className="text-[1.1rem] text-stone-600 font-medium">
            Amet lacus ipsum morbi nisl ac. Vel morbi turpis vitae nulla
            lobortis integer purus consectetur. Parturient ut tempor massa mi
          </p>
        </div>
        <Slider />
      </div>
    </section>
  );
}

export default Operations;
