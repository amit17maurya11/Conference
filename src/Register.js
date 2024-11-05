import React from "react";

const Register = () => {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>Register for the Workshop</h2>
      <div style={styles.details}>
        <p style={styles.detailItem}>
          <strong style={{ color: "#000",fontWeight:800, margin:'20px 30%' }}>Workshop Details</strong>
        </p>
        <p style={styles.detailItem}>
          <strong style={{ color: "#000" ,fontWeight: 800}}>Duration: Full day</strong>
        </p>
        <p style={styles.detailItem}>
          <strong style={{ color: "#000",fontWeight: 800}}>Target Audience:</strong> <strong style={{ color: "#000" }}>All faculty members currently teaching and interested in teaching NLP courses</strong>
        </p>
        <p style={styles.detailItem}>
          <strong style={{ color: "#000",fontWeight: 800 }}>Mode: </strong> <strong style={{ color: "#000" }}>Invited presentations in the forenoon followed by discussions in the afternoon.</strong>
        </p>
        <p style={styles.detailItem}>
          <strong style={{ color: "#000",fontWeight: 800 }}>Expected Output:</strong> <strong style={{ color: "#000" }}>White paper on recommendations on the topic of the workshop.</strong>
        </p>
      </div>
      <button style={styles.button}>REGISTER NOW</button>
    </div>
  );
};

const styles = {
  card: {
    background: 'linear-gradient(135deg, #f0c3fc 0%, #a2d2fc 100%)',
    borderRadius: "15px",
    color: "#ffffff",
    padding: "20px",
    maxWidth: "500px",
    margin: "0 auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    marginTop: "5%",
    marginBottom: "5%",
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    width: '90%',
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: '#000',
  },
  details: {
    marginBottom: "20px",
    lineHeight: '1.6em',
    textAlign: 'justify',
  },
  detailItem: {
    fontSize: "14px",
  },
  button: {
    backgroundColor: "#ff6b6b",
    color: "#ffffff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  
  // Media queries for responsiveness
  '@media (max-width: 768px)': {
    title: {
      fontSize: "18px",
      marginBottom: "8px",
    },
    card:{
      width:'80%',
    },
    detailItem: {
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
      marginBottom: "5px",
    },
    card: {
      padding: "15px",
      width:'80%',
    },
    button: {
      fontSize: "12px",
      padding: "7px 16px",
    },
  },
};


export default Register;
