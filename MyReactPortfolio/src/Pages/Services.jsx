import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="main-container">
      <h1 className="our-services">Our Services</h1>
      <div className="services-container">
        <div className="services-grid">
          <div className="services">
            <h1 className="s-header">Web Design and Development</h1>
            <p>
              Elevate your brand with a website that captivates and converts. We
              specialize in designing modern, responsive websites that not only
              look stunning but also provide a smooth experience across all
              devices.
            </p>
            <h3 className="service-list">Services Included:</h3>
            <ul>
              <li>
                Custom Designs: Every design is tailored to reflect your brand's
                unique identity.
              </li>
              <li>
                Responsive Layouts: Mobile, tablet, or desktop — your site will
                adapt flawlessly to any screen size.
              </li>
              <li>
                Essential Integrations: We incorporate features like social
                media links, contact forms, and email sign-ups to connect you
                directly with your audience.
              </li>
            </ul>
            <p>
              nvest in a website that establishes credibility, attracts new
              customers, and paves the way for business growth.
            </p>
          </div>
          <div className="services">
            <h1 className="s-header">Brand Strategy and Design</h1>
            <p>
              Your brand is more than a logo — it's how customers perceive you
              at every touchpoint. We'll help you create a memorable, cohesive
              brand that resonates with your audience and sets you apart.
            </p>
            <h3 className="service-list">Services Included:</h3>
            <ul>
              <li>
                Logo and Color Palette Design: Unique visuals that reflect your
                brand's values and style.
              </li>
              <li>
                Brand Style Guide: Consistent standards across all channels,
                ensuring every customer interaction is on-brand.
              </li>
              <li>
                Visual Content Creation: Custom icons, banners, and more to
                enhance your brand's visual appeal.
              </li>
            </ul>
            <p>Build a brand that inspires trust, loyalty, and recognition.</p>
          </div>
          <div className="services">
            <h1 className="s-header">E-commerce Solutions</h1>
            <p>
              Build your brand and boost your sales with a beautiful,
              easy-to-navigate online store. Whether you're in fashion,
              wellness, or another niche, we'll create an e-commerce experience
              that showcases your products and delights your customers.
            </p>
            <h3 className="service-list">Services Included:</h3>
            <ul>
              <li>
                E-commerce Platform Setup:we set up your store on the platform
                that best suits your business needs.
              </li>
              <li>
                Secure Payment Options: Offer customers peace of mind with safe
                and reliable payment gateways.
              </li>
              <li>
                Product Listing Optimization: Make each product stand out with
                SEO-friendly descriptions and high-quality images.
              </li>
            </ul>
            <p>
              Let's create an online shop that's not just functional, but a true
              extension of your brand.
            </p>
          </div>
          <div className="services">
            <h1 className="s-header">Website maintainace and Support</h1>
            <p>
              Our partnership doesn't end after launch. We offer ongoing support
              and maintenance so you can focus on your business, knowing your
              site is running smoothly.
            </p>
            <h3 className="service-list">Services Included:</h3>
            <ul>
              <li>
                Regular Updates and Backups: Stay protected and up-to-date with
                the latest features and security measures.
              </li>
              <li>
                Bug Fixes and Troubleshooting: We address any issues promptly to
                ensure seamless functionality.
              </li>
              <li>
                Performance Optimization: Speed and security improvements to
                keep your visitors engaged.
              </li>
            </ul>
            <p>
              With our maintenance service, you'll never have to worry about
              technical hiccups slowing you down.
            </p>
          </div>
          <div className="services">
            <h1 className="s-header">SEO and Content optimazation</h1>
            <p>
              Get found by the right audience with search engine optimization
              strategies that drive traffic and improve your visibility.
            </p>
            <h3 className="service-list">Services Included:</h3>
            <ul>
              <li>
                On-Page SEO: From keywords to meta descriptions, we fine-tune
                your site for search engines.
              </li>
              <li>
                Content Optimization: Crafting content that is both engaging and
                aligned with SEO best practices.
              </li>
              <li>
                Analytics and Tracking: Regular performance insights to
                understand what's working and where to improve.
              </li>
            </ul>
            <p>
              Turn clicks into customers with a site that ranks higher and
              reaches your target audience.
            </p>
          </div>
        </div>
      </div>
      <div className="get-started">
        <h2> Ready to Bring Your Vision to Life? </h2>

        <p>
          Whether you're looking to establish an online presence or enhance an
          existing one, we're here to help.Let's discuss your project and
          explore how we can bring your ideas to life with creativity,
          innovation
        </p>

        <Link to="/contact">
          <button className="start-btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
