// App.tsx

import React from 'react';
import './styles.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <img src="your_image_url" alt="Spremit Logo" />
        <h1>Your #1 remittance choice to Philippines</h1>
        <p>Express remit to your doorstep</p>
      </header>

      <section className="why-spremit">
        <h2>Why Spremit?</h2>
        <div className="card">
          <img src="card_image_url" alt="Anytime" />
          <h3>Anytime</h3>
          <p>24/7 available</p>
        </div>
        <div className="card">
          <img src="card_image_url" alt="Anywhere" />
          <h3>Anywhere</h3>
          <p>Straight from your pocket</p>
        </div>
        <div className="card">
          <img src="card_image_url" alt="Express" />
          <h3>Express</h3>
          <p>Boom it's done already</p>
        </div>
        <div className="card">
          <img src="card_image_url" alt="Affordable" />
          <h3>Affordable</h3>
          <p>Competitive rate and fee</p>
        </div>
      </section>

      <section className="spremit-handled">
        <h2>Spremit Handled</h2>
        <div className="card">
          <img src="card_image_url" alt="Over 30 clients per day" />
          <h3>Over 30 clients per day</h3>
        </div>
        <div className="card">
          <img src="card_image_url" alt="Operated for 15 years" />
          <h3>Operated for 15 years</h3>
        </div>
        <div className="card">
          <img src="card_image_url" alt="Exceeding 50 transactions daily" />
          <h3>Exceeding 50 transactions daily</h3>
        </div>
      </section>

      <section className="testimonials">
        <h2>What They Say</h2>
        <div className="testimonial">
          <p>"Random quote 1"</p>
          <p>- Random Name 1</p>
        </div>
        <div className="testimonial">
          <p>"Random quote 2"</p>
          <p>- Random Name 2</p>
        </div>
      </section>

      <footer>
        <div className="footer-column">
          <h3>Help Center</h3>
          <p>Call Center: +628126188332</p>
          <p>
            Address: Glory Home Blok B1 no 16, Bengkong Sadai, Kota Batam,
            Kepulauan Riau, Indonesia
          </p>
        </div>
        <div className="footer-column">
          <h3>Privacy Policy</h3>
          <p>Customer Support: support@spremit.co.id</p>
          <p>Operational Hour: 24/7</p>
          <p>Office Hour: 9:30 am – 5:00 pm (GMT +7)</p>
        </div>
        <div className="footer-column">
          <h3>Terms & Conditions</h3>
          <p>Partnership: business@spremit.co.id</p>
          <p>2023 PT Songpeng Valasindo</p>
          <p>All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
