import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLandingPage from "./pages/MainLandingPage/MainLandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
