import logo from "../../assets/images/logos/logo.svg";
import bucket from "../../assets/images/icons/bucket.svg";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>
        <div className="nav-links-wrapper">
          <ul className="nav-links">
            <li className="active">Home</li>
            <li>Menu</li>
            <li>Company</li>
            <li>Login</li>
          </ul>
          <button className="cart-btn">
            <img src={bucket} />
            <span className="cart-count">0</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
