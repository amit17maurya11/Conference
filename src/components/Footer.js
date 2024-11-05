import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Logo and Description */}
        <div style={styles.logoSection}>
          <h2 style={styles.logo}>Workshop Organizers</h2>
          <p style={styles.description}>
            Vasudeva Varma, IIIT Hyderabad<br /><br />Pushpak Bhattacharya, IIT Bombay
          </p>
        </div>

        {/* Links Section */}
        <div style={styles.linksSection}>
          <div style={styles.column}>
            <h4 style={styles.columnTitle}>About</h4>
            <a href="#" style={styles.link}>
              Conference Schedule
            </a>
          </div>
          <div style={styles.column}>
            <h4 style={styles.columnTitle}>Enterprise</h4>
            <a href="#" style={styles.link}>
              Committees
            </a>
          </div>
          <div style={styles.column}>
            <h4 style={styles.columnTitle}>Contact</h4>
            <a href="#" style={styles.link}>
              Help Desk
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={styles.copyright}>
        <p>© 2024 All rights reserved.</p>
      </div>
    </footer>
  );
};

// Inline CSS styles with responsive adjustments
const styles = {
  footer: {
    backgroundColor: "#1b1b1b",
    color: "#fff",
    padding: "20px 0",
    textAlign: "left",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    flexWrap: "wrap",
  },
  logoSection: {
    flexBasis: "100%",
    maxWidth: "300px",
    marginBottom: "20px",
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
  linksSection: {
    display: "flex",
    flexDirection: "row",
    gap: "30px",
    flexWrap: "wrap",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    minWidth: "100px",
  },
  columnTitle: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "14px",
  },
  copyright: {
    textAlign: "center",
    padding: "20px 0",
    fontSize: "14px",
    borderTop: "1px solid #333",
    marginTop: "20px",
  },

  /* Responsive adjustments */
  '@media (max-width: 768px)': {
    container: {
      flexDirection: "column",
      alignItems: "center",
    },
    linksSection: {
      flexDirection: "column",
      alignItems: "center",
    },
    column: {
      alignItems: "center",
    },
    logo: {
      textAlign: "center",
      fontSize: "22px",
    },
    description: {
      textAlign: "center",
      fontSize: "13px",
    },
    columnTitle: {
      textAlign: "center",
      fontSize: "15px",
    },
    link: {
      textAlign: "center",
      fontSize: "13px",
    },
  },
  '@media (max-width: 480px)': {
    footer: {
      padding: "15px 0",
    },
    logo: {
      fontSize: "20px",
    },
    description: {
      fontSize: "12px",
    },
    columnTitle: {
      fontSize: "14px",
    },
    link: {
      fontSize: "12px",
    },
    copyright: {
      fontSize: "12px",
    },
  },
};

export default Footer;
