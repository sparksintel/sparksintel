"use client"; // Marks this as a Client Component for smooth interaction animations

import { useState } from "react";

export default function CommitmentPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const commitments = [
    {
      id: 1,
      title: "Zero Blind Spots",
      description: "We provide the diagnostic tools needed to build a secure, deep-dive architectural profile around every entity, ensuring your teams see the hidden risks that automated, surface-level screening routinely misses."
    },
    {
      id: 2,
      title: "Sovereign & Secure",
      description: "Our infrastructure strictly respects localized regulatory boundaries and data compliance, giving your organization high-precision data tools you can legally, ethically, and operationally stand behind."
    },
    {
      id: 3,
      title: "Absolute Clarity",
      description: "We translate complex market noise into definitive, actionable knowledge signals, allowing your credit and risk functions to move onwards and upwards with total confidence."
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
          
          {/* LEFT COLUMN: Sticky Brand Anchor with Image */}
          <div style={{ position: "sticky", top: "140px" }}>
            <div
              style={{
                color: "#FF8200", /* Your Exact Accent Gold */
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontSize: "11px",
                fontWeight: "700",
                marginBottom: "20px",
              }}
            >
              Institutional Guarantee
            </div>

            <h1
              style={{
                fontSize: "52px",
                fontWeight: "800",
                lineHeight: "1.15",
                marginBottom: "24px",
                letterSpacing: "-1.5px",
                color: "#0A2D5F", /* Your Exact Primary Navy */
              }}
            >
              The Sparks Commitment
            </h1>

            <p style={{ color: "#64748b", fontSize: "18px", lineHeight: "1.6", marginBottom: "40px" }}>
              The uncompromising execution and security standards we commit to delivering across every institutional client engagement.
            </p>

            {/* NEW ADDITION: Premium Image Frame Component */}
            <div 
              style={{ 
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid #e2e8f0", 
                boxShadow: "0 20px 40px -15px rgba(10, 45, 95, 0.08)", /* Navy Drop Shadow */
                maxWidth: "100%"
              }}
            >
              <img 
                src="/images/Commitment.jpg" 
                alt="Sparks Intelligence Institutional Commitment Visual" 
                style={{
                  width: "100%",
                  height: "260px", 
                  objectFit: "cover",
                  display: "block"
                }} 
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Premium Interactive Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {commitments.map((item) => {
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
                  {/* Left accent border that fills in with your Accent Gold on hover */}
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

                  <h3
                    style={{
                      fontSize: "24px",
                      fontWeight: "700",
                      letterSpacing: "-0.5px",
                      marginBottom: "16px",
                      color: "#0A2D5F", /* Your Exact Primary Navy */
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      lineHeight: "1.7",
                      fontSize: "16px",
                      color: "#475569",
                      margin: 0
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