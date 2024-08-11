import React from 'react';
import { Link } from 'react-router-dom';
import './aboutUs.css';
import krushiLogo from '../krushi_logo.jpg'; // Update with actual path to the logo
import farmer from '../farmer.png'; // Update with actual path to the image

const Navbar = () => {
  return (
    <nav className="navbar">
            <div className="logo">
                <img src={krushiLogo} style={{ height: 50, width: 50, marginLeft: 50 }} alt="Krushi Logo" />
            </div>
            <ul className="nav-links" style={{ marginRight: 50 }}>
                <li style={{ margin: 20 }}><Link to="/">Home</Link></li>
                <li style={{ margin: 20 }}><Link to="/about">About Us</Link></li>
                <li style={{ margin: 20 }}><Link to="/bid">Auction</Link></li>
                <li style={{ margin: 20 }}><Link to="/contact">Contact</Link></li>
                <li style={{ margin: 20 }}><Link to="/profile">Profile</Link></li>
                <img src={farmer} style={{ height: 50, width: 50, marginLeft: 20,backgroundColor:"rgba(0,0,0,0.7)",borderRadius:"50%" }}></img>
            </ul>
        </nav>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Krushi. All rights reserved.</p>
    </footer>
  );
};

const aboutUs = () => {
  return (
    <div className="about-us-page">
      <Navbar />
      <main className="content">
        <section className="intro">
          <h2>Welcome to Krushi</h2>
          <p>
            At Krushi, we are committed to transforming the agricultural market by empowering farmers and connecting them directly with buyers. Our platform revolutionizes the way produce is bought and sold, making it easier, more transparent, and fairer for everyone involved.
          </p>
        </section>

        <section className="mission">
          <h3>Our Mission</h3>
          <p>
            Our mission is to empower farmers by providing them with the tools and opportunities to access wider markets and secure better prices for their produce. We strive to foster an environment of fair trade and sustainability, ensuring that every transaction benefits both farmers and buyers.
          </p>
        </section>

        <section className="vision">
          <h3>Our Vision</h3>
          <p>
            We envision a future where technology bridges the gap between rural farmers and urban markets, creating a seamless and efficient agricultural ecosystem. By leveraging innovation, we aim to make Krushi the go-to platform for all agricultural trading needs.
          </p>
        </section>

        <section className="unique-value">
          <h3>What Makes Us Unique</h3>
          <ul>
            <li><strong>Real-Time Bidding:</strong> Our platform allows for live bidding, ensuring farmers get the best possible prices for their produce while providing buyers with competitive options.</li>
            <li><strong>Transparency:</strong> We prioritize transparency in all transactions, offering detailed product listings and clear pricing to build trust between farmers and buyers.</li>
            <li><strong>Ease of Use:</strong> Our user-friendly interface makes it simple for farmers to list their products and for buyers to find what they need.</li>
          </ul>
        </section>

        <section className="benefits">
          <h3>Benefits for Farmers</h3>
          <ul>
            <li>Providing access to a vast network of potential buyers, expanding their market reach.</li>
            <li>Offering resources and tools to help them list and sell their products effectively.</li>
            <li>Enabling them to secure better prices through competitive bidding.</li>
          </ul>

          <h3>Benefits for Buyers</h3>
          <ul>
            <li>A wide selection of fresh produce directly from farmers, ensuring quality and freshness.</li>
            <li>Competitive pricing through our real-time bidding system.</li>
            <li>Secure and straightforward transactions for peace of mind.</li>
          </ul>
        </section>

        <section className="sustainability">
          <h3>Commitment to Sustainability</h3>
          <p>
            Krushi is dedicated to promoting sustainable agricultural practices. We partner with initiatives that support organic farming and environmental responsibility, aiming to reduce waste and enhance sustainability.
          </p>
        </section>

        <section className="community">
          <h3>Community Engagement</h3>
          <p>
            We believe in the power of community. Krushi fosters collaboration and knowledge sharing among farmers and buyers through events, workshops, and forums designed to educate and engage our users.
          </p>
        </section>

        <section className="technology">
          <h3>Embracing Technology</h3>
          <p>
            Krushi leverages cutting-edge technology to enhance the agricultural trading experience:
          </p>
          <ul>
            <li><strong>Data Analytics:</strong> We use data-driven insights to help users make informed decisions.</li>
            <li><strong>Mobile Accessibility:</strong> Our platform is accessible via mobile devices, allowing users to manage transactions on the go.</li>
          </ul>
        </section>

        <section className="success-stories">
          <h3>Success Stories</h3>
          <p>
            Hear from farmers and buyers who have transformed their businesses with Krushi. Our platform has facilitated countless success stories, helping users achieve significant milestones and grow their operations.
          </p>
        </section>

        <section className="contact">
          <h3>Get in Touch</h3>
          <p>
            We’re here to support you every step of the way. Whether you have questions, need assistance, or want to explore partnership opportunities, our team is ready to help. Contact us today to learn more about how Krushi can benefit you.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default aboutUs;
