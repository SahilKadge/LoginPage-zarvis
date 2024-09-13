
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <div className="newsletter-container">
      <div className="newsletter-content">
        <h3>Subscribe our Newsletter</h3>
        <p>
          Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.
        </p>
      </div>
      <div className="newsletter-subscribe">
        <input type="email" placeholder="Your email address" />
        <button className="subscribe-btn">Subscribe</button>
        <div className="social-icons">
          <a href="#"><img src='./Social Media.svg'></img></a>
          <a href="#"><img src='./Social Media (1).svg'></img></a>
          <a href="#"><img src='./Social Media (2).svg'></img></a>
          <a href="#"><img src='./Social Media (3).svg'></img></a>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
