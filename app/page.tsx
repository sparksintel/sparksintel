"use client";

import { useState } from "react";

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const propositions = [
    {
      id: 1,
      title: "Engineered Trust",
      tagline: "Rigorous Safeguards",
      description: "At Sparks Intelligence, we believe trust is engineered—not assumed. In an increasingly complex global landscape, surface-level data and standard checks are no longer enough to completely safeguard institutional capital."
    },
    {
      id: 2,
      title: "Structural Clarity",
      tagline: "Eliminating Blind Spots",
      description: "We combine deep analytical rigor with complete transparency to deliver high-fidelity data infrastructure for risk and credit functions. Our platform provides the structural clarity required to make confident, high-stakes decisions—eliminating blind spots and reducing reliance on fragmented, manual analysis."
    }
  ];

  return (
    <main
      style={{
        backgroundColor: "#f8fafc",
        color: "#334155",
        minHeight: "100vh",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "140px 40px",
        }}
      >
        {/* PREMIUM ASYMMETRIC DUAL-COLUMN GRID */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "80px", alignItems: "start" }}>
          
          {/* LEFT COLUMN: Sticky Brand Anchor */}
          <div style={{ position: "sticky", top: "140px" }}>
            <div
              style={{
                color: "#FF8200",
                textTransform: "uppercase",
                letterSpacing: "2.5px",
                fontSize: "14px",
                fontWeight: "700",
                marginBottom: "20px",
              }}
            >
              Systematic Profiling Across Risk & Knowledge Signals
            </div>

            <h1
              style={{
                fontSize: "56px",
                lineHeight: "1.15",
                marginBottom: "40px",
                fontWeight: "800",
                letterSpacing: "-1.5px",
                color: "#0A2D5F"
              }}
            >
              Trust is Engineered.
              <br />
              Not Assumed.
            </h1>

            <div 
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid #e2e8f0",
                boxShadow: "0 20px 40px -15px rgba(10, 45, 95, 0.08)",
                maxWidth: "100%"
              }}
            >
              <img
                src="/images/Home.jpg"
                alt="Sparks Intelligence data platform interface"
                style={{
                  width: "100%",
                  height: "320px",
                  display: "block",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Proposition Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {propositions.map((item) => {
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
                    boxShadow: isHovered 
                      ? "0 20px 40px -10px rgba(10, 45, 95, 0.12)" 
                      : "0 4px 6px -1px rgba(10, 45, 95, 0.02)",
                    transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden"
                  }}
                >
                  <div 
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: "4px",
                      backgroundColor: "#FF8200",
                      transform: isHovered ? "scaleY(1)" : "scaleY(0)",
                      transition: "transform 0.25s ease",
                    }}
                  />

                  <div
                    style={{
                      color: "#FF8200",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      fontSize: "11px",
                      fontWeight: "700",
                      marginBottom: "8px",
                    }}
                  >
                    {item.tagline}
                  </div>

                  <h3
                    style={{
                      fontSize: "26px",
                      fontWeight: "700",
                      letterSpacing: "-0.5px",
                      marginBottom: "16px",
                      color: "#0A2D5F",
                    }}
                  >
                    {item.title}
                  </h3>
                  
                  <p
                    style={{
                      fontSize: "18px",
                      lineHeight: "1.8",
                      color: "#475569",
                      margin: 0,
                      fontWeight: "400"
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}