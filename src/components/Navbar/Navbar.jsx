
import './Navbar.css';

const Navbar = () => {
  return (
    < >
      <div className="top-bar">
        <div className="store-location">
          <i className="fas fa-map-marker-alt"><img src='./Map Pin.svg' alt='map'></img></i> Store Location: Lincoln-344, Illinois, Chicago, USA
        </div>
        <div className="language-currency">
          <span>Eng</span> | <span>USD</span>
        </div>
      </div>

      <nav className="navbar">
        <div className="logo">
          <img src="/plant 1.png" alt="Ecobazar" />
          <span>Ecobazar</span>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>

        <div className="right-section">
          
            <div className="heart-icon"><img src="./Heart.svg"></img></div>
            <div className="shopping-bag-icon"><img src='./Cart.svg'></img></div>
            {/* <span className="cart-count">2</span> */}
            
        
          <div className='price-div'>
            <div>Shopping Bag</div>
            <div className="">$57.00</div>
            </div>
          
        </div>
      </nav>

      <div className="bottom-nav">
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Pages</li>
          <li>Blog</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
        <div className="contact-info">
            <div ><img className="phone-icon-div" src='./PhoneCall 1.svg' alt='phone'></img></div>
            <span>(219) 555-0114</span>
          </div>
      </div>
    </>
  );
};

export default Navbar;
