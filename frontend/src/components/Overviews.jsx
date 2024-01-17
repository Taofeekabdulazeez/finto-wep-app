import { useEffect, useRef, useState } from "react";

function Overviews() {
  const [isIntersecting, setIsintersecting] = useState(false);
  const ref = useRef(null);

  useEffect(
    function () {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];

          setIsintersecting(entry.isIntersecting);
        },
        {
          root: null,
          threshold: [1],
        },
      );

      observer.observe(ref.current);

      return () => observer.disconnect();
    },
    [isIntersecting, ref],
  );

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:items-center">
        <div className="bg-primary-shade py-8">
          <div className="w-[90%] max-w-[100rem] mx-auto">
            <div>
              <span className="inline-block text-sm font-semibold uppercase tracking-wide text-primary-tint mb-4">
                Global scale
              </span>
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
        </div>
        <div ref={ref} className="bg-primary-tint relative">
          <div className="w-[90%] max-w-[100rem] mx-auto pt-[9rem]">
            <img src="Earth.png" alt="Earth" />
            <img
              className={`absolute top-[0%] left-0 w-[60%] scale-0 transition-all delay-75 ${
                isIntersecting ? "scale-100" : ""
              }`}
              src="country1.png"
              alt="country"
            />
            <img
              className={`absolute top-[25%] right-0 w-[60%] scale-0 transition- duration-300 delay-0 ${
                isIntersecting ? "scale-100" : ""
              }`}
              src="country2.png"
              alt="country"
            />
            <img
              className={`absolute top-[50%] left-0 w-[60%] scale-0 transition- duration-300 delay-300 ${
                isIntersecting ? "scale-100" : ""
              }`}
              src="country3.png"
              alt="country"
            />
            <img
              className={`absolute top-[75%] right-0 w-[60%] scale-0 transition- duration-300 delay-200 ${
                isIntersecting ? "scale-100" : ""
              }`}
              src="country4.png"
              alt="country"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overviews;
