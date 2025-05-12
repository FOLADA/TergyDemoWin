import React, { useEffect, useState, useRef, FormEvent } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedin, FaPaperPlane, FaTwitter } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./Footer.css";

const FooterOfTerg: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_ap3f4r8",
        "template_xcz8d2g",
        form.current,
        "6phxnlcUaWnx1TlYO"
      )
      .then(() => {
        console.log("SUCCESS! Email sent.");
        form.current?.reset();
      })
      .catch((error) => {
        console.error("FAILED…", error.text);
      });
  };

  return (
    <footer className={`custom-footer ${isVisible ? "footer-visible" : ""}`}>
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand & Social */}
          <div className="footer-brand">
            <div className="footer-logo" aria-label="თერგი">თერგი</div>
            <p className="footer-tagline">ქართული ენის სიღრმის გამოკვლევა</p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav className="footer-navigation" aria-label="Footer Navigation">
            <h4 className="footer-heading">ნავიგაცია</h4>
            <Link to="/ნაწარმოებანი">ნაწარმოებანი</Link>
            <Link to="/სიმპოზიუმი">სიმპოზიუმი</Link>
            <Link to="/ესეისტი AI">ესეისტი AI</Link>
            <Link to="/რეპეტიტორები">რეპეტიტორები</Link>
            <Link to="/თამაში">თამაში</Link>
          </nav>

          {/* Contact Form */}
          <div className="footer-contact">
            <h4 className="footer-heading">კონტაქტი</h4>
            <form className="footer-form" ref={form} onSubmit={sendEmail}>
              <label htmlFor="email" className="visually-hidden">
                ელ. ფოსტა
              </label>
              <input
                id="email"
                type="email"
                name="user_email"
                placeholder="შეიყვანეთ ელ. ფოსტა"
                required
                aria-label="ელ. ფოსტა"
              />
              <button type="submit" aria-label="გაგზავნა">
                <span>გაგზავნა</span>
                <FaPaperPlane />
              </button>
            </form>
            <div className="footer-legal">
              <p>© {new Date().getFullYear()} თერგი</p>
              <p>ყველა უფლება დაცულია</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOfTerg;
