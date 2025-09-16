import { socialImgs } from "../constents/index";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
                <a href={socialImg.url} target="_blank" rel="noopener noreferrer">
              <img src={socialImg.imgPath} alt="social icon" />
                </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Ankur Porwal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;