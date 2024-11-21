import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './theme/Header'; 
import Footer from './theme/Footer';
import LandingPage from './pages/LandingPage'; 
import './App.css';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
