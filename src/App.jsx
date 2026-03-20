import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import FooterCTA from './components/FooterCTA';
import Home from './pages/Home';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col relative w-full overflow-x-hidden bg-surface">
        <Navbar />
        <main className="flex-grow flex flex-col w-full z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <FooterCTA />
      </div>
    </Router>
  );
}

export default App;
