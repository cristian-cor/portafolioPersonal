import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Cristian Correa</h1>
        <div className="contenedo_form">

        </div>
      </div>
      <div className="footer-contact">
        <h3>Contacta me</h3>
        <p>Y pongámonos manos a la obra </p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Diseñado por Cristian Correa</div>
        <div className="sns-links">
          <a href="https://www.linkedin.com/in/cristian-andres-correa-alvarez-30034820a/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://twitter.com/cristia95349399" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter twitter"></i>
          </a>
          <a href="https://www.facebook.com/cristian.correa.5851127" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook facebook"></i>
          </a>
          <a href="https://github.com/cristian-cor" target="_blank" rel="noreferrer">
            <i className="fa-brands github fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer