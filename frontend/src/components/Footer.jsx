import Icon from "../ui/Icon";

function Footer() {
  return (
    <footer className="py-8">
      <div className="w-[90%] max-w-[100rem] mx-auto">
        <div className="mb-6">
          <img src="footerLogo.png" alt="finto logo" />
        </div>
        <nav className="grid grid-cols-2 gap-8 border-b-2 py-6">
          <ul className="flex flex-col gap-3">
            <li>Features</li>
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
          </ul>

          <ul className="flex flex-col gap-3">
            <li>Features</li>
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
          </ul>

          <ul className="flex flex-col gap-3">
            <li>Features</li>
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
          </ul>

          <ul className="flex flex-col gap-3">
            <li>Features</li>
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
          </ul>
        </nav>
        <div>
          <p className="text-center my-4">2023 Finto. All right reserved</p>
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
