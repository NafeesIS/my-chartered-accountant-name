import footerLogo from "../../assets/footerLogo.svg";
import whatsappLogo from "../../assets/whatsapp.svg";
import linkdlnLogo from "../../assets/linkedin.svg";
import facebooklogo from "../../assets/facebook.svg";
import instaLogo from "../../assets/insta.svg";

const Footer = () => {
  return (
    <div
      className="text-white max-w-[1536px]"
      style={{ fontFamily: "Poppins" }}
    >
      <div className="lg:px-16 px-2 bg-gradient-to-r from-[#0076ce] to-[#9400d3] pb-6">
        <footer className="footer py-10">
          <aside>
            <img src={footerLogo} className="logo lg:mr-2 mr-0" alt="logo" />
            <p>
              ACME Industries Ltd.
              <br />
              Providing reliable tech since 1992
            </p>
          </aside>
          <nav>
            <header className="text-white font-bold">COMPANY</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Careers</a>
          </nav>
          <nav>
            <header className="text-white font-bold">SOLUTIONS</header>
            <a className="link link-hover">Search</a>
            <a className="link link-hover">Connect</a>
            <a className="link link-hover">Research</a>
            <a className="link link-hover">Academy</a>
          </nav>
          <nav>
            <header className="text-white font-bold">SUPPORT</header>
            <a className="link link-hover">Blogs</a>
            <a className="link link-hover">Forms</a>
          </nav>
          <nav>
            <header className="text-white font-bold">RESOURCES</header>
            <a className="link link-hover">Help</a>
            <a className="link link-hover">Contact Us</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <nav>
            <header className="text-white font-bold">LEGAL</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Accessibility</a>
          </nav>
        </footer>
        <div className="custom-divider"></div>
        <div className="md:flex flex-none justify-between mt-4">
          <div>
            <p className="lg:w-full">
              Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071,
              Maharashtra
            </p>
          </div>
          <div className="flex">
            <img src={facebooklogo} className="logo mr-4" alt="logo" />
            <img src={instaLogo} className="logo mr-4" alt="logo" />
            <img src={whatsappLogo} className="logo mr-4" alt="logo" />
            <img src={linkdlnLogo} className="logo" alt="logo" />
          </div>
        </div>
      </div>
      <footer className="footer footer-center p-4 bg-black text-white">
        <aside>
          <p>
            Registered trademark of India Private Limited © 2023 loerumipsum
            Inc. All Rights Reserved
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
