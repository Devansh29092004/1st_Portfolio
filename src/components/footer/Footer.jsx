import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Devansh</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>
          <li>
            <a href="#skills" className="footer__link">Skills</a>
          </li>
          <li>
            <a href="#services" className="footer__link">Services</a>
          </li>
          <li>
            <a href="#qualification" className="footer__link">Education</a>
          </li>
          <li>
            <a href="#contact" className="footer__link">Contact</a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://www.instagram.com/jagtap_devansh/" className="footer__social-link" target="_blank" rel="noopener noreferrer">
            <i className="uil uil-instagram"></i>
          </a>

          <a href="https://www.linkedin.com/in/devansh-jagtap/" className="footer__social-link" target="_blank" rel="noopener noreferrer">
            <i className="uil uil-linkedin-alt"></i>
          </a>

          <a href="https://github.com/Devansh29092004" className="footer__social-link" target="_blank" rel="noopener noreferrer">
            <i className="uil uil-github-alt"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; 2025 Devansh Jagtap. All rights reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer
