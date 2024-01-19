import Button from "../ui/Button";

function CallToAction() {
  return (
    <section className="bg-primary-shade py-[6rem]">
      <div className="w-[90%] max-w-[100rem] mx-auto">
        <h1 className="text-[#fff] font-semibold text-[2.4rem] mb-6 text-center">
          Simplifying Payments for Growing Business
        </h1>
        <p className="text-[#ffffff] text-[1.2rem] opacity-[0.8] mb-8 text-center">
          Join over 300+ partners and customers already growing with Benefit
        </p>
        <div className="grid grid-cols-1 gap-4">
          <Button type="primary">Open an Account</Button>
          <Button type="inverted">Contact Sales</Button>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
