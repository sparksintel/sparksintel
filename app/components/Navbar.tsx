"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [imageError, setImageError] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navItemStyle = {
    color: "#1e293b", 
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "600",
    letterSpacing: "0.5px",
    transition: "color 0.2s ease",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    height: "100%",
  };

  const dropdownLinkStyle = {
    color: "#334155",
    textDecoration: "none",
    fontSize: "13px",
    fontWeight: "500",
    padding: "10px 16px",
    display: "block",
    transition: "background-color 0.2s ease, color 0.2s ease",
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.backgroundColor = "#f8fafc";
    e.currentTarget.style.color = "#0A2D5F";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.backgroundColor = "transparent";
    e.currentTarget.style.color = "#334155";
  };

  return (
    <header
      style={{
        backgroundColor: "#ffffff",     
        borderBottom: "1px solid #e2e8f0", 
        padding: "8px 40px", 
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxShadow: "none" 
      }}
    >
      <div
        style={{
          maxWidth: "1400px",          
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between", 
          alignItems: "center",
        }}
      >
        {/* BRAND SIGNATURE */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            gap: "18px"
          }}
        >
          {!imageError && (
            <img 
              src="/images/logo-icon.png" 
              alt="Sparks Intelligence Icon" 
              onError={() => setImageError(true)}
              style={{
                height: "96px",        
                width: "auto",
                objectFit: "contain",
                display: "block",
                style: { contentVisibility: "auto" }
              } as React.CSSProperties} 
            />
          )}

          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ color: "#0f2547", fontWeight: "800", fontSize: "26px", letterSpacing: "0.5px", fontFamily: "system-ui, -apple-system, sans-serif" }}>SPARKS</span>
              <span style={{ color: "#0f2547", fontWeight: "400", fontSize: "26px", letterSpacing: "0.5px", fontFamily: "system-ui, -apple-system, sans-serif" }}>INTELLIGENCE</span>
            </div>
            
            <span style={{ color: "#1e3a66", fontSize: "10.5px", fontWeight: "700", letterSpacing: "1.2px", textTransform: "uppercase", fontFamily: "system-ui, -apple-system, sans-serif", marginTop: "4px" }}>
              Systematic Profiling Across Risk & Knowledge Signals
            </span>

            <span style={{ color: "#d97706", fontSize: "12px", fontWeight: "800", letterSpacing: "1.5px", textTransform: "uppercase", fontFamily: "system-ui, -apple-system, sans-serif", marginTop: "5px" }}>
              360° INSIGHT. ZERO BLIND SPOTS.
            </span>
          </div>
        </Link>

        {/* RIGHT SIDE: NAVIGATION ITEMS */}
        <nav style={{ display: "flex", gap: "28px", flexWrap: "wrap", alignItems: "center" }}>
          <Link href="/" style={navItemStyle}>Home</Link>
          
          {/* INTERACTIVE DROP-DOWN CONTAINER */}
          <div 
            style={{ 
              position: "relative", 
              display: "inline-block", 
              paddingBottom: "20px", /* Creates a bridge over the gap */
              marginBottom: "-20px"  /* Prevents alignment shifts */
            }}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span style={navItemStyle}>
              About <span style={{ fontSize: "10px", marginLeft: "4px", transform: dropdownOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▼</span>
            </span>

            {/* Drop-down Flyout Menu */}
            {dropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  backgroundColor: "#ffffff",
                  minWidth: "180px",
                  boxShadow: "0 10px 25px -5px rgba(10, 45, 95, 0.1)",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  padding: "6px 0",
                  zIndex: 200,
                  marginTop: "0px" /* Removed the structural layout gap */
                }}
              >
                {/* 1) Origin */}
                <Link 
                  href="/about/origin" 
                  style={dropdownLinkStyle} 
                  onMouseEnter={handleMouseEnter} 
                  onMouseLeave={handleMouseLeave}
                >
                  Origin
                </Link>

                {/* 2) About SPARKS */}
                <Link 
                  href="/about/about-sparks" /* Fixed: Was /about/thesis */
                  style={dropdownLinkStyle} 
                  onMouseEnter={handleMouseEnter} 
                  onMouseLeave={handleMouseLeave}
                >
                  About SPARKS
                </Link>

                {/* 3) Leadership */}
                <Link 
                  href="/about/leadership" 
                  style={dropdownLinkStyle} 
                  onMouseEnter={handleMouseEnter} 
                  onMouseLeave={handleMouseLeave}
                >
                  Leadership
                </Link>
              </div>
            )}
          </div>

          <Link href="/mission-vision" style={navItemStyle}>Mission & Vision</Link>
          <Link href="/principles" style={navItemStyle}>Principles</Link>
          <Link href="/commitment" style={navItemStyle}>Commitment</Link>
          <Link href="/responsible-ai" style={navItemStyle}>Responsible AI</Link>
          <Link href="/careers" style={navItemStyle}>Careers</Link>
        </nav>
      </div>
    </header>
  );
}