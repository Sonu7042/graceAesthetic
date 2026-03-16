import React, { use, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar.jsx';
import Footer from './component/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import AboutPage from './pages/AboutPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import BlogDetailPage from './pages/BlogDetailPage.jsx';
import Lenis from "lenis";
import ScrollToTop from './common/ScrollToTop.jsx';
import Billora from './pages/BilloraPage.jsx';

function App() {


  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 1.2,
  //     easing: (t) => 1 - Math.pow(1 - t, 3),
  //     smoothWheel: true,
  //     smoothTouch: false,
  //   });


  //   let rafId;

  //   const raf = (time) => {
  //     lenis.raf(time);
  //     rafId = requestAnimationFrame(raf);
  //   };

  //   rafId = requestAnimationFrame(raf);

  //   return () => {
  //     cancelAnimationFrame(rafId);
  //     lenis.destroy();
  //   };
  // }, []);


  return (
    <Router>
      <div className="antialiased text-luxury-dark min-h-screen flex flex-col">
        <Navbar />
        <ScrollToTop />
        <main className="grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectDetail />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />
            <Route path="/billora" element={<Billora />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;