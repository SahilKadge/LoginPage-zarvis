
import './Footor.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-logo">
            <div className='footer-logo-div'>
                <img src='plant 1.png'></img>
                <h2>Ecobazar</h2>
            </div>
          <p>
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.
          </p>
          <div className="contact">
            <a className='contact-1' href="tel:(219) 555-0114">(219) 555-0114</a> or <a className='contact-2' href="mailto:Proxy@gmail.com">Proxy@gmail.com</a>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3>My Account</h3>
            <ul>
              <li><a href="#">My Account</a></li>
              <li><a href="#">Order History</a></li>
              <li><a href="#">Shopping Cart</a></li>
              <li><a href="#">Wishlist</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Helps</h3>
            <ul>
              <li><a href="#">Contact</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Terms & Condition</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Proxy</h3>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Product</a></li>
              <li><a href="#">Track Order</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Categories</h3>
            <ul>
              <li><a href="#">Fruit & Vegetables</a></li>
              <li><a href="#">Meat & Fish</a></li>
              <li><a href="#">Bread & Bakery</a></li>
              <li><a href="#">Beauty & Health</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Ecobazar eCommerce © 2021. All Rights Reserved</p>
        <div className="payment-options">
          <img src="./Frame 142.svg"></img>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
