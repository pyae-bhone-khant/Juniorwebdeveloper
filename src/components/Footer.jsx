import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Footer.css"

export default function Footer() {
    const date = new Date().getFullYear();

  return (
    <footer>
        <div className="footer-container">
            <img src="../../public/footerLogo.png" alt="" />
            <div className="links-container">
                <div className="footer-para">
                    <h3>Explore your journey and <br /> roadmap with us.</h3>
                    <button>Contact</button>
                </div>
                <div className="social-container">
                    <ul>
                    <h6>NAVIGATE</h6>  
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">about</Link></li>
                    </ul>
                <ul>
                    <h6>SOCIAL & STUFF</h6>  
                    <li><Link to="/">Twitter</Link></li>
                    <li><Link to="/about">Instagram</Link></li>
                    <li><Link to="/about">Telegram</Link></li>
                    <li><Link to="/about">Facebook</Link></li>
                </ul>
                <ul>
                    <h6>CONTACT</h6>  
                    <li><Link to="/">malsdkfj@outlook.com</Link></li>
                </ul>
                </div>
            </div>
            <hr style={{marginTop: "40px", opacity: '.2'}} />
            <div className="copyright">
                <p>&copy; {date} ALL RIGHTS RESERVED. PRIVACY POLICY</p>
                <p style={{textAlign: "right"}}>WE'RE GRITTY AF <br />
                    FLORIDA, ARGENTINA, GERMANY, POLAND, FRANCE</p>
            </div>
        </div>
    </footer>
  )
}
