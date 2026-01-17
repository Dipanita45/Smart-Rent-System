import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState(null); // null | 'success' | 'error'

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setSubscribeStatus("error");
      return;
    }

    setIsSubscribing(true);
    setSubscribeStatus(null);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubscribeStatus("success");
      setEmail("");
    } catch (error) {
      setSubscribeStatus("error");
    } finally {
      setIsSubscribing(false);
    }
  };
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-gradient-to-b from-neutral-950 to-neutral-900 text-white pt-16 pb-8"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-14">
          {/* Company Info */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="mb-5">
              <h3 className="text-2xl font-bold text-white tracking-wide">
                <span className="text-primary-400">Smart</span>
                <span className="text-white/90"> Rent</span>
              </h3>
              <p className="text-xs text-primary-400 font-semibold tracking-widest mt-1">SYSTEM</p>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6 max-w-xs">
              Your trusted platform for finding and listing rental properties. Secure, reliable, and built for modern travelers.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-3 mt-2">
              <p className="text-xs text-neutral-500 uppercase tracking-widest mr-3">Follow</p>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="group relative">
                <div className="absolute inset-0 bg-primary-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-neutral-800/80 hover:bg-primary-500 text-white h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <i className="fab fa-facebook-f text-sm" aria-hidden="true"></i>
                </div>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="group relative">
                <div className="absolute inset-0 bg-primary-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-neutral-800/80 hover:bg-primary-500 text-white h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <i className="fab fa-twitter text-sm" aria-hidden="true"></i>
                </div>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group relative">
                <div className="absolute inset-0 bg-primary-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-neutral-800/80 hover:bg-primary-500 text-white h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <i className="fab fa-instagram text-sm" aria-hidden="true"></i>
                </div>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group relative">
                <div className="absolute inset-0 bg-primary-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-neutral-800/80 hover:bg-primary-500 text-white h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <i className="fab fa-linkedin-in text-sm" aria-hidden="true"></i>
                </div>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="group relative">
                <div className="absolute inset-0 bg-primary-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-neutral-800/80 hover:bg-primary-500 text-white h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <i className="fab fa-youtube text-sm" aria-hidden="true"></i>
                </div>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <nav aria-label="Company links" className="mt-6 sm:mt-0">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5 flex items-center">
              <span className="w-1 h-1 bg-primary-400 rounded-full mr-3"></span>
              Company
            </h4>
            <ul className="space-y-3.5">
              <li>
                <Link to="/" className="group text-neutral-400 hover:text-primary-400 text-sm transition-colors duration-200 flex items-center" onClick={() => window.scrollTo(0, 0)}>
                  <span className="inline-block w-0 h-0.5 bg-primary-400 mr-2 group-hover:w-4 transition-all duration-300"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="group text-neutral-400 hover:text-primary-400 text-sm transition-colors duration-200 flex items-center" onClick={() => window.scrollTo(0, 0)}>
                  <span className="inline-block w-0 h-0.5 bg-primary-400 mr-2 group-hover:w-4 transition-all duration-300"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/become-host" className="group text-neutral-400 hover:text-primary-400 text-sm transition-colors duration-200 flex items-center" onClick={() => window.scrollTo(0, 0)}>
                  <span className="inline-block w-0 h-0.5 bg-primary-400 mr-2 group-hover:w-4 transition-all duration-300"></span>
                  Become a Host
                </Link>
              </li>
              <li>
                <Link to="/blog" className="group text-neutral-400 hover:text-primary-400 text-sm transition-colors duration-200 flex items-center" onClick={() => window.scrollTo(0, 0)}>
                  <span className="inline-block w-0 h-0.5 bg-primary-400 mr-2 group-hover:w-4 transition-all duration-300"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="group text-neutral-400 hover:text-primary-400 text-sm transition-colors duration-200 flex items-center" onClick={() => window.scrollTo(0, 0)}>
                  <span className="inline-block w-0 h-0.5 bg-primary-400 mr-2 group-hover:w-4 transition-all duration-300"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Discover Links */}
          <nav aria-label="Discover links" className="mt-6 sm:mt-0">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5 flex items-center">
              <span className="w-1 h-1 bg-primary-400 rounded-full mr-3"></span>
              Discover
            </h4>
            <ul className="space-y-3.5">
              <li>
                <Link to="/listings" className="group text-neutral-400 hover:text-primary-400 text-sm transition-colors duration-200 flex items-center" onClick={() => window.scrollTo(0, 0)}>
                  <span className="inline-block w-0 h-0.5 bg-primary-400 mr-2 group-hover:w-4 transition-all duration-300"></span>
                  Browse Properties
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="group text-neutral-400 hover:text-primary-400 text-sm transition-colors duration-200 flex items-center" onClick={() => window.scrollTo(0, 0)}>
                  <span className="inline-block w-0 h-0.5 bg-primary-400 mr-2 group-hover:w-4 transition-all duration-300"></span>
                  Saved Listings
                </Link>
              </li>
              <li>
                <Link to="/trips" className="group text-neutral-400 hover:text-primary-400 text-sm transition-colors duration-200 flex items-center" onClick={() => window.scrollTo(0, 0)}>
                  <span className="inline-block w-0 h-0.5 bg-primary-400 mr-2 group-hover:w-4 transition-all duration-300"></span>
                  My Trips
                </Link>
              </li>
              <li>
                <Link to="/messages" className="group text-neutral-400 hover:text-primary-400 text-sm transition-colors duration-200 flex items-center" onClick={() => window.scrollTo(0, 0)}>
                  <span className="inline-block w-0 h-0.5 bg-primary-400 mr-2 group-hover:w-4 transition-all duration-300"></span>
                  Messages
                </Link>
              </li>
            </ul>
          </nav>

          {/* Support Links */}
          <nav aria-label="Support links" className="mt-6 sm:mt-0">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5 flex items-center">
              <span className="w-1 h-1 bg-primary-400 rounded-full mr-3"></span>
              Support
            </h4>
            <ul className="space-y-3.5">
              <li>
                <Link to="/help" className="group text-neutral-400 hover:text-primary-400 text-sm transition-colors duration-200 flex items-center" onClick={() => window.scrollTo(0, 0)}>
                  <span className="inline-block w-0 h-0.5 bg-primary-400 mr-2 group-hover:w-4 transition-all duration-300"></span>
                  Help & FAQ
                </Link>
              </li>
              <li>
                <Link to="/safety" className="group text-neutral-400 hover:text-primary-400 text-sm transition-colors duration-200 flex items-center" onClick={() => window.scrollTo(0, 0)}>
                  <span className="inline-block w-0 h-0.5 bg-primary-400 mr-2 group-hover:w-4 transition-all duration-300"></span>
                  Safety
                </Link>
              </li>
              <li>
                <Link to="/cancellation" className="group text-neutral-400 hover:text-primary-400 text-sm transition-colors duration-200 flex items-center" onClick={() => window.scrollTo(0, 0)}>
                  <span className="inline-block w-0 h-0.5 bg-primary-400 mr-2 group-hover:w-4 transition-all duration-300"></span>
                  Cancellation
                </Link>
              </li>
              <li>
                <Link to="/report-concern" className="group text-neutral-400 hover:text-primary-400 text-sm transition-colors duration-200 flex items-center" onClick={() => window.scrollTo(0, 0)}>
                  <span className="inline-block w-0 h-0.5 bg-primary-400 mr-2 group-hover:w-4 transition-all duration-300"></span>
                  Report Issue
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact & Newsletter */}
          <div className="mt-6 sm:mt-0 bg-neutral-900/50 rounded-lg p-5 border border-neutral-800/50">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5 flex items-center">
              <i className="fas fa-envelope text-primary-400 mr-3"></i>
              Connect
            </h4>
            
            <div className="space-y-3.5 mb-6">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-primary-400 mt-0.5 mr-3 flex-shrink-0 text-xs"></i>
                <span className="text-xs text-neutral-400 leading-relaxed">123 Rent Street,<br/>City, Country</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone-alt text-primary-400 mr-3 flex-shrink-0 text-xs"></i>
                <a href="tel:+11234567890" className="text-xs text-neutral-400 hover:text-primary-400 transition">+1 (123) 456-7890</a>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope text-primary-400 mr-3 flex-shrink-0 text-xs"></i>
                <a href="mailto:info@smartrentsystem.com" className="text-xs text-neutral-400 hover:text-primary-400 transition break-all">info@smartrentsystem.com</a>
              </div>
              <div className="flex items-center text-primary-300">
                <i className="fas fa-clock text-primary-400 mr-3 flex-shrink-0 text-xs"></i>
                <span className="text-xs">Mon-Fri, 9AM-6PM EST</span>
              </div>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-3 border-t border-neutral-800 pt-4">
              <p className="text-xs font-semibold text-neutral-300">Get exclusive updates</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`flex-1 text-xs bg-neutral-800 text-white rounded-l px-3 py-2.5 focus:outline-none focus:ring-1 focus:ring-primary-400 placeholder:text-neutral-500 transition ${subscribeStatus === "error" ? "ring-1 ring-red-500" : ""}`}
                  disabled={isSubscribing}
                  aria-invalid={subscribeStatus === "error"}
                  aria-describedby="newsletter-feedback"
                />
                <button
                  type="submit"
                  className="bg-primary-500 hover:bg-primary-600 text-white px-3 py-2.5 rounded-r transition duration-200 flex items-center justify-center disabled:opacity-50"
                  disabled={isSubscribing}
                >
                  {isSubscribing ? <i className="fas fa-circle-notch fa-spin text-xs" /> : <i className="fas fa-arrow-right text-xs" />}
                </button>
              </div>
              {subscribeStatus && (
                <p id="newsletter-feedback" className={`text-xs ${subscribeStatus === "success" ? "text-green-400" : "text-red-400"}`}>
                  {subscribeStatus === "success" ? "✓ Thanks for subscribing!" : "✗ Please enter a valid email"}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="border-t border-neutral-800/50 mt-12 pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Legal */}
            <div>
              <h5 className="text-xs font-bold uppercase tracking-widest text-neutral-300 mb-4 flex items-center">
                <span className="w-1 h-1 bg-primary-400 rounded-full mr-3"></span>
                Legal
              </h5>
              <ul className="space-y-3">
                <li>
                  <Link to="/privacy" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-200" onClick={() => window.scrollTo(0, 0)}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-200" onClick={() => window.scrollTo(0, 0)}>
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-200" onClick={() => window.scrollTo(0, 0)}>
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Information */}
            <div>
              <h5 className="text-xs font-bold uppercase tracking-widest text-neutral-300 mb-4 flex items-center">
                <span className="w-1 h-1 bg-primary-400 rounded-full mr-3"></span>
                Information
              </h5>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-200">How it Works</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-200">Accessibility</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-200">Sitemap</a>
                </li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h5 className="text-xs font-bold uppercase tracking-widest text-neutral-300 mb-4 flex items-center">
                <span className="w-1 h-1 bg-primary-400 rounded-full mr-3"></span>
                Community
              </h5>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-200">Guidelines</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-200">Reviews & Ratings</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-200">User Stories</a>
                </li>
              </ul>
            </div>

            {/* Get the App */}
            <div>
              <h5 className="text-xs font-bold uppercase tracking-widest text-neutral-300 mb-4 flex items-center">
                <span className="w-1 h-1 bg-primary-400 rounded-full mr-3"></span>
                Mobile App
              </h5>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-200 flex items-center">
                    <i className="fab fa-apple mr-2"></i>
                    iOS App
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-200 flex items-center">
                    <i className="fab fa-android mr-2"></i>
                    Android App
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Final Bottom Bar */}
          <div className="border-t border-neutral-800/50 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-500">
              &copy; {currentYear} <span className="text-neutral-400 font-semibold">Smart Rent System</span>
              <span className="text-neutral-600 mx-2">•</span>
              <span className="text-neutral-500">All rights reserved</span>
            </p>
            <p className="text-sm text-neutral-500 flex items-center justify-center">
              Designed with <i className="fas fa-heart text-primary-400 mx-2"></i> for travelers worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
