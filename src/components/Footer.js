import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Logo and Description */}
        <div style={styles.logoSection}>
          <h2 style={styles.logo}>Workshop Organizers</h2>
          <p style={styles.description}>
            Vasudeva Varma, IIIT Hyderabad<br/> <br/>Pushpak Bhattacharya, IIT Bombay
          </p>
          {/* Social Media Icons */}
          {/* <div style={styles.socialIcons}>
            <div style={styles.icon}></div>
            <div style={styles.icon}></div>
            <div style={styles.icon}></div>
          </div> */}
        </div>

        {/* Links Section */}
        <div style={styles.linksSection}>
          <div style={styles.column}>
            <h4>About</h4>
            <a href="#" style={styles.link}>
              Conference Schedule
            </a>
            {/* <a href="#" style={styles.link}>Buy Tickets</a> */}
            {/* <a href="#"style={styles.link}>Sponsoring</a> */}
            {/* <a href="#"style={styles.link}>Volunteer</a> */}
          </div>
          <div style={styles.column}>
            <h4>Enterprise</h4>
            <a href="#" style={styles.link}>
              Committees
            </a>
            {/* <a href="#"style={styles.link}>Advisory Boards</a> */}
            {/* <a href="#"style={styles.link}>Apply to Speak</a> */}
            {/* <a href="#"style={styles.link}>Register</a> */}
          </div>
          <div style={styles.column}>
            <h4>Contact</h4>
            <a href="#" style={styles.link}>
              Help Desk
            </a>
            {/* <a href="#"style={styles.link}>Contact Us</a> */}
            {/* <a href="#"style={styles.link}>Documentation</a> */}
            {/* <a href="#"style={styles.link}>Newsletter</a> */}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={styles.copyright}>
        <p>
          © 2024 All rights reserved.
        </p>
      </div>
    </footer>
  );
};

// Inline CSS styles
const styles = {
  footer: {
    backgroundColor: "#1b1b1b",
    color: "#fff",
    padding: "15px 0",
    textAlign: "left",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  logoSection: {
    maxWidth: "300px",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  description: {
    fontSize: "14px",
    marginBottom: "20px",
  },
  socialIcons: {
    display: "flex",
    gap: "10px",
  },
  icon: {
    width: "30px",
    height: "30px",
    backgroundColor: "#333",
    borderRadius: "5px",
  },
  linksSection: {
    display: "flex",
    gap: "30px",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
  },
  copyright: {
    textAlign: "center",
    padding: "20px 0",
    fontSize: "14px",
    borderTop: "1px solid #333",
    marginTop: "20px",
  },
};

export default Footer;
