import React, { useState } from "react";
import './App.css';

function App() {
  const [certificateCode, setCertificateCode] = useState("");
  const [verificationResult, setVerificationResult] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Mock validation for demonstration
    if (certificateCode === "CERT123") {
      setVerificationResult("Certificate is valid!");
    } else {
      setVerificationResult("Invalid certificate code.");
    }
  };

  return (
    <div className="App">
      <header>
        <nav>
          <h1>Verify Certificates</h1>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#verify">Verify</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home">
          <h2>Welcome to the Certificate Verification Portal</h2>
          <p>Enter your certificate code below to verify its authenticity.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={certificateCode}
              onChange={(e) => setCertificateCode(e.target.value)}
              placeholder="Enter Certificate Code"
              required
            />
            <button type="submit">Verify</button>
          </form>
          <div id="result">
            {verificationResult && (
              <p style={{ color: verificationResult.includes("valid") ? "green" : "red" }}>
                {verificationResult}
              </p>
            )}
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Certificate Verification Portal. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
