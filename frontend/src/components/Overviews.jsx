function Overviews() {
  return (
    <section className="bg-primary-shade">
      <div className="w-[90%] max-w-[100rem] mx-auto">
        <div className="grid grid-cols-1">
          <div className="py-6">
            <div>
              <span className="text-sm text-primary-tint">Global Scale</span>
              <h2 className="text-[2rem] font-semibold mb-6 text-white">
                Sell Everywhere In Global Commerce
              </h2>
              <p className="text-[1rem] text-white opacity-[0.8] font-medium mb-6">
                When you sell your software products to global customers,
                accepting local payment methods is critical in capturing the
                total market opportunity. Don’t let payment friction get in the
                way of a single sale. Allow customers to pay in their local
                currency.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="">
                <span className="text-primary-tint font-bold text-lg">
                  132+
                </span>
                <p className="text-white">Currencies supported</p>
              </div>
              <div className="">
                <span className="text-primary-tint font-bold text-lg">
                  85.5%
                </span>
                <p className="text-white">Business using Finto</p>
              </div>
              <div className="">
                <span className="text-primary-tint font-bold text-lg">
                  150M
                </span>
                <p className="text-white">API request per day</p>
              </div>
            </div>
          </div>
          <div className="bg-primary-tint"></div>
        </div>
      </div>
    </section>
  );
}

export default Overviews;
