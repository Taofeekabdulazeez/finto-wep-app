import Icon from "../ui/Icon";

function Footer() {
  return (
    <footer className="py-8">
      <div className="w-[90%] max-w-[100rem] mx-auto">
        <div className="mb-6">
          <img src="footerLogo.png" alt="finto logo" />
        </div>
        <nav className="grid grid-cols-2 gap-8 border-b-2 py-6 lg:grid-cols-4">
          <ul className="flex flex-col gap-3">
            <li className="text-stone-500">Features</li>
            <li>
              <a className="text-sm font-medium" href="#">
                Payment Link
              </a>
            </li>
            <li>
              <a className="text-sm font-medium" href="#">
                Recurring Billing
              </a>
            </li>
            <li>
              <a className="text-sm font-medium" href="#">
                Invoicing
              </a>
            </li>
            <li>
              <a className="text-sm font-medium" href="#">
                Checkout
              </a>
            </li>
            <li>
              <a className="text-sm font-medium" href="#">
                Integration
              </a>
            </li>
            <li>
              <a className="text-sm font-medium" href="#">
                Pricing
              </a>
            </li>
          </ul>

          <ul className="flex flex-col gap-3">
            <li className="text-stone-500">Solutons</li>
            <li>
              <a className="text-sm font-medium" href="#">
                eCommerce
              </a>
            </li>
            <li>
              <a className="text-sm font-medium" href="#">
                Financial Automation
              </a>
            </li>
            <li>
              <a className="text-sm font-medium" href="#">
                Crypto
              </a>
            </li>
            <li>
              <a className="text-sm font-medium" href="#">
                Global Business
              </a>
            </li>
            <li>
              <a className="text-sm font-medium" href="#">
                Market Places
              </a>
            </li>
          </ul>

          <ul className="flex flex-col gap-3">
            <li className="text-stone-500">Resources</li>
            <li>
              <a className="text-sm font-medium" href="#">
                Tutorials
              </a>
            </li>
            <li>
              <a className="text-sm font-medium" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="text-sm font-medium" href="#">
                Community
              </a>
            </li>
            <li>
              <a className="text-sm font-medium" href="#">
                Privacy Policy
              </a>
            </li>
          </ul>

          <ul className="flex flex-col gap-3">
            <li className="text-stone-500">About</li>
            <li>
              <a className="text-sm font-medium" href="#">
                Company
              </a>
            </li>
            <li>
              <a className="text-sm font-medium" href="#">
                Careers
              </a>
            </li>
            <li>
              <a className="text-sm font-medium" href="#">
                FAQs
              </a>
            </li>
            <li>
              <a className="text-sm font-medium" href="#">
                Contact us
              </a>
            </li>
            <li>
              <a className="text-sm font-medium" href="#">
                Integration
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <p className="text-center my-4 font-medium">
            2023 Finto. All right reserved
          </p>
          <ul className="flex items-center justify-center gap-4">
            <li>
              <a href="#">
                <Icon type="Linkedin" />
              </a>
            </li>
            <li>
              <a href="#">
                <Icon type="twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <Icon type="facebook" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
