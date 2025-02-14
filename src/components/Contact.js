import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here (e.g., send data to an API)
    setSubmitted(true); // Set submitted state to true
  };

  return (
    <div style={styles.container}>
      <h3>Contact Form</h3>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required style={styles.textarea}></textarea>
        </div>
        <button type="submit" style={styles.button}>Send</button>
      </form>
      {submitted && (
        <p style={styles.successMessage}>Your message has been sent successfully!</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '0 auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  formGroup: {
    marginBottom: '10px',
  },
  input: {
    padding: '10px',
    borderRadius: '20px',
    border: '1px solid #ccc',
    width: '100%',
  },
  textarea: {
    padding: '10px',
    borderRadius: '20px',
    border: '1px solid #ccc',
    width: '100%',
    height: '100px',
  },
  button: {
    padding: '8px 15px',
    borderRadius: '20px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    fontWeight: 'bold',
    marginTop: '10px',
    alignSelf: 'center',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', // Added shadow for depth
  },
  successMessage: {
    color: 'green',
    marginTop: '10px',
    fontWeight: 'bold', // Added bold font for emphasis
  },
};

export default Contact;