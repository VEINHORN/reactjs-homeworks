import "./HomePage.css";

import food from "../assets/images/backgrounds/food.png";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import trustpilotLogo from "../assets/images/logos/trustpilot-logo.svg";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="homepage">
        <section className="hero">
          <div className="hero-content">
            <h1>
              Beautiful food & takeaway,{" "}
              <span className="highlight">delivered</span> to your door.
            </h1>
            <p>
              Enjoy restaurant-quality meals made with fresh ingredients.
              Delivered hot and ready whenever you are.
            </p>
            <button className="order-btn">Place an Order</button>

            <div className="rating-wrapper">
              <img src={trustpilotLogo} className="rating-logo"/>
              <div className="rating">
                <p>
                  <span className="green-text">4.8 out of 5</span> based on
                  2000+ reviews
                </p>
              </div>
            </div>
          </div>

          <div className="food-image">
            <img src={food} alt="Food delivery" />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
