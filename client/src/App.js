import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Smart from "./pages/Smart";
import ContractViewer from "./pages/ContractViewer";

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/app" element={<Smart />} />
            <Route path="/contract" element={<ContractViewer />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
