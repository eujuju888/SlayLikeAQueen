import React, { useState } from "react";

// 100 Days of Badass Affirmations
const affirmations = [
  { text: "I am a f*cking queen, and I don’t need permission to shine. 👑", action: "Walk with confidence today—shoulders back, head high." },
  { text: "I don’t chase. I attract. What’s meant for me will f*cking find me.", action: "Let go of something today that is no longer serving you." },
  { text: "I am enough. Actually, I’m more than enough. I’m unstoppable.", action: "Write down three things you love about yourself." },
  { text: "If they say I can’t, I’ll do it twice and take f*cking pictures. 📸", action: "Do something today that scares you, even a little." },
  { text: "I don’t need validation—I validate my own greatness.", action: 'Stand in front of a mirror and say, "I am powerful as f*ck."' },
  { text: "I am fearless, and I welcome every challenge that comes my way.", action: "Face one fear today—no excuses." },
  { text: "I am stronger than my doubts, and I refuse to let them hold me back.", action: "Write down one self-doubt and turn it into a powerful statement." },
  { text: "I am worthy of success, love, and all the good sh*t life has to offer.", action: "Treat yourself today—because you f*cking deserve it." },
  { text: "I don’t need to fit in. I was born to stand the f*ck out.", action: "Wear something bold today and own your unique style." },
  { text: "I don’t owe anyone an explanation for being my badass self.", action: "Say NO to something today that doesn’t serve you." },
  { text: "I am a force to be reckoned with, and I f*cking know it.", action: "Walk into every room today like you belong there." },
  { text: "I am limitless, and I refuse to let anyone put me in a box.", action: "Do something today that pushes past your comfort zone." },
  { text: "I radiate confidence, and everyone around me feels it.", action: "Compliment yourself every time you see a mirror today." },
  { text: "I trust myself. I know what’s best for me.", action: "Follow your gut on one decision today without second-guessing." },
  { text: "I am constantly evolving, growing, and leveling the f*ck up.", action: "Learn something new today that moves you forward." },
  { text: "I refuse to let negativity take up space in my life.", action: "Remove one toxic thing (or person) from your social media today." },
  { text: "I deserve to be seen, heard, and respected.", action: "Speak up in one situation today where you’d normally stay quiet." },
  { text: "I create my own opportunities—I don’t wait for them.", action: "Reach out to someone who could help move your goals forward." },
  { text: "I am a powerhouse, and nothing can f*cking stop me.", action: "Tackle one task today that’s been sitting on your to-do list." },
  { text: "I am capable of achieving everything I f*cking dream of.", action: "Set one goal today and take the first step toward it." },
  { text: "I don’t play small—I was born for big things.", action: "Step outside your comfort zone today and own it." },
  { text: "I choose to believe in myself, even when no one else does.", action: "Write yourself a letter of encouragement." },
  { text: "I am fearless, bold, and I never back down from a challenge.", action: "Take on something today that makes you nervous." },
  { text: "I am the architect of my own f*cking destiny.", action: "Write down three things you want to manifest in your life." },
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
        {affirmations[index].text}
      </p>
      <p style={{ fontSize: "1.2rem", fontStyle: "italic", color: "#555", marginBottom: "20px" }}>
        🎯 {affirmations[index].action}
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
