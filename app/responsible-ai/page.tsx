"use client"; // Marks this as a Client Component for the interactive transitions

import { useState } from "react";

export default function ResponsibleAI() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const principles = [
    {
      id: 1,
      title: "Total Data Isolation via Local LLMs",
      subtitle: "No Public AI Exposure",
      description: "We utilize local, self-hosted Large Language Models (LLMs). Your proprietary financial records, client information, and internal data are processed entirely within a secure, isolated infrastructure. Your data is never transmitted to public AI APIs and is never used to train open-source or commercial models."
    },
    {
      id: 2,
      title: "Human-in-the-Loop Architecture",
      subtitle: "Bulletproof Checkpoints",
      description: "Once financial data is extracted by our local models, the workflow pauses. A human reviewer must verify and approve the extracted data before the system moves forward. Our AI agents synthesize data and draft reports, but the final decision always rests with a human officer."
    },
    {
      id: 3,
      title: "Compliant & Auditable 360° Due Diligence",
      subtitle: "Full Data Lineage",
      description: "We aggregate data exclusively from verified public APIs and authoritative corporate registries. Every piece of data used in a check is timestamped and mapped back to its original public source, ensuring all background checks are legally compliant and audit-ready."
    },
    {
      id: 4,
      title: "No Black Box Explanations",
      subtitle: "Transparent Rationale",
      description: "Financial compliance requires a clear rationale. When our local AI structures data or highlights an anomaly during corporate due diligence, it provides an accompanying explanation and source citation so your team always knows exactly why it was flagged."
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
        {/* MATCHING ASYMMETRIC DUAL-COLUMN GRID */}
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
              Compliance Framework
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
              Trust, Privacy, & Responsible AI
            </h1>

            <p style={{ color: "#64748b", fontSize: "18px", lineHeight: "1.6", marginBottom: "40px" }}>
              At Sparks Intelligence, we build advanced agentic AI and data extraction pipelines designed for highly regulated environments. Our frameworks operate strictly within the guardrails of the NIST AI Risk Management Framework and the OECD AI Principles.
            </p>

            {/* Matched Premium Image Frame Component */}
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
                src="/images/responsible%20AI.jpg" 
                alt="Sparks Intelligence Responsible AI Framework Architecture Diagram" 
                style={{
                  width: "100%",
                  height: "280px", 
                  objectFit: "cover",
                  display: "block"
                }} 
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Premium Interactive Framework Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {principles.map((item) => {
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
                    {item.subtitle}
                  </div>

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