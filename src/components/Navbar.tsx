"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > window.innerHeight * 0.55);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${showNav ? "navbar-visible" : ""}`}>
      <div className="navbar-inner">
        <a href="#" className="logo">
          DENTÉ
        </a>

        <nav>
          <a href="#treatments">Treatments</a>
          <a href="#doctors">Doctors</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#booking" className="nav-button">
          Book Appointment
        </a>
      </div>
    </header>
  );
}