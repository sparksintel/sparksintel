"use client";

import { useState } from "react";

export default function AboutSparks() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const pillars = [
    {
      id: 1,
      title: "Absolute Data Sovereignty",
      tagline: "Secure Framework",
      description: "Sparks Intelligence is an enterprise-grade analytics and intelligence platform built for institutions that demand absolute data sovereignty. We believe that generating deep, 360-degree diligence should never require compromising the security or containment of an organization's proprietary data."
    },
    {
      id: 2,
      title: "Eliminating Blind Spots",
      tagline: "High-Fidelity Signals",
      description: "We equip enterprises with localized system architectures that deliver comprehensive credit insights, covering risk from all possible angles. By replacing public-cloud dependencies with secure, localized architectural profiling, Sparks Intelligence provides leadership teams with the crisp knowledge signals they need to evaluate risks safely and accurately."
    }
  ];

  return (
    <main style={{ backgroundColor: "#f8fafc", color: "#334155", minHeight: "100vh", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "140px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "80px", alignItems: "start" }}>
          
          {/* Left Column: Fixed Sidebar */}
          <div style={{ position: "sticky", top: "140px" }}>
            <div style={{ color: "#FF8200", textTransform: "uppercase", letterSpacing: "2px", fontSize: "11px", fontWeight: "700", marginBottom: "20px" }}>
              Core Architecture
            </div>
            <h1 style={{ fontSize: "52px", fontWeight: "800", lineHeight: "1.15", marginBottom: "40px", letterSpacing: "-1.5px", color: "#0A2D5F" }}>
              About SPARKS
            </h1>
            
            {/* Image Block - Ensures the file in public/images/aboutus1.jpg is loaded */}
            <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid #e2e8f0", boxShadow: "0 20px 40px -15px rgba(10, 45, 95, 0.08)", width: "100%", height: "280px" }}>
              <img 
                src="/images/aboutus1.jpg" 
                alt="Sparks Intelligence secure enterprise infrastructure" 
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} 
              />
            </div>
          </div>

          {/* Right Column: Content Pillars */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {pillars.map((item) => {
              const isHovered = hoveredCard === item.id;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "40px",
                    borderRadius: "16px",
                    border: "1px solid",
                    borderColor: isHovered ? "#0A2D5F" : "#e2e8f0",
                    boxShadow: isHovered ? "0 20px 40px -10px rgba(10, 45, 95, 0.12)" : "0 4px 6px -1px rgba(10, 45, 95, 0.02)",
                    transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden"
                  }}
                >
                  <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "4px", backgroundColor: "#FF8200", transform: isHovered ? "scaleY(1)" : "scaleY(0)", transition: "transform 0.25s ease" }} />
                  <div style={{ color: "#FF8200", textTransform: "uppercase", letterSpacing: "1px", fontSize: "11px", fontWeight: "700", marginBottom: "8px" }}>{item.tagline}</div>
                  <h3 style={{ fontSize: "26px", fontWeight: "700", letterSpacing: "-0.5px", marginBottom: "16px", color: "#0A2D5F" }}>{item.title}</h3>
                  <p style={{ lineHeight: "1.8", fontSize: "17px", color: "#475569", margin: 0, fontWeight: "400" }}>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}