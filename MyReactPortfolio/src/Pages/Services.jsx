import React from "react";
import { Link } from "react-router-dom";
import brand from "../assets/brand.png";
import webdevelopment from "../assets/webdevelopment.png";
import seo from "../assets/seo.png";
import maintanance from "../assets/maintainance.png";
import ecommerce from "../assets/e-commerce.png";
import ServicesRequest from "./ServicesRequest";

const Services = () => {
  return (
    <div className="main-container">
      <div className="page-title">Services</div>
      <div className="services-container">
        <div className="serviceRequest-card">
          <p className="serviceRequestText">
            Looking to elevate your online presence ?
          </p>
          <Link to="/servicesrequest">
            <button className="service-btn">Request a service</button>
          </Link>
        </div>
        <div className="services-grid">
          <div className="services">
            <h1 className="s-header">Web Design and Development</h1>
            <img src={webdevelopment} alt="computer" className="brand" />
            <p>
              Elevate your brand with a website that captivates and converts. We
              specialize in designing modern, responsive websites that not only
              look stunning but also provide a smooth experience across all
              devices.
            </p>
            <h3 className="service-list">Services Included:</h3>
            <ul>
              <li>Custom Designs</li>
              <li>Responsive Layouts</li>
              <li>Essential Integrations</li>
            </ul>
            <p>
              Invest in a website that establishes credibility, attracts new
              customers, and paves the way for business growth.
            </p>
          </div>
          <div className="services">
            <h1 className="s-header">Brand Strategy and Design</h1>
            <img src={brand} alt="small bag and a big bag" className="brand" />
            <p>
              Your brand is more than a logo — it's how customers perceive you
              at every touchpoint. We'll help you create a memorable, cohesive
              brand that resonates with your audience and sets you apart.
            </p>
            <h3 className="service-list">Services Included:</h3>
            <ul>
              <li>Logo and Color Palette Design</li>
              <li>Brand Style Guide</li>
              <li>Visual Content Creation</li>
            </ul>
            <p>Build a brand that inspires trust, loyalty, and recognition.</p>
          </div>
          <div className="services">
            <h1 className="s-header">E-commerce Solutions</h1>
            <img
              src={ecommerce}
              alt="phone with a screen showing a shopping cart"
              className="brand"
            />
            <p>
              Build your brand and boost your sales with a beautiful,
              easy-to-navigate online store. Whether you're in fashion,
              wellness, or another niche, we'll create an e-commerce experience
              that showcases your products and delights your customers.
            </p>
            <h3 className="service-list">Services Included:</h3>
            <ul>
              <li>E-commerce Platform Setup</li>
              <li>Secure Payment Options</li>
              <li>Product Listing Optimization</li>
            </ul>
            <p>
              Let's create an online shop that's not just functional, but a true
              extension of your brand.
            </p>
          </div>
          <div className="services">
            <h1 className="s-header">Website maintainace and Support</h1>
            <img src={maintanance} alt="tools for fixing" className="brand" />
            <p>
              Our partnership doesn't end after launch. We offer ongoing support
              and maintenance so you can focus on your business, knowing your
              site is running smoothly.
            </p>
            <h3 className="service-list">Services Included:</h3>
            <ul>
              <li>Regular Updates and Backups</li>
              <li>Bug Fixes and Troubleshooting</li>
              <li>Performance Optimization</li>
            </ul>
            <p>
              With our maintenance service, you'll never have to worry about
              technical hiccups slowing you down.
            </p>
          </div>
          <div className="services">
            <h1 className="s-header">SEO and Content optimazation</h1>
            <img src={seo} alt="seo bar graph" className="brand" />
            <p>
              Get found by the right audience with search engine optimization
              strategies that drive traffic and improve your visibility.
            </p>
            <h3 className="service-list">Services Included:</h3>
            <ul>
              <li>On-Page SEO</li>
              <li>Content Optimization</li>
              <li>Analytics and Tracking</li>
            </ul>
            <p>
              Turn clicks into customers with a site that ranks higher and
              reaches your target audience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
