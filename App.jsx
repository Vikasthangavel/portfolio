import React, { useMemo, useState } from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import useUiEffects from "./hooks/useUiEffects";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = useMemo(
    () => [
      { href: "#about", label: "About" },
      { href: "#portfolio", label: "Portfolio" },
      { href: "#integrations", label: "Integrations" },
      { href: "#approach", label: "Approach" },
      { href: "#contact", label: "Contact" },
    ],
    []
  );

  useUiEffects();

  return (
    <>
      <div className="fx-layer" aria-hidden="true">
        <span className="fx-orb one"></span>
        <span className="fx-orb two"></span>
        <span className="fx-orb three"></span>
      </div>

      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} navLinks={navLinks} />
      <HomePage />
      <Footer />
    </>
  );
}
