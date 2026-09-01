import React from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Scan from "./pages/Scan";
import Results from "./pages/Results";
import Recommendations from "./pages/Recommendations";
import DietPlan from "./pages/DietPlan";
import Disclaimer from "./pages/Disclaimer";

import "./App.css";


function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/scan"
          element={<Scan />}
        />

        <Route
          path="/results"
          element={<Results />}
        />

        <Route
          path="/recommendations"
          element={<Recommendations />}
        />

        <Route
          path="/diet-plan"
          element={<DietPlan />}
        />

        <Route
          path="/disclaimer"
          element={<Disclaimer />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>

  );

}


/* =====================================================
   NAVBAR
   ===================================================== */

function Navbar() {

  const location = useLocation();


  return (

    <header className="navbar">

      {/* BRAND */}

      <Link
        to="/"
        className="brand"
      >

        <div className="brand-mark">
          N
        </div>

        <div>

          <div className="brand-name">
            NutriLens
          </div>

          <div className="brand-tagline">
            AI Nutrition Screening
          </div>

        </div>

      </Link>



      {/* NAVIGATION */}

      <nav className="nav-links">

        <Link
          to="/"
          className={
            location.pathname === "/"
              ? "active"
              : ""
          }
        >
          Home
        </Link>


        <Link
          to="/about"
          className={
            location.pathname === "/about"
              ? "active"
              : ""
          }
        >
          About
        </Link>


        <Link
          to="/scan"
          className={
            location.pathname === "/scan"
              ? "active"
              : ""
          }
        >
          Scan
        </Link>


        <Link
          to="/disclaimer"
          className={
            location.pathname === "/disclaimer"
              ? "active"
              : ""
          }
        >
          Safety
        </Link>

      </nav>



      {/* SCAN BUTTON */}

      <Link
        to="/scan"
        className="nav-scan-button"
      >

        <span>
          Start Scan
        </span>

        <span>
          →
        </span>

      </Link>

    </header>

  );

}


/* =====================================================
   FOOTER
   ===================================================== */

function Footer() {

  return (

    <footer className="site-footer">


      <div className="footer-brand">

        <div className="brand-mark">
          N
        </div>

        <div>

          <strong>
            NutriLens
          </strong>

          <p>
            AI-powered nutrition screening
          </p>

        </div>

      </div>



      <div className="footer-right">

        <p>
          Screening and awareness tool — not a medical diagnosis.
        </p>

        <p>
          © 2026 NutriLens
        </p>

      </div>


    </footer>

  );

}


export default App;