import React, { useState } from 'react';

const affirmations = [
  "I am a Queen, and I rule my own destiny!",
  "Slay every challenge that comes your way!",
  "Confidence is my crown, and I wear it daily!",
  "Nothing can stop me—I am unstoppable!",
  "I radiate power, beauty, and success!"
];

function App() {
  const [index, setIndex] = useState(0);

  const nextAffirmation = () => {
    setIndex((prevIndex) => (prevIndex + 1) % affirmations.length);
  };

  return (
    <div style={{
      textAlign: "center", 
      padding: "50px", 
      backgroundColor: "#fbe7e7", 
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <h1 style={{ color: "#D63384", fontSize: "3rem" }}>Slay Like a Queen 👑</h1>
      <p style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "20px", maxWidth: "600px" }}>
        {affirmations[index]}
      </p>
      <button 
        onClick={nextAffirmation} 
        style={{
          padding: "15px 30px",
          fontSize: "18px",
          backgroundColor: "#D63384",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
          transition: "background 0.3s"
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = "#A81C6D"}
        onMouseOut={(e) => e.target.style.backgroundColor = "#D63384"}
      >
        Next Affirmation ✨
      </button>
    </div>
  );
}

export default App;

