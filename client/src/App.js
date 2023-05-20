import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Smart from "./pages/Smart";

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/app" element={<Smart />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
