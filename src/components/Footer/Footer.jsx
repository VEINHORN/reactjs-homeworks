import instagram from "../../assets/images/icons/instagram.svg";
import twitter from "../../assets/images/icons/twitter.svg";
import youtube from "../../assets/images/icons/youtube.svg";
import "./Footer.css";
import logo from "../../assets/images/logos/logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-intro">
          <img src={logo}/>
          <h4>Takeaway & Delivery</h4>
          <p>for small - medium businesses.</p>
        </div>

        <div className="footer-columns">
          <div>
            <h5>Company</h5>
            <ul>
              <li>Home</li>
              <li>Order</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h5>Template</h5>
            <ul>
              <li>Style Guide</li>
              <li>Changelog</li>
              <li>Licence</li>
              <li>Webflow University</li>
            </ul>
          </div>
          <div>
            <h5>Flowbase</h5>
            <ul>
              <li>More Cloneables</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-links">
          <img src={instagram} alt="Instagram" />
          <img src={twitter} alt="Twitter" />
          <img src={youtube} alt="YouTube" />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
