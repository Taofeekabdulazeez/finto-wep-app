import Button from "../ui/Button";

function Features() {
  return (
    <section className="py-6">
      <div className="w-[90%] max-w-[100rem] mx-auto">
        <div className="mb-16 lg:w-[70%]">
          <span className="inline-block text-sm font-semibold uppercase tracking-wide text-primary-tint mb-4">
            Solutions
          </span>
          <h2 className="text-[2rem] font-semibold mb-6">
            Open Your Business Account Online
          </h2>
          <p className="text-[1.1rem] text-stone-600 font-medium">
            Keep your business account and all your finance needs safely
            organized under one roof. Manage money quickly, easily &
            efficiently. Whether you’re alone or leading a team.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24 lg:items-center">
          <div>
            <span className="inline-block text-sm font-semibold uppercase tracking-wide text-primary-tint mb-4">
              payment
            </span>
            <h2 className="text-[2rem] font-semibold mb-6">
              Accept and Optimize Payment Globally
            </h2>
            <p className="text-[1.1rem] text-stone-600 font-medium mb-6">
              Keep your business account and all your finance needs safely
              organized under one roof. Manage money quickly, easily &
              efficiently. Whether you’re alone or leading a team.
            </p>
            <Button>Learn more &rarr;</Button>
          </div>
          <div className="lg:p">
            <img src="feature1.png" alt="Feature" />
          </div>

          <div>
            <span className="inline-block text-sm font-semibold uppercase tracking-wide text-primary-tint mb-4">
              Custom card
            </span>
            <h2 className="text-[2rem] font-semibold mb-6">
              Take Your Business Faster
            </h2>
            <p className="text-[1.1rem] text-stone-600 font-medium mb-6">
              Keep your business account and all your finance needs safely
              organized under one roof. Manage money quickly, easily &
              efficiently. Whether you’re alone or leading a team.
            </p>
            <Button>Learn more &rarr;</Button>
          </div>
          <div>
            <img src="feature2.png" alt="Feature" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
