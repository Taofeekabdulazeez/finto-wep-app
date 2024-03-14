import Button from "../ui/Button";

function Hero() {
  return (
    <section className="pt-8 bg-primary-shade">
      <div className="w-[90%] max-w-[100rem] mx-auto grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div>
          <span className="inline-block text-sm font-medium tracking-wider mb-4 px-3 py-2 text-accent-color border rounded-full border-accent-color">
            🎉 Announcing Finto Beta 2.0 &rarr;
          </span>
          <h1 className="text-[#fff] font-semibold text-[2.6rem] mb-6">
            All In One App Finance for Your Business
          </h1>
          <p className="text-[#ffffff] text-[1.2rem] opacity-[0.8] mb-8">
            Keep your business account and all your finance needs safely
            organized under one roof. Manage money quickly, easily &
            efficiently. Whether you’re alone or leading a team.
          </p>
          <div className="grid grid-cols-1 gap-4 lg:inline-flex lg:gap-6">
            <Button type="primary">Open an Account</Button>
            <Button type="inverted">Contact Sales</Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            className="block mx-auto"
            src="Intro-Illustration.png"
            alt="Finto web application"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
