import React from 'react'
import styles from './Footer.module.css'
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterest } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.newsletter}>
        <div className={styles.logoText}>
          <div className={styles.logoCircle}>OLI<br />POP</div>
          <p>Stay Connected With<br />OLIPOP</p>
        </div>
        <form className={styles.form}>
          <input type="email" placeholder="Enter Your Email" />
          <button type="submit">SUBSCRIBE</button>
        </form>
      </div>

      <div className={styles.links}>
        <div>
          <h4>FLAVOURS</h4>
          <ul>
            <li>Watermelon Lime</li>
            <li>Vintage Cola</li>
            <li>Classic Root Beer</li>
            <li>Doctor Goodwin</li>
            <li>Banana Cream</li>
            <li>Strawberry Vanilla</li>
            <li>Ginger Lemon</li>
          </ul>
        </div>

        <div>
          <h4>INFORMATION</h4>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className={styles.social}>
          <h4>SOCIAL MEDIA</h4>
          <div className={styles.icons}>
            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaPinterest />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
