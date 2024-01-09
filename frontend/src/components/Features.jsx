import Button from "../ui/Button";

function Features() {
  return (
    <section className="py-6">
      <div className="w-[90%] max-w-[100rem] mx-auto">
        <div className="mb-8">
          <span className="text-sm text-stone-400">Solutions</span>
          <h2 className="text-[2rem] font-bold mb-6">
            Open Your Business Account Online
          </h2>
          <p className="text-[1.1rem] text-stone-600 font-medium">
            Keep your business account and all your finance needs safely
            organized under one roof. Manage money quickly, easily &
            efficiently. Whether you’re alone or leading a team.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div>
            <span className="text-sm text-stone-400">Payment</span>
            <h2 className="text-[2rem] font-bold mb-6">
              Accept and Optimize Payment Globally
            </h2>
            <p className="text-[1.1rem] text-stone-600 font-medium mb-6">
              Keep your business account and all your finance needs safely
              organized under one roof. Manage money quickly, easily &
              efficiently. Whether you’re alone or leading a team.
            </p>
            <Button>Learn more &rarr;</Button>
          </div>
          <div>
            <img src="feature1.png" alt="Feature" />
          </div>

          <div>
            <span className="text-sm text-stone-400">Custom card</span>
            <h2 className="text-[2rem] font-bold mb-6">
              Build a Fintech with Banking as a Service
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

          <div>
            <span className="text-sm text-stone-400">Built for Growth</span>
            <h2 className="text-[2rem] font-bold mb-6">
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
            <img src="feature3.png" alt="Feature" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
