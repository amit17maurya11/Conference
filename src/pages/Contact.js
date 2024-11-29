import React from "react";

const Contact = () => {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>Contact Us</h2>
      {/* <p style={styles.subtitle}>
        We are here to meet any business need and to promote your company
        online!
      </p> */}
      <div style={styles.contactInfo}>
      <p style={styles.contactItem}>
          <strong style={{color:'#000'}}>Vasudeva Varma, IIIT Hyderabad</strong>
        </p>
        {/* <p style={styles.contactItem}>
          <strong  style={{color:'#000'}}> Phone:1(232) 252 55 22</strong> 
        </p> */}
        {/* <p style={styles.contactItem}>
          <strong>Location:</strong> 75 Street Sample, WI 63025
        </p> */}
        <p style={styles.contactItem}>
          <strong  style={{color:'#000'}}>Mail: template'at'sample.com</strong>
        </p>
      </div>
      <div style={styles.contactInfo}>
      <p style={styles.contactItem}>
      <strong style={{color:'#000'}}>Pushpak Bhattacharya, IIT Bombay</strong>
        </p>
        {/* <p style={styles.contactItem}>
          <strong  style={{color:'#000'}}>Phone:1 (232) 252 55 22</strong> 
        </p> */}
        {/* <p style={styles.contactItem}>
          <strong>Location:</strong> 75 Street Sample, WI 63025
        </p> */}
        <p style={styles.contactItem}>
          <strong  style={{color:'#000'}}>Mail: template'at'sample.com</strong>
        </p>
      </div>
      <button style={styles.button}>CONTACTS</button>
      {/* <p style={styles.imageAttribution}>
        Image from{" "}
        <a href="https://www.freepik.com" target="_blank" style={styles.link}>
          Freepik
        </a>
      </p>
      <img
        src="https://via.placeholder.com/150" // replace with actual image source
        alt="Contact Person"
        style={styles.image}
      /> */}
    </div>
  );
};

const styles = {
  card: {
    background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
    borderRadius: "15px",
    color: "#ffffff",
    padding: "20px",
    maxWidth: "500px",
    margin: '0 auto',
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    marginTop: '5%',
    marginBottom: "5%",
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    width: '90%', // Adjusts to screen size
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "45px",
    color: '#000',
  },
  contactInfo: {
    marginBottom: "20px",
    lineHeight: '1.6em',
  },
  contactItem: {
    fontSize: "14px",
    margin: "5px 0",
  },
  button: {
    backgroundColor: "#ffae42",
    color: "#ffffff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    marginBottom: "20px",
  },
  imageAttribution: {
    fontSize: "10px",
    marginBottom: "10px",
    color: "#e0e0e0",
  },
  link: {
    color: "#e0e0e0",
    textDecoration: "none",
  },
  image: {
    width: "100px",
    height: "auto",
    borderRadius: "50%",
    marginTop: "10px",
  },
  
  // Media queries for responsiveness
  '@media (max-width: 768px)': {
    title: {
      fontSize: "18px",
      marginBottom: "35px",
    },
    contactItem: {
      fontSize: "13px",
    },
    button: {
      fontSize: "13px",
      padding: "8px 18px",
    },
  },
  '@media (max-width: 480px)': {
    title: {
      fontSize: "16px",
      marginBottom: "25px",
    },
    card: {
      padding: "15px",
    },
    button: {
      fontSize: "12px",
      padding: "7px 16px",
    },
  },
};

export default Contact;
